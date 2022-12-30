import express, { Express } from 'express';

import { Server } from 'http';

import { ExpressRouterAdapter } from '@lead-service/shared/aggregators/adapters/http/express-router-adapter';
import { Routes } from '@lead-service/shared/infra/http/routes';
import { ExpressErrorMiddlewareAdapter } from '../adapters/http/express-error-middleware-adapter';
import { HttpErrorHandlerFactory } from '../factories/presentation/middlewares/http/http-error-handler';

export class HttpServer {
  private static instance: HttpServer;
  private readonly creator: Express;
  private server?: Server;

  private constructor() {
    this.creator = express();
  }

  public static getInstance(): HttpServer {
    if (!HttpServer.instance) {
      HttpServer.instance = new HttpServer();
    }

    return HttpServer.instance;
  }

  public start(): void {
    this.setupMiddlewares();
    this.setupRouter();
    this.setupErrorHandler();

    const port = process.env.LEAD_SERVICE_HTTP_SERVER_PORT;

    this.server = this.creator.listen(port, () => {
      console.log(`Http Server running at ${port}`);
    });
  }

  public async close(): Promise<void> {
    if (this.server) {
      return await new Promise<void>((resolve, _) => {
        this.server?.close((err: unknown) => {
          if (err) {
            const error: string = JSON.stringify(err);
            console.log(`Http Server closed with error: ${error}`);
            throw err;
          }
          resolve();
          console.log('Http Server closed with success');
        });
      });
    } else {
      console.log('There is no http server to close');
    }
  }

  private setupRouter(): void {
    const adapter = new ExpressRouterAdapter(this.creator);

    adapter.handle(Routes);
  }

  private setupMiddlewares(): void {
    this.creator.use(express.json());
  }

  private setupErrorHandler(): void {
    const adapter = new ExpressErrorMiddlewareAdapter();
    this.creator.use(adapter.handle(HttpErrorHandlerFactory.make()));
  }
}
