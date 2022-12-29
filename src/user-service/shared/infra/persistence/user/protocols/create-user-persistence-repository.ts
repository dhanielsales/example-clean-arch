import { User } from '@user-service/entities/user/user-entity';

export interface CreateUserPersistenceRepository {
  handle(email: string, password: string): Promise<User>;
}
