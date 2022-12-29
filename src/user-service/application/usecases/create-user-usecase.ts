import { User } from '@user-service/entities/user/user-entity';
import { CreateUserPersistenceRepository } from '@user-service/shared/infra/persistence/user/protocols/create-user-persistence-repository';

export class CreateUserUsecase {
  constructor(
    private readonly persistenceRepository: CreateUserPersistenceRepository, // TODO Adicionar Dependencia de emissor de evento
  ) {}

  public async handle(email: string, password: string): Promise<User> {
    const user = await this.persistenceRepository.handle(email, password);

    // TODO Adicionar envio de evento de criação de usuario

    return user;
  }
}
