import axios from 'axios';
import { baseUrl } from 'api/baseUrl';
import { TBaseResponse } from 'api/types';
import { IAuthData } from 'stores/AuthStore/types';
import { IAuthResponse } from './types';

export interface IAuthApi {
  createNewUser(userData: IAuthData): Promise<TBaseResponse<IAuthResponse>>;
  signIn(userData: IAuthData): Promise<TBaseResponse<IAuthResponse>>;
}

export const authApi: IAuthApi = {
  createNewUser: (userData) => {
    return axios.post(`${baseUrl}/research/api/auth/sign-up`, userData);
  },
  signIn: (userData) => {
    return axios.post(`${baseUrl}/research/api/auth/sign-in`, userData);
  },
};
