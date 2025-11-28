import { AxiosError } from 'axios';
import { action, makeObservable, observable } from 'mobx';
import { IAuthApi } from 'api/authApi';
import { IResponse } from 'api/types';
import { IErrorResponse } from 'common/types/errorResponse';
import { EAuthProcessTypes } from 'pages/AuthPage/types';
import { IUserStore } from 'stores/UserStore';
import { IAuthData } from './types';

export interface IAuthStore {
  isLoading: boolean;
  error: IErrorResponse | null | undefined;
  fetchAuthData(
    data: IAuthData,
    authProcessType: EAuthProcessTypes
  ): Promise<void>;
  getCurrentUser(): Promise<void>;
}

export class AuthStore implements IAuthStore {
  public isLoading: boolean;
  public error: IErrorResponse | null | undefined;

  private readonly _userStore: IUserStore;
  private readonly _authApi: IAuthApi;

  constructor(userStore: IUserStore, authApi: IAuthApi) {
    this._userStore = userStore;
    this._authApi = authApi;
    this.isLoading = false;
    this.error = null;

    makeObservable<IAuthStore>(this, {
      isLoading: observable,
      error: observable,
      fetchAuthData: action,
      getCurrentUser: action,
    });
  }

  public getCurrentUser = async () => {
    try {
      this.isLoading = true;
      const response = await this._authApi.getCurrentUser();

      if (response.data.payload) {
        const { id, email } = response.data.payload;

        this._userStore.setUserData({ userId: id, email });
        this.isLoading = false;
      }
    } catch (error) {
      const axiosError: AxiosError<IErrorResponse> = error;
      this.isLoading = false;
      this.error = axiosError.response?.data;
      console.log('error: ', error);
    }
  };

  public fetchAuthData = async (
    data: IAuthData,
    authProcessType: EAuthProcessTypes
  ) => {
    try {
      const authRequestsMap = {
        [EAuthProcessTypes.SignUp]: this._authApi.createNewUser,
        [EAuthProcessTypes.SignIn]: this._authApi.signIn,
      };
      this.isLoading = true;
      const response = await authRequestsMap[authProcessType](data);

      if (response.data?.payload) {
        const { id, email } = response.data.payload;
        this._userStore.setUserData({ userId: id, email });
        this.isLoading = false;
      }
    } catch (error) {
      const axiosError: AxiosError<IResponse> = error;
      this.isLoading = false;
      this.error = axiosError.response?.data.errors![0];

      console.log('error: ', error);
    }
  };
}
