import '@lead-service/shared/aggregators/configs/environment';

import express from 'express';

import { ExpressRouterAdapter } from '@lead-service/shared/aggregators/adapters/http/express-router-adapter';
import { Routes } from '@lead-service/shared/infra/http/routes';

const server = express();

server.use(express.json());

const adapter = new ExpressRouterAdapter('/', server);

adapter.handle(Routes);

server.listen(process.env.LEAD_SERVICE_HTTP_SERVER_PORT, () =>
  console.log('Lead service listening on port ' + process.env.LEAD_SERVICE_HTTP_SERVER_PORT),
);
