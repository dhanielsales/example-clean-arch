import { Consumer as KafkaConsumer, Kafka } from 'kafkajs';

import { Consumer } from '@user-service/shared/protocols/pub-sub';

export class KafkaConsumerAdapter<Message> implements Consumer<Message> {
  private readonly consumer: KafkaConsumer;
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

  async subscribe(topic: string, callback: (message: Message) => Promise<void>): Promise<void> {
    if (!this.isConnected) {
      throw new Error('Kafka producer is not connected');
    }

    await this.consumer.subscribe({ topic });

    await this.consumer.run({
      eachMessage: async (data) => {
        // Possível momento para algum log interno, no inicio da recepção de uma mensagem do Kafka
        await callback(data.message.value as Message);
        // TODO avaliar se precisa de um JSON parse
        // TODO avaliar se ficaria bom try / catch + commit manual da mensagem
        // Possível momento para algum log interno, ao termino da recepção de uma mensagem do Kafka
      },
    });
  }
}
