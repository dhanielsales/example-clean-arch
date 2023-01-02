import { UserSchema } from '@user-service/shared/schemas/user';

export interface CreateUserPersistenceRepository {
  handle(
    params: CreateUserPersistenceRepository.Params,
  ): Promise<CreateUserPersistenceRepository.Response>;
}

export namespace CreateUserPersistenceRepository {
  export type Params = {
    name: string;
    phone: string;
    email: string;
    password: string;
  };

  export type Response = UserSchema;
}
