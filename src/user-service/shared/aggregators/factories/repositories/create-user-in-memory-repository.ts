import { User } from '@user-service/entities/user/user-entity';
import { CreateUserRepository } from '@user-service/entities/user/user-repositories';
import { InMemoryPersistenceRepository } from '@user-service/shared/infra/persistence/prototypes/in-memory-persistence-repository';
import { CreateUserPersistenceRepository } from '@user-service/shared/infra/persistence/user/protocols/create-user-persistence-repository';
import { CreateUserInMemoryRepository } from '@user-service/shared/infra/persistence/user/repositories/create-user-in-memory-repository';
import { Factory } from '@user-service/shared/protocols/factory';
import { StaticImplements } from '@user-service/shared/utils/types/static-implements';

@StaticImplements<Factory<CreateUserPersistenceRepository>>()
export class CreateUserInMemoryRepositoryFactory {
  static make(): CreateUserPersistenceRepository {
    const inMemoryPersistenceRepository = InMemoryPersistenceRepository.getInstance<User>();
    const createUserRepository = new CreateUserRepository();

    return new CreateUserInMemoryRepository(inMemoryPersistenceRepository, createUserRepository);
  }
}
