import { CreateUserUsecase } from '@user-service/application/usecases/create-user-usecase';
import { CreateUserInMemoryRepositoryFactory } from '@user-service/shared/aggregators/factories/repositories/create-user-in-memory-repository';
import { Factory } from '@user-service/shared/protocols/factory';
import { StaticImplements } from '@user-service/shared/utils/types/static-implements';
import { NotifyUserCreationFactory } from '../events/notify-user-creation';

@StaticImplements<Factory<CreateUserUsecase>>()
export class CreateUserUsecaseFactory {
  static make(): CreateUserUsecase {
    const createUserInMemoryRepository = CreateUserInMemoryRepositoryFactory.make();
    const notifyUserCreation = NotifyUserCreationFactory.make();

    return new CreateUserUsecase(createUserInMemoryRepository, notifyUserCreation);
  }
}
