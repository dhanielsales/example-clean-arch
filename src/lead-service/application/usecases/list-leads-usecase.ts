import { Lead } from '@lead-service/entities/lead/lead-entity';
import { ListLeadsPersistenceRepository } from '@lead-service/shared/infra/persistence/lead/protocols/list-leads-persistence-repository';

export class ListLeadsUsecase {
  constructor(private readonly listLeadsPersistenceRepository: ListLeadsPersistenceRepository) {}

  public async handle(): Promise<Lead[]> {
    const leads = await this.listLeadsPersistenceRepository.handle();

    return leads;
  }
}
