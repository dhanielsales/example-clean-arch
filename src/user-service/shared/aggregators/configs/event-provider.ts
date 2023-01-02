import { Kafka, logLevel } from 'kafkajs';

import { subscriptions } from '@user-service/shared/infra/events/subscriptions';
import { KafkaSubscriptionAdapter } from '@user-service/shared/aggregators/adapters/event/kafka-subscription-adapter';
import { KafkaConsumerAdapter } from '@user-service/shared/aggregators/adapters/event/kafka-consumer-adapter';

export class EventProvider {
  private static instance: EventProvider;
  public readonly creator: Kafka;
  private consumer?: KafkaConsumerAdapter<unknown>;

  private constructor() {
    this.creator = new Kafka({
      clientId: 'user-service-app',
      brokers: [process.env.KAFKA_ADDRESS as string],
      logLevel: logLevel.ERROR,
    });
  }

  public static getInstance(): EventProvider {
    if (!EventProvider.instance) {
      EventProvider.instance = new EventProvider();
    }

    return EventProvider.instance;
  }

  public async start(): Promise<Promise<void>> {
    this.consumer = new KafkaConsumerAdapter(this.creator);
    await this.consumer.start();
    await this.setupSubscriptions();
  }

  private async setupSubscriptions(): Promise<void> {
    if (this.consumer) {
      const kafkaAdapter = new KafkaSubscriptionAdapter(this.consumer);
      await kafkaAdapter.handle(subscriptions);
    }
  }

  public async close(): Promise<void> {
    if (this.consumer) {
      try {
        await this.consumer.stop();
        console.log('Event Provider closed with success');
      } catch (err) {
        const error: string = JSON.stringify(err);
        console.log(`Event Provider closed with error: ${error}`);
        throw err;
      }
    } else {
      console.log('There is no Event Provider to close');
    }
  }
}
