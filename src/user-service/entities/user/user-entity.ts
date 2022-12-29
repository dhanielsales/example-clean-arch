export class User {
  public readonly id: string;
  public readonly email: string;
  public readonly password: string;

  constructor(id: string, email: string, password: string) {
    this.id = id;
    this.email = email;
    this.password = password;
  }
}
