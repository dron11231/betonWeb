import { restApi } from 'api/restApi';
import { TBaseResponse } from 'api/types';
import { IAuthData } from 'stores/AuthStore/types';
import { IAuthResponse } from './types';

export interface IAuthApi {
  createNewUser(userData: IAuthData): Promise<TBaseResponse<IAuthResponse>>;
  signIn(userData: IAuthData): Promise<TBaseResponse<IAuthResponse>>;
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
