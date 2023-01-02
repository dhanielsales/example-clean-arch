export class User {
  constructor(
    public readonly id: string,
    public readonly name: string,
    public readonly phone: string,
    public readonly email: string,
    public readonly password: string,
  ) {}
}
