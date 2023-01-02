import { User } from '@user-service/entities/user/user-entity';
import { CreateUserRepository } from '@user-service/entities/user/user-repositories';
import { InMemoryPersistenceRepository } from '@user-service/shared/infra/persistence/prototypes/in-memory-persistence-repository';
import { CreateUserPersistenceRepository } from '@user-service/shared/infra/persistence/user/protocols/create-user-persistence-repository';

export class CreateUserInMemoryRepository implements CreateUserPersistenceRepository {
  constructor(
    private readonly persistenceRepository: InMemoryPersistenceRepository<User>,
    private readonly createUserRepository: CreateUserRepository,
  ) {}

  public async handle(
    params: CreateUserPersistenceRepository.Params,
  ): Promise<CreateUserPersistenceRepository.Response> {
    const user = this.createUserRepository.handle({
      name: params.name,
      phone: params.phone,
      email: params.email,
      password: params.password,
    });

    await this.persistenceRepository.create(user);

    return user;
  }
}
