export class Lead {
  public readonly id: string;
  public readonly email: string;
  public readonly name: string;
  public readonly phone: string;

  constructor(id: string, email: string, name: string, phone: string) {
    this.id = id;
    this.email = email;
    this.name = name;
    this.phone = phone;
  }
}
