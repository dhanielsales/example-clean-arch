export interface Producer<Message, Options = unknown> {
  start(): Promise<void>;
  publish(topic: string, message: Message, options?: Options): Promise<void>;
  publish(topic: string, message: Message): Promise<void>;
}

export interface Consumer<Message, Options = unknown> {
  subscribe(
    topic: string,
    callback: (message: Message) => Promise<void>,
    options?: Options,
  ): Promise<void>;
  subscribe(topic: string, callback: (message: Message) => Promise<void>): Promise<void>;
}
