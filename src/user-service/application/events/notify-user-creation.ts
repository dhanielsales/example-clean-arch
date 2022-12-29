import { User } from '@user-service/entities/user/user-entity';

import { Emitter } from '@user-service/shared/protocols/event';
import { Producer } from '@user-service/shared/protocols/pub-sub';

export class NotifyUserCreation extends Emitter<User> {
  protected readonly producer: Producer<User>;
  protected readonly event: string = 'notify-user-creation';

  constructor(producer: Producer<unknown>) {
    super();

    this.producer = producer;
  }

  async emit(user: User): Promise<void> {
    await this.producer.start();

    await this.producer.publish(this.event, user);
  }
}
