export interface LoginInput {
  email: string;
  password: string;
}

export interface LoginOutput {
  id: string;
  email: string;
  token: string;
}
