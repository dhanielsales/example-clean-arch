import { Logger } from '@user-service/shared/protocols/log';
import { Mediator } from '@user-service/shared/protocols/mediator';
import { LogFormatter } from '../logs/log-formatter';

export class LogMediator implements Mediator<Logger> {
  public handle(): Logger {
    if (process.env.NODE_ENV === 'development') {
      return new LogFormatter();
    }

    return {
      // TODO Trocar por Logger de observabilidade
      error: (params: Logger.Params) => console.error(params.message, params.stack),
      warning: (params: Logger.Params) => console.warn(params.message, params.stack),
      info: (params: Logger.Params) => console.log(params.message, params.stack),
    };
  }
}
