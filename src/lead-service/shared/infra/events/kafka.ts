import { Kafka } from 'kafkajs';

export const kafka = new Kafka({
  clientId: 'lead-service-app',
  brokers: [process.env.KAFKA_ADDRESS as string],
});
