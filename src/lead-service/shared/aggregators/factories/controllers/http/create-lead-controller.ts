import { CreateLeadController } from '@lead-service/presentation/controllers/http/lead/create-lead-controller';
import { HttpController } from '@lead-service/shared/protocols/http';

import { CreateLeadUsecaseFactory } from '@lead-service/shared/aggregators/factories/usecases/create-lead-usecase';
import { Factory } from '@lead-service/shared/protocols/factory';
import { StaticImplements } from '@lead-service/shared/utils/types/static-implements';

@StaticImplements<Factory<HttpController>>()
export class CreateLeadControllerFactory {
  static make(): HttpController {
    const createLeadUsecase = CreateLeadUsecaseFactory.make();

    return new CreateLeadController(createLeadUsecase);
  }
}
