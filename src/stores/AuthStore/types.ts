import { EErrorFieldTypes } from 'common/types/errorResponse';

export interface IAuthData {
  email: string;
  password: string;
}

export interface IAuthErrorsMap {
  [EErrorFieldTypes.Email]: string | null;
  [EErrorFieldTypes.Password]: string | null;
}
