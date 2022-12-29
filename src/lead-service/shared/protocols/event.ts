import { Producer } from './pub-sub';

export abstract class Emitter<EventPaylod> {
  protected abstract readonly event: string;
  protected abstract readonly producer: Producer<unknown>;
  abstract emit(payload: EventPaylod): Promise<void>;
}

export abstract class EventController<EventPaylod> {
  abstract listen(payload: EventPaylod): Promise<void>;
}

export interface Subscription {
  event: string;
  handler: EventController<unknown>;
  //TODO: configurações do consumer
}

export interface SubscriptionAdapter {
  handle(routes: Array<Subscription>): Promise<void>;
}
