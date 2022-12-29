import { HttpController } from '@lead-service/shared/protocols/http';
import { ListLeadsController } from '@lead-service/presentation/controllers/http/lead/list-leads-controller';

import { ListLeadsUsecaseFactory } from '@lead-service/shared/aggregators/factories/application/usecases/list-leads-usecase';
import { StaticImplements } from '@lead-service/shared/utils/types/static-implements';
import { Factory } from '@lead-service/shared/protocols/factory';

@StaticImplements<Factory<HttpController>>()
export class ListLeadsControllerFactory {
  static make(): HttpController {
    const createLeadUsecase = ListLeadsUsecaseFactory.make();

    return new ListLeadsController(createLeadUsecase);
  }
}
