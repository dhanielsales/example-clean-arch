import nodemailer from 'nodemailer';
import SMTPTransport from 'nodemailer/lib/smtp-transport';

import { MailSender } from '@user-service/shared/protocols/email';

export class MailtrapAdapter implements MailSender {
  private readonly transporter: nodemailer.Transporter<SMTPTransport.SentMessageInfo>;

  constructor() {
    this.transporter = nodemailer.createTransport({
      host: 'smtp.mailtrap.io',
      from: process.env.INTERNAL_EMAIL,
      port: 2525,
      auth: {
        user: process.env.MAILTRAP_USER,
        pass: process.env.MAILTRAP_PASS,
      },
    });
  }

  async send(params: MailSender.Params): Promise<void> {
    await this.transporter.sendMail({
      to: params.to,
      subject: params.subject,
      cc: params.cc,
      from: params.from,
      text: params.data.text,
      html: params.data.html,
    });
  }

  async sendMany(params: MailSender.Params[]): Promise<void> {
    await Promise.all(
      params.map(async (param) => {
        await this.transporter.sendMail({
          to: param.to,
          subject: param.subject,
          cc: param.cc,
          from: param.from,
          text: param.data.text,
          html: param.data.html,
        });
      }),
    );
  }
}
