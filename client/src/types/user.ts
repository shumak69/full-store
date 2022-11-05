export enum ROLE {
  ADMIN = "ADMIN",
  USER = "USER",
}

export interface IUser {
  id: number;
  email: string;
  role: ROLE;
}
