export interface IUserInput {
  email: string;
  password: string;
}

export interface IUserOutput {
  id: string;
  email: string;
  createdAt: Date;
  updatedAt: Date;
}
