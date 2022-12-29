import { Lead } from '@lead-service/entities/lead/lead-entity';
import { CreateLeadPersistenceRepository } from '@lead-service/shared/infra/persistence/lead/protocols/create-lead-persistence-repository';

export class CreateLeadUsecase {
  constructor(
    private readonly persistenceRepository: CreateLeadPersistenceRepository, // TODO Adicionar Dependencia de emissor de evento
  ) {}

  public async handle(email: string, name: string, phone: string): Promise<Lead> {
    const lead = await this.persistenceRepository.handle(email, name, phone);

    // TODO Adicionar envio de evento de disparo de email de novo lead

    return lead;
  }
}
