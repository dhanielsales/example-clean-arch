import { ListLeadsUsecase } from '@lead-service/application/usecases/list-leads-usecase';
import { ListLeadsInMemoryRepositoryFactory } from '@lead-service/shared/aggregators/factories/repositories/list-leads-in-memory-repository';
import { Factory } from '@lead-service/shared/protocols/factory';
import { StaticImplements } from '@lead-service/shared/utils/types/static-implements';

@StaticImplements<Factory<ListLeadsUsecase>>()
export class ListLeadsUsecaseFactory {
  static make(): ListLeadsUsecase {
    const listLeadsInMemoryRepository = ListLeadsInMemoryRepositoryFactory.make();

    return new ListLeadsUsecase(listLeadsInMemoryRepository);
  }
}
