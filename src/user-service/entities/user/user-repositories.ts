import { v4 as uuidv4 } from 'uuid';

import { User } from './user-entity';

interface Params {
  name: string;
  phone: string;
  email: string;
  password: string;
}

export class CreateUserRepository {
  public handle(params: Params): User {
    const id = uuidv4();

    const user = new User(id, params.name, params.phone, params.email, params.password);

    return user;
  }
}
