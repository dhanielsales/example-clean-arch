import { MailSender } from '@user-service/shared/protocols/email';
import { Mediator } from '@user-service/shared/protocols/mediator';
import { MailtrapAdapter } from '../adapters/email/mailtrap-adapter';

export class EmailMediator implements Mediator<MailSender> {
  public handle(): MailSender {
    if (process.env.NODE_ENV === 'development') {
      return new MailtrapAdapter();
    }

    return {
      // TODO Trocar por envio real de email
      send: async (params: MailSender.Params) =>
        console.log('Email sended: ', {
          to: params.to,
          subject: params.subject,
          cc: params.cc,
          from: params.from,
          text: params.data.text,
          html: params.data.html,
        }),

      sendMany: async (params: MailSender.Params[]) =>
        console.log(
          'Emails sended: ',
          params.map(async (param) => ({
            to: param.to,
            subject: param.subject,
            cc: param.cc,
            from: param.from,
            text: param.data.text,
            html: param.data.html,
          })),
        ),
    };
  }
}
