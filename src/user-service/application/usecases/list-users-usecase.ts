import { User } from '@user-service/entities/user/user-entity';
import { ListUsersPersistenceRepository } from '@user-service/shared/infra/persistence/user/protocols/list-users-persistence-repository';

export class ListUsersUsecase {
  constructor(private readonly listUsersPersistenceRepository: ListUsersPersistenceRepository) {}

  public async handle(): Promise<User[]> {
    const users = await this.listUsersPersistenceRepository.handle();

    return users;
  }
}
