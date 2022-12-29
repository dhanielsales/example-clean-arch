import { ListUsersUsecase } from '@user-service/application/usecases/list-users-usecase';
import { ListUsersInMemoryRepositoryFactory } from '@user-service/shared/aggregators/factories/repositories/list-users-in-memory-repository';
import { Factory } from '@user-service/shared/protocols/factory';
import { StaticImplements } from '@user-service/shared/utils/types/static-implements';

@StaticImplements<Factory<ListUsersUsecase>>()
export class ListUsersUsecaseFactory {
  static make(): ListUsersUsecase {
    const listUsersInMemoryRepository = ListUsersInMemoryRepositoryFactory.make();

    return new ListUsersUsecase(listUsersInMemoryRepository);
  }
}
