import { Route } from '@user-service/shared/protocols/route';

import { CreateLeadControllerFactory } from '@lead-service/shared/aggregators/factories/controllers/http/create-lead-controller';
import { ListLeadsControllerFactory } from '@lead-service/shared/aggregators/factories/controllers/http/list-leads-controller';

export const Routes: Array<Route> = [
  {
    path: '/lead',
    method: 'GET',
    handler: ListLeadsControllerFactory.make(),
  },
  {
    path: '/lead',
    method: 'POST',
    handler: CreateLeadControllerFactory.make(),
  },
];
