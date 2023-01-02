import { EventProvider } from './event-provider';
import { HttpServer } from './http-server';

export enum ExitStatus {
  Failure = 1,
  Success = 0,
}

interface Params {
  httpServer: HttpServer;
  eventProvider: EventProvider;
}

export class HealthSetup {
  private readonly signals: NodeJS.Signals[] = ['SIGINT', 'SIGTERM', 'SIGQUIT', 'SIGUSR2'];
  private readonly httpServer: HttpServer;
  private readonly eventProvider: EventProvider;

  constructor(params: Params) {
    this.httpServer = params.httpServer;
    this.eventProvider = params.eventProvider;
  }

  public async start(): Promise<void> {
    this.setup();

    this.httpServer.start();
    await this.eventProvider.start();
  }

  private setup(): void {
    this.setupUnhandledRejection();
    this.setupUncaughtException();

    for (const signal of this.signals) {
      process.once(signal, async (): Promise<void> => {
        try {
          await this.httpServer.close();
          await this.eventProvider.close();

          console.log('Application closed with success');
          process.exit(ExitStatus.Success);
        } catch (err) {
          const error: string = JSON.stringify(err);
          console.error(`Application closed with error: ${error}`);
          process.exit(ExitStatus.Failure);
        }
      });
    }
  }

  private setupUnhandledRejection(): void {
    process.on('unhandledRejection', (error: any, promise) => {
      console.error(
        `Application closed with unhandled promise. Promise: ${JSON.stringify(
          promise,
        )}, Error: ${JSON.stringify(error)}`,
      );
      console.error(error);
      process.exit(ExitStatus.Failure);
    });
  }

  private setupUncaughtException(): void {
    process.on('uncaughtException', (error) => {
      console.error(`Application closed with uncaught exception. Error: ${JSON.stringify(error)}`);
      console.error(error);
      process.exit(ExitStatus.Failure);
    });
  }
}
