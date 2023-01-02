import { EachMessageHandler } from 'kafkajs';

import { EventController } from '@user-service/shared/protocols/event';
import { ControllerAdapter } from '@user-service/shared/protocols/controller';

export class KafkaControllerAdapter
  implements ControllerAdapter<EventController<unknown>, EachMessageHandler>
{
  public handle(controller: EventController<unknown>): EachMessageHandler {
    return async (payload) => {
      // Possível momento para algum log interno, no inicio da recepção de uma mensagem do Kafka

      try {
        const parsedPayload: unknown = payload.message.value
          ? JSON.parse(payload.message.value.toString('utf8'))
          : {};

        await controller.listen(parsedPayload);
        // TODO avaliar commit manual do consumo da mensagem
      } catch (err) {
        console.error(err);
      }

      // Possível momento para algum log interno, ao termino da recepção de uma mensagem do Kafka
    };
  }
}
