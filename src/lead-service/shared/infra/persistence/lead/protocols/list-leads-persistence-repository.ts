import { LeadSchema } from '@lead-service/shared/schemas/lead';

export interface ListLeadsPersistenceRepository {
  handle(): Promise<LeadSchema[]>;
}
