import { BaseSchema } from '../schemas/base';

export interface PersistenceRepository<Schema extends BaseSchema> {
  // Eu particularmente prefiro chamar de Store, mas geralmente a equipe acaba não reconhecendo do que se trata a camada
  create(payload: Schema): Promise<Schema>;
  update(id: string, payload: Partial<Schema>): Promise<number>;
  remove(id: string): Promise<number>;
  findOne(id: string): Promise<Schema | undefined>;
  findMany(): Promise<Schema[]>;
}
