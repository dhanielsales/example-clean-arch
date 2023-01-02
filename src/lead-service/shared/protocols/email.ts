export interface MailSender {
  send(params: MailSender.Params): Promise<void>;
  sendMany(params: MailSender.Params[]): Promise<void>;
}

export namespace MailSender {
  export type Params = {
    from?: string;
    to: string;
    subject: string;
    cc?: string[];
    data: {
      text: string;
      html: string;
    };
  };
}
