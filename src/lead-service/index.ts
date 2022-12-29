import '@lead-service/shared/aggregators/configs/environment';

import { HttpServer } from '@lead-service/shared/aggregators/configs/http-server';
import { HealthSetup } from '@lead-service/shared/aggregators/configs/health-setup';
import { EventProvider } from '@lead-service/shared/aggregators/configs/event-provider';

async function main(): Promise<void> {
  const healthConfig = new HealthSetup({
    httpServer: HttpServer.getInstance(),
    eventProvider: EventProvider.getInstance(),
  });

  await healthConfig.start();
}

main().catch(console.error);
