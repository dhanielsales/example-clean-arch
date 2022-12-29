import { CreateLeadUsecase } from '@lead-service/application/usecases/create-lead-usecase';
import { CreateLeadInMemoryRepositoryFactory } from '@lead-service/shared/aggregators/factories/repositories/create-lead-in-memory-repository';
import { Factory } from '@lead-service/shared/protocols/factory';
import { StaticImplements } from '@lead-service/shared/utils/types/static-implements';

@StaticImplements<Factory<CreateLeadUsecase>>()
export class CreateLeadUsecaseFactory {
  static make(): CreateLeadUsecase {
    const createLeadInMemoryRepository = CreateLeadInMemoryRepositoryFactory.make();

    return new CreateLeadUsecase(createLeadInMemoryRepository);
  }
}
