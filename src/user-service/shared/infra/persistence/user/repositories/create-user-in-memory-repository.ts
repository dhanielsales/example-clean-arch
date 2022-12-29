import { User } from '@user-service/entities/user/user-entity';
import { CreateUserRepository } from '@user-service/entities/user/user-repositories';
import { InMemoryPersistenceRepository } from '@user-service/shared/infra/persistence/prototypes/in-memory-persistence-repository';
import { CreateUserPersistenceRepository } from '@user-service/shared/infra/persistence/user/protocols/create-user-persistence-repository';

export class CreateUserInMemoryRepository implements CreateUserPersistenceRepository {
  constructor(
    private readonly persistenceRepository: InMemoryPersistenceRepository<User>,
    private readonly createUserRepository: CreateUserRepository,
  ) {}

  public async handle(email: string, password: string): Promise<User> {
    const user = this.createUserRepository.handle(email, password);

    await this.persistenceRepository.create(user);

    return user;
  }
}
