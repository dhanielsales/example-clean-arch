import { InMemoryPersistenceRepository } from '@user-service/shared/infra/persistence/prototypes/in-memory-persistence-repository';
import { UserSchema } from '@user-service/shared/schemas/user';
import { ListUsersPersistenceRepository } from '../protocols/list-users-persistence-repository';

export class ListUsersInMemoryRepository implements ListUsersPersistenceRepository {
  constructor(private readonly persistenceRepository: InMemoryPersistenceRepository<UserSchema>) {}

  public async handle(): Promise<ListUsersPersistenceRepository.Response> {
    const users = await this.persistenceRepository.findMany();

    return users;
  }
}
