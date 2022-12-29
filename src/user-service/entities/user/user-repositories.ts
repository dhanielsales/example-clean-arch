import { v4 as uuidv4 } from 'uuid';

import { User } from './user-entity';

export class CreateUserRepository {
  public handle(email: string, password: string): User {
    const id = uuidv4();

    const user = new User(id, email, password);

    return user;
  }
}
