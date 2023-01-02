import { Subscription } from '@lead-service/shared/protocols/event';
import { UserCreatedControllerFactory } from '@user-service/shared/aggregators/factories/presentation/controllers/event/user-created-controller';

export const subscriptions: Array<Subscription> = [
  {
    event: 'notify-user-creation',
    handler: UserCreatedControllerFactory.make(),
  },
];
