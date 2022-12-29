import { User } from '@user-service/entities/user/user-entity';
import { InMemoryPersistenceRepository } from '@user-service/shared/infra/persistence/prototypes/in-memory-persistence-repository';
import { ListUsersPersistenceRepository } from '@user-service/shared/infra/persistence/user/protocols/list-users-persistence-repository';
import { ListUsersInMemoryRepository } from '@user-service/shared/infra/persistence/user/repositories/list-users-in-memory-repository';
import { Factory } from '@user-service/shared/protocols/factory';
import { StaticImplements } from '@user-service/shared/utils/types/static-implements';

@StaticImplements<Factory<ListUsersPersistenceRepository>>()
export class ListUsersInMemoryRepositoryFactory {
  static make(): ListUsersPersistenceRepository {
    const inMemoryPersistenceRepository = InMemoryPersistenceRepository.getInstance<User>();

    return new ListUsersInMemoryRepository(inMemoryPersistenceRepository);
  }
}
