import { InMemoryPersistenceRepository } from '@lead-service/shared/infra/persistence/prototypes/in-memory-persistence-repository';
import { LeadSchema } from '@lead-service/shared/schemas/lead';
import { ListLeadsPersistenceRepository } from '../protocols/list-leads-persistence-repository';

export class ListLeadsInMemoryRepository implements ListLeadsPersistenceRepository {
  constructor(private readonly persistenceRepository: InMemoryPersistenceRepository<LeadSchema>) {}

  public async handle(): Promise<LeadSchema[]> {
    const leads = await this.persistenceRepository.findMany();

    return leads;
  }
}
