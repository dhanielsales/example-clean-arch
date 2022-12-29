import { Lead } from '@lead-service/entities/lead/lead-entity';

export interface CreateLeadPersistenceRepository {
  handle(email: string, password: string, phone: string): Promise<Lead>;
}
