import { CreateUserController } from '@user-service/presentation/controllers/http/user/create-user-controller';
import { HttpController } from '@user-service/shared/protocols/http';

import { CreateUserUsecaseFactory } from '@user-service/shared/aggregators/factories/usecases/create-user-usecase';
import { Factory } from '@user-service/shared/protocols/factory';
import { StaticImplements } from '@user-service/shared/utils/types/static-implements';

@StaticImplements<Factory<HttpController>>()
export class CreateUserControllerFactory {
  static make(): HttpController {
    const createUserUsecase = CreateUserUsecaseFactory.make();

    return new CreateUserController(createUserUsecase);
  }
}
