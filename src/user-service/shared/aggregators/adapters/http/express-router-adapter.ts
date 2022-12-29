import { Express } from 'express';
import { ControllerAdapter } from '@user-service/shared/protocols/controller';

import { Route } from '@user-service/shared/protocols/route';
import { ExpressController, ExpressControllerAdapter } from './express-controller-adapter';
import { RouterAdapter } from '@user-service/shared/protocols/route';
import { HttpController } from '@user-service/shared/protocols/http';

export class ExpressRouterAdapter implements RouterAdapter {
  public readonly basePath: string;
  private readonly router: Express;
  private readonly adapter: ControllerAdapter<HttpController, ExpressController>;

  constructor(basePath: string, router: Express) {
    this.basePath = basePath;
    this.router = router;
    this.adapter = new ExpressControllerAdapter();
  }

  public handle(routes: Array<Route>) {
    for (const route of routes) {
      switch (route.method) {
        case 'GET':
          this.router.get(route.path, this.adapter.handle(route.handler));
          break;
        case 'POST':
          this.router.post(route.path, this.adapter.handle(route.handler));
          break;
        case 'PUT':
          this.router.put(route.path, this.adapter.handle(route.handler));
          break;
        case 'PATCH':
          this.router.patch(route.path, this.adapter.handle(route.handler));
          break;
        case 'DELETE':
          this.router.delete(route.path, this.adapter.handle(route.handler));
          break;
        default:
          throw new Error('Route method not supported');
      }
    }
  }
}
