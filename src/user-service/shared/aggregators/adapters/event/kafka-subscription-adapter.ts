import { EachMessageHandler } from 'kafkajs';

import { ControllerAdapter } from '@user-service/shared/protocols/controller';
import {
  EventController,
  Subscription,
  SubscriptionAdapter,
} from '@user-service/shared/protocols/event';
import { Consumer } from '@user-service/shared/protocols/pub-sub';
import { KafkaControllerAdapter } from './kafka-controller-adapter';

export class KafkaSubscriptionAdapter implements SubscriptionAdapter {
  private readonly kafkaConsumer: Consumer<unknown, EachMessageHandler>;
  private readonly adapter: ControllerAdapter<EventController<unknown>, EachMessageHandler>;

  constructor(kafkaConsumer: Consumer<unknown>) {
    this.kafkaConsumer = kafkaConsumer;
    this.adapter = new KafkaControllerAdapter();
  }

  public async handle(subscriptions: Array<Subscription>): Promise<void> {
    for (const subscription of subscriptions) {
      this.kafkaConsumer.subscribe(subscription.event, this.adapter.handle(subscription.handler));
    }
  }
}
