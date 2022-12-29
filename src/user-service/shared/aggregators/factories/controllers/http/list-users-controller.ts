import { HttpController } from '@user-service/shared/protocols/http';
import { ListUsersController } from '@user-service/presentation/controllers/http/user/list-users-controller';

import { ListUsersUsecaseFactory } from '@user-service/shared/aggregators/factories/usecases/list-users-usecase';
import { StaticImplements } from '@user-service/shared/utils/types/static-implements';
import { Factory } from '@user-service/shared/protocols/factory';

@StaticImplements<Factory<HttpController>>()
export class ListUsersControllerFactory {
  static make(): HttpController {
    const createUserUsecase = ListUsersUsecaseFactory.make();

    return new ListUsersController(createUserUsecase);
  }
}
