import { UserSchema } from '@user-service/shared/schemas/user';

export interface ListUsersPersistenceRepository {
  handle(): Promise<ListUsersPersistenceRepository.Response>;
}

export namespace ListUsersPersistenceRepository {
  export type Response = UserSchema[];
}
