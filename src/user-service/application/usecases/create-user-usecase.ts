import { User } from '@user-service/entities/user/user-entity';
import { CreateUserPersistenceRepository } from '@user-service/shared/infra/persistence/user/protocols/create-user-persistence-repository';
import { NotifyUserCreation } from '../events/notify-user-creation';

export class CreateUserUsecase {
  constructor(
    private readonly persistenceRepository: CreateUserPersistenceRepository,
    private readonly notifyUserCreation: NotifyUserCreation,
  ) {}

  public async handle(email: string, password: string): Promise<User> {
    const user = await this.persistenceRepository.handle(email, password);

    await this.notifyUserCreation.emit(user);

    return user;
  }
}
