import { User } from '@user-service/entities/user/user-entity';
import { CreateUserPersistenceRepository } from '@user-service/shared/infra/persistence/user/protocols/create-user-persistence-repository';
import { NotifyUserCreation } from '../events/notify-user-creation';

interface Params {
  name: string;
  phone: string;
  email: string;
  password: string;
}
export class CreateUserUsecase {
  constructor(
    private readonly persistenceRepository: CreateUserPersistenceRepository,
    private readonly notifyUserCreation: NotifyUserCreation,
  ) {}

  public async handle(params: Params): Promise<User> {
    const user = await this.persistenceRepository.handle({
      name: params.name,
      phone: params.phone,
      email: params.email,
      password: params.password,
    });

    await this.notifyUserCreation.emit(user);

    return user;
  }
}
