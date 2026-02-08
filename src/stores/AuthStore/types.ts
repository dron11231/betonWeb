export interface IAuthData {
  email: string;
  password: string;
}

export enum EErrorAuthFieldTypes {
  Email = 'email', // TODO: Требуется замена на верхний регистр
  Password = 'PASSWORD',
}

export type TAuthErrorsMap = Record<EErrorAuthFieldTypes, string | null>;
