import axios from 'axios';
import { baseUrl } from 'api/baseUrl';
import { TBaseResponse } from 'api/types';
import { IAuthData } from 'stores/AuthStore/types';
import { ICreateNewUserResponsePayload } from './types';

export interface IAuthApi {
  createNewUser(
    userData: IAuthData
  ): Promise<TBaseResponse<ICreateNewUserResponsePayload>>;
}

export const authApi: IAuthApi = {
  createNewUser: (userData) => {
    return axios.post(`${baseUrl}/research/api/auth/sign-up`, userData);
  },
};
