import { Lead } from '@lead-service/entities/lead/lead-entity';
import { CreateLeadPersistenceRepository } from '@lead-service/shared/infra/persistence/lead/protocols/create-lead-persistence-repository';

export class CreateLeadUsecase {
  constructor(private readonly persistenceRepository: CreateLeadPersistenceRepository) {}

  public async handle(email: string, name: string, phone: string): Promise<Lead> {
    const lead = await this.persistenceRepository.handle(email, name, phone);

    return lead;
  }
}
