import { NextFunction, Request, Response } from 'express';

import { HttpRequest, Middleware } from '@lead-service/shared/protocols/http';
import { ControllerAdapter } from '@lead-service/shared/protocols/controller';

export type ExpressErrorMiddleware = (
  error: any,
  request: Request,
  response: Response,
  next: NextFunction,
) => void;

export class ExpressErrorMiddlewareAdapter
  implements ControllerAdapter<Middleware, ExpressErrorMiddleware>
{
  public handle(middleware: Middleware) {
    return (error: any, request: Request, response: Response, _next: NextFunction) => {
      const httpRequest: HttpRequest = {
        header: request.header,
        url: request.url,
        body: request.body,
        cookies: request.cookies,
        params: request.params,
        query: request.query,
      };

      Promise.resolve(middleware.handle(httpRequest, error))
        .then((httpResponse) => {
          if (httpResponse.headers) {
            for (const key in httpResponse.headers) {
              const value = httpResponse.headers[key];
              response.setHeader(key, value);
            }
          }

          response.status(httpResponse.status).json({ error: httpResponse.payload });
        })
        .catch((err) => {
          response.status(500).json({ error: err.message });
        });
    };
  }
}
