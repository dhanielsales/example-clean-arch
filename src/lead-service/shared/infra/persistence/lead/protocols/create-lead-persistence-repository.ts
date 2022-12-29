import { LeadSchema } from '@lead-service/shared/schemas/lead';

export interface CreateLeadPersistenceRepository {
  handle(email: string, password: string, phone: string): Promise<LeadSchema>;
}
