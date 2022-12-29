import { User } from '@user-service/entities/user/user-entity';
import { InMemoryPersistenceRepository } from '@user-service/shared/infra/persistence/prototypes/in-memory-persistence-repository';
import { ListUsersPersistenceRepository } from '../protocols/list-users-persistence-repository';

export class ListUsersInMemoryRepository implements ListUsersPersistenceRepository {
  constructor(private readonly persistenceRepository: InMemoryPersistenceRepository<User>) {}

  public async handle(): Promise<User[]> {
    const users = await this.persistenceRepository.findMany();

    return users;
  }
}
