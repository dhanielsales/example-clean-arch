import { MailSender } from '@user-service/shared/protocols/email';

interface Params {
  name: string;
  email: string;
}

export class SendEmailUserCreated {
  constructor(private readonly mailSender: MailSender) {}

  public async handle(params: Params): Promise<void> {
    await this.mailSender.send({
      to: params.email,
      subject: 'Sua conta foi criada com sucesso!',
      data: {
        html: `<div> Olá ${params.name}</div>`,
        text: `Olá ${params.name}`,
      },
    });
  }
}
