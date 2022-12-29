import { Lead } from '@lead-service/entities/lead/lead-entity';
import { CreateLeadRepository } from '@lead-service/entities/lead/lead-repositories';
import { InMemoryPersistenceRepository } from '@lead-service/shared/infra/persistence/prototypes/in-memory-persistence-repository';
import { CreateLeadPersistenceRepository } from '@lead-service/shared/infra/persistence/lead/protocols/create-lead-persistence-repository';
import { CreateLeadInMemoryRepository } from '@lead-service/shared/infra/persistence/lead/repositories/create-lead-in-memory-repository';
import { Factory } from '@lead-service/shared/protocols/factory';
import { StaticImplements } from '@lead-service/shared/utils/types/static-implements';

@StaticImplements<Factory<CreateLeadPersistenceRepository>>()
export class CreateLeadInMemoryRepositoryFactory {
  static make(): CreateLeadPersistenceRepository {
    const inMemoryPersistenceRepository = InMemoryPersistenceRepository.getInstance<Lead>();
    const createLeadRepository = new CreateLeadRepository();

    return new CreateLeadInMemoryRepository(inMemoryPersistenceRepository, createLeadRepository);
  }
}
