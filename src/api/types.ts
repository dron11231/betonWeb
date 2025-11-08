import { AxiosResponse } from 'axios';

export interface IResponse<TPayload> {
  payload: TPayload;
  errors: null;
}

export type TBaseResponse<TPayload> = AxiosResponse<IResponse<TPayload>>;
