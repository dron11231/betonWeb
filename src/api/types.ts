import { AxiosResponse } from 'axios';

export interface IBaseErrorResponse<FieldTypes> {
  field: FieldTypes;
  text: string;
}

export interface IResponse<TPayload = null, ErrorFields = null> {
  payload: TPayload | null;
  errors: null | IBaseErrorResponse<ErrorFields>[];
}

export type TBaseResponse<TPayload = null, ErrorType = null> = AxiosResponse<IResponse<TPayload, ErrorType>>;
