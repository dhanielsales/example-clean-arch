import { UserCreatedControllerFactory } from '@lead-service/shared/aggregators/factories/controllers/events/user-created-controller';
import { Subscription } from '@lead-service/shared/protocols/event';

export const subscriptions: Array<Subscription> = [
  {
    event: 'notify-user-creation',
    handler: UserCreatedControllerFactory.make(),
  },
];
