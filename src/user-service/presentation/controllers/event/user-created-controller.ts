import { SendEmailUserCreated } from '@user-service/application/usecases/send-email-user-created';
import { EventController } from '@user-service/shared/protocols/event';
import { UserSchema } from '@user-service/shared/schemas/user';

export class UserCreatedController extends EventController<UserSchema> {
  constructor(private readonly sendEmailUserCreated: SendEmailUserCreated) {
    super();
  }

  public async listen(eventPaload: UserSchema) {
    await this.sendEmailUserCreated.handle({
      email: eventPaload.email,
      name: eventPaload.name,
    });
  }
}
