import '@user-service/shared/aggregators/configs/environment';

import { HttpServer } from '@user-service/shared/aggregators/configs/http-server';
import { HealthSetup } from '@user-service/shared/aggregators/configs/health-setup';
import { EventProvider } from '@user-service/shared/aggregators/configs/event-provider';

async function main(): Promise<void> {
  const healthConfig = new HealthSetup({
    httpServer: HttpServer.getInstance(),
    eventProvider: EventProvider.getInstance(),
  });

  healthConfig.start();
}

main().catch(console.error);
