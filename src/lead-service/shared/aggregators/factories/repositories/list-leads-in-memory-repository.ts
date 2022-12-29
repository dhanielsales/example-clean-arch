import { Lead } from '@lead-service/entities/lead/lead-entity';
import { InMemoryPersistenceRepository } from '@lead-service/shared/infra/persistence/prototypes/in-memory-persistence-repository';
import { ListLeadsPersistenceRepository } from '@lead-service/shared/infra/persistence/lead/protocols/list-leads-persistence-repository';
import { ListLeadsInMemoryRepository } from '@lead-service/shared/infra/persistence/lead/repositories/list-leads-in-memory-repository';
import { Factory } from '@lead-service/shared/protocols/factory';
import { StaticImplements } from '@lead-service/shared/utils/types/static-implements';

@StaticImplements<Factory<ListLeadsPersistenceRepository>>()
export class ListLeadsInMemoryRepositoryFactory {
  static make(): ListLeadsPersistenceRepository {
    const inMemoryPersistenceRepository = InMemoryPersistenceRepository.getInstance<Lead>();

    return new ListLeadsInMemoryRepository(inMemoryPersistenceRepository);
  }
}
