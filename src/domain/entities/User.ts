export class User {
  constructor(
    readonly id: string,
    readonly email: string,
    readonly password: string,
    readonly active: boolean,
    readonly createdAt: Date,
    readonly updatedAt: Date
  ) {}
}
