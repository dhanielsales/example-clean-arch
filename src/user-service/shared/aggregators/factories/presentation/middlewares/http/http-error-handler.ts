import { Middleware } from '@lead-service/shared/protocols/http';

import { StaticImplements } from '@lead-service/shared/utils/types/static-implements';
import { Factory } from '@lead-service/shared/protocols/factory';
import { HttpErrorHandler } from '@lead-service/presentation/middlewares/http-error-handler';
import { LogMediator } from '@lead-service/shared/aggregators/mediators/log-mediator';

@StaticImplements<Factory<Middleware>>()
export class HttpErrorHandlerFactory {
  static make(): Middleware {
    const logger = new LogMediator().handle();

    return new HttpErrorHandler(logger);
  }
}
