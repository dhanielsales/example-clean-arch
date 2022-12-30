import { Consumer as KafkaConsumer, EachMessageHandler, Kafka } from 'kafkajs';

import { Consumer } from '@lead-service/shared/protocols/pub-sub';

export class KafkaConsumerAdapter<Message> implements Consumer<Message, EachMessageHandler> {
  public readonly consumer: KafkaConsumer;
  private isConnected: boolean = false;

  constructor(kafka: Kafka) {
    // TODO avaliar possibilidade de injeção de configurações
    this.consumer = kafka.consumer({ groupId: 'my-app-group' });

    this.consumer.on(this.consumer.events.CONNECT, () => {
      this.isConnected = true;
    });
  }

  public async start(): Promise<void> {
    try {
      await this.consumer.connect();
    } catch (error) {
      console.log('Error connecting the consumer: ', error);
    }
  }

  public async stop(): Promise<void> {
    try {
      await this.consumer.stop();
      await this.consumer.disconnect();
    } catch (error) {
      console.log('Error disconnect the consumer: ', error);
    }
  }

  async subscribe(topic: string, callback: EachMessageHandler): Promise<void> {
    if (!this.isConnected) {
      throw new Error('Kafka consumer is not connected');
    }

    await this.consumer.subscribe({ topic });

    await this.consumer.run({
      eachMessage: callback,
    });
  }
}
