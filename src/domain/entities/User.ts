export class User {
  constructor(
    readonly id: string,
    readonly email: string,
    readonly password: string,
    readonly createdAt: string,
    readonly updatedAt: string
  ) {}
}
