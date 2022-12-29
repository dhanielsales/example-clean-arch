import { v4 as uuidv4 } from 'uuid';

import { Lead } from './lead-entity';

export class CreateLeadRepository {
  public handle(email: string, name: string, phone: string): Lead {
    const id = uuidv4();

    const lead = new Lead(id, email, name, phone);

    return lead;
  }
}
