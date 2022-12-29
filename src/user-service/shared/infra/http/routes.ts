import { Route } from '@user-service/shared/protocols/route';

import { CreateUserControllerFactory } from '@user-service/shared/aggregators/factories/controllers/http/create-user-controller';
import { ListUsersControllerFactory } from '@user-service/shared/aggregators/factories/controllers/http/list-users-controller';

export const Routes: Array<Route> = [
  {
    path: '/user',
    method: 'GET',
    handler: ListUsersControllerFactory.make(),
  },
  {
    path: '/user',
    method: 'POST',
    handler: CreateUserControllerFactory.make(),
  },
];
