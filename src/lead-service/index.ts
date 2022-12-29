import '@lead-service/shared/aggregators/configs/environment';

import express from 'express';

import { subscriptions } from '@lead-service/shared/infra/events/subscriptions';

import { ExpressRouterAdapter } from '@lead-service/shared/aggregators/adapters/http/express-router-adapter';
import { KafkaSubscriptionAdapter } from '@lead-service/shared/aggregators/adapters/event/kafka-subscription-adapter';
import { KafkaConsumerAdapter } from '@lead-service/shared/aggregators/adapters/event/kafka-consumer-adapter';
import { Routes } from '@lead-service/shared/infra/http/routes';
import { kafka } from '@lead-service/shared/infra/events/kafka';

(async () => {
  // Kafka
  const kafkaConsumer = new KafkaConsumerAdapter(kafka);
  await kafkaConsumer.start();

  const kafkaAdapter = new KafkaSubscriptionAdapter(kafkaConsumer);

  await kafkaAdapter.handle(subscriptions);

  // Express
  const server = express();

  server.use(express.json());

  const expressAdapter = new ExpressRouterAdapter('/', server);
  expressAdapter.handle(Routes);

  server.listen(process.env.LEAD_SERVICE_HTTP_SERVER_PORT, () =>
    console.log('Lead service listening on port ' + process.env.LEAD_SERVICE_HTTP_SERVER_PORT),
  );
})();
