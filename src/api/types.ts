import { AxiosResponse } from 'axios';
import { IErrorResponse } from 'common/types/errorResponse';

export interface IResponse<TPayload = null> {
  payload: TPayload | null;
  errors: null | IErrorResponse[];
}

export type TBaseResponse<TPayload = null> = AxiosResponse<IResponse<TPayload>>;
