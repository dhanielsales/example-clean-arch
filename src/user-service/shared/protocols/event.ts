import { Consumer, Producer } from './pub-sub';

export abstract class Emitter<EventPaylod> {
  protected abstract readonly event: string;
  protected abstract readonly producer: Producer<unknown>;
  abstract emit(payload: EventPaylod): Promise<void>;
}

export abstract class Listener<EventPaylod> {
  protected abstract readonly event: string;
  protected abstract readonly consumer: Consumer<unknown>;
  abstract listen(payload: EventPaylod): Promise<void>;
}
