import { Producer } from '@lead-service/shared/protocols/pub-sub';
import {
  CompressionTypes,
  Kafka,
  Producer as KafkaProducer,
  Message as KafkaMessage,
} from 'kafkajs';

type Acks = 1 | 0 | -1; // 1 Leader | 0 None | -1 All

interface KafkaProducerOptions {
  acks?: Acks;
  key?: string;
  partition?: number;
  headers?: {
    [key: string]: string | string[];
  };
}

export class KafkaProducerAdapter<Message> implements Producer<Message, KafkaProducerOptions> {
  private readonly producer: KafkaProducer;
  private isConnected: boolean = false;

  constructor(kafka: Kafka) {
    // TODO avaliar possibilidade de injeção de configurações
    this.producer = kafka.producer();

    this.producer.on(this.producer.events.CONNECT, () => {
      this.isConnected = true;
    });
  }

  public async start(): Promise<void> {
    try {
      await this.producer.connect();
    } catch (error) {
      console.log('Error connecting the producer: ', error);
    }
  }

  public async publish(
    topic: string,
    message: Message,
    options: KafkaProducerOptions = {},
  ): Promise<void> {
    if (!this.isConnected) {
      throw new Error('Kafka producer is not connected');
    }

    const topicMessage: KafkaMessage = {
      value: JSON.stringify(message),
      headers: options.headers,
      key: options.key,
      partition: options.partition,
    };

    await this.producer.send({
      topic,
      messages: [topicMessage],
      timeout: 15000, // 30000ms Default
      acks: options.acks ?? 0,
      compression: CompressionTypes.GZIP,
    });
  }
}
