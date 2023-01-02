import { SendEmailUserCreated } from '@user-service/application/usecases/send-email-user-created';
import { EmailMediator } from '@user-service/shared/aggregators/mediators/email-mediator';
import { Factory } from '@user-service/shared/protocols/factory';
import { StaticImplements } from '@user-service/shared/utils/types/static-implements';

@StaticImplements<Factory<SendEmailUserCreated>>()
export class SendEmailUserCreatedFactory {
  static make(): SendEmailUserCreated {
    const mailSender = new EmailMediator().handle();

    return new SendEmailUserCreated(mailSender);
  }
}
