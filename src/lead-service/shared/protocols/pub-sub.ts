export interface Producer<Message, Options = unknown> {
  start(): Promise<void>;
  publish(topic: string, message: Message, options?: Options): Promise<void>;
  publish(topic: string, message: Message): Promise<void>;
}

export interface Consumer<
  Message,
  Callback = (message: Message) => Promise<void>,
  Options = unknown,
> {
  subscribe(topic: string, callback: Callback, options?: Options): Promise<void>;
  subscribe(topic: string, callback: Callback): Promise<void>;
}
