export interface IAuthData {
  email: string;
  password: string;
}

export enum EErrorAuthFieldTypes {
  Email = 'EMAIL',
  Password = 'PASSWORD',
}

export type TAuthErrorsMap = Record<EErrorAuthFieldTypes, string | null>;
