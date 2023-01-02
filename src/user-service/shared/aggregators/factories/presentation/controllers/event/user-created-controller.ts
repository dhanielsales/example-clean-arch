import { Factory } from '@user-service/shared/protocols/factory';
import { StaticImplements } from '@user-service/shared/utils/types/static-implements';
import { UserSchema } from '@user-service/shared/schemas/user';
import { EventController } from '@user-service/shared/protocols/event';
import { UserCreatedController } from '@user-service/presentation/controllers/event/user-created-controller';
import { SendEmailUserCreatedFactory } from '@user-service/shared/aggregators/factories/application/usecases/send-email-user-created';

@StaticImplements<Factory<EventController<UserSchema>>>()
export class UserCreatedControllerFactory {
  static make(): EventController<UserSchema> {
    const sendEmailUserCreated = SendEmailUserCreatedFactory.make();

    return new UserCreatedController(sendEmailUserCreated);
  }
}
