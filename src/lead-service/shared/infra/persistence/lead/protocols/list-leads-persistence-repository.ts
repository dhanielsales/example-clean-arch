import { Lead } from '@lead-service/entities/lead/lead-entity';

export interface ListLeadsPersistenceRepository {
  handle(): Promise<Lead[]>;
}
