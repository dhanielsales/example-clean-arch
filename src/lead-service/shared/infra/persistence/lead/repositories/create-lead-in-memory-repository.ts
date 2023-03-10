import { CreateLeadRepository } from '@lead-service/entities/lead/lead-repositories';
import { InMemoryPersistenceRepository } from '@lead-service/shared/infra/persistence/prototypes/in-memory-persistence-repository';
import { CreateLeadPersistenceRepository } from '@lead-service/shared/infra/persistence/lead/protocols/create-lead-persistence-repository';
import { LeadSchema } from '@lead-service/shared/schemas/lead';

export class CreateLeadInMemoryRepository implements CreateLeadPersistenceRepository {
  constructor(
    private readonly persistenceRepository: InMemoryPersistenceRepository<LeadSchema>,
    private readonly createLeadRepository: CreateLeadRepository,
  ) {}

  public async handle(email: string, name: string, phone: string): Promise<LeadSchema> {
    const lead = this.createLeadRepository.handle(email, name, phone);

    await this.persistenceRepository.create(lead);

    return lead;
  }
}
