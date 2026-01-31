import { restApi } from 'api/restApi';
import { TBaseResponse } from 'api/types';
import { EErrorAuthFieldTypes, IAuthData } from 'stores/AuthStore/types';
import { IAuthResponse } from './types';

export interface IAuthApi {
  createNewUser(userData: IAuthData): Promise<TBaseResponse<IAuthResponse, EErrorAuthFieldTypes>>;
  signIn(userData: IAuthData): Promise<TBaseResponse<IAuthResponse, EErrorAuthFieldTypes>>;
  getCurrentUser(): Promise<TBaseResponse<IAuthResponse>>;
}

export const authApi: IAuthApi = {
  createNewUser: (userData) => {
    return restApi.post(`/api/auth/sign-up`, userData);
  },
  signIn: (userData) => {
    return restApi.post(`/api/auth/sign-in`, userData);
  },
  getCurrentUser: () => {
    return restApi.get('/api/auth/user');
  },
};
