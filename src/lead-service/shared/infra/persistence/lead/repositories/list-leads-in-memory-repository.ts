import { Lead } from '@lead-service/entities/lead/lead-entity';
import { InMemoryPersistenceRepository } from '@lead-service/shared/infra/persistence/prototypes/in-memory-persistence-repository';
import { ListLeadsPersistenceRepository } from '../protocols/list-leads-persistence-repository';

export class ListLeadsInMemoryRepository implements ListLeadsPersistenceRepository {
  constructor(private readonly persistenceRepository: InMemoryPersistenceRepository<Lead>) {}

  public async handle(): Promise<Lead[]> {
    const leads = await this.persistenceRepository.findMany();

    return leads;
  }
}
