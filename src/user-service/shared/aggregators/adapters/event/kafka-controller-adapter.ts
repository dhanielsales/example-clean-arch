import { EachMessageHandler } from 'kafkajs';

import { EventController } from '@user-service/shared/protocols/event';
import { ControllerAdapter } from '@user-service/shared/protocols/controller';

export class KafkaControllerAdapter
  implements ControllerAdapter<EventController<unknown>, EachMessageHandler>
{
  public handle(controller: EventController<unknown>): EachMessageHandler {
    return async (payload) => {
      // Possível momento para algum log interno, no inicio da recepção de uma mensagem do Kafka
      await controller.listen(payload.message.value as unknown);
      // TODO avaliar se precisa de um JSON parse
      // TODO avaliar se ficaria bom try / catch + commit manual da mensagem
      // Possível momento para algum log interno, ao termino da recepção de uma mensagem do Kafka
    };
  }
}
