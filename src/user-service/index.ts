import '@user-service/shared/aggregators/configs/environment';

import express from 'express';

import { ExpressRouterAdapter } from '@user-service/shared/aggregators/adapters/http/express-router-adapter';
import { Routes } from '@user-service/shared/infra/http/routes';

const server = express();

server.use(express.json());

const adapter = new ExpressRouterAdapter('/', server);

adapter.handle(Routes);

server.listen(process.env.USER_SERVICE_HTTP_SERVER_PORT, () =>
  console.log('User service listening on port ' + process.env.USER_SERVICE_HTTP_SERVER_PORT),
);
