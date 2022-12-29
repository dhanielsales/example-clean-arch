import { NotifyUserCreation } from '@user-service/application/events/notify-user-creation';
import { KafkaProducerAdapter } from '@user-service/shared/aggregators/adapters/event/kafka-producer-adapter';
import { kafka } from '@user-service/shared/infra/events/kafka';
import { Factory } from '@user-service/shared/protocols/factory';
import { StaticImplements } from '@user-service/shared/utils/types/static-implements';

@StaticImplements<Factory<NotifyUserCreation>>()
export class NotifyUserCreationFactory {
  static make(): NotifyUserCreation {
    const kafkaProducer = new KafkaProducerAdapter(kafka);

    return new NotifyUserCreation(kafkaProducer);
  }
}
