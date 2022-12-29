import { User } from '@user-service/entities/user/user-entity';

export interface ListUsersPersistenceRepository {
  handle(): Promise<User[]>;
}
