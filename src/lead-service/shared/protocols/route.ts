import { HttpController } from './http';

type HttpMethods = 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';

export interface Route {
  method: HttpMethods;
  path: string;
  handler: HttpController;
}

export interface RouterAdapter {
  handle(routes: Array<Route>): void;
}
