import { AxiosError } from 'axios';
import { action, makeObservable, observable } from 'mobx';
import { IAuthApi } from 'api/authApi';
import { IResponse } from 'api/types';
import { EErrorFieldTypes } from 'common/types/errorResponse';
import { EAuthProcessTypes } from 'pages/AuthPage/types';
import { IUserStore } from 'stores/UserStore';
import { IAuthData, IAuthErrorsMap } from './types';

export interface IAuthStore {
  isLoading: boolean;
  errors: IAuthErrorsMap;
  fetchAuthData(
    data: IAuthData,
    authProcessType: EAuthProcessTypes
  ): Promise<void>;
  getCurrentUser(): Promise<void>;
}

export class AuthStore implements IAuthStore {
  public isLoading: boolean;
  public errors: IAuthErrorsMap;

  private readonly _userStore: IUserStore;
  private readonly _authApi: IAuthApi;

  constructor(userStore: IUserStore, authApi: IAuthApi) {
    this._userStore = userStore;
    this._authApi = authApi;
    this.isLoading = false;
    this.errors = {
      [EErrorFieldTypes.Email]: null,
      [EErrorFieldTypes.Password]: null,
    };

    makeObservable<IAuthStore>(this, {
      isLoading: observable,
      errors: observable,
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
      // const axiosError: AxiosError<IErrorResponse> = error;
      this.isLoading = false;
      // this.errors = axiosError.response?.data;
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
      const emailError = axiosError.response?.data.errors!.find(
        (error) => error.field === EErrorFieldTypes.Email
      );
      const passwordError = axiosError.response?.data.errors!.find(
        (error) => error.field === EErrorFieldTypes.Password
      );

      this.errors = {
        [EErrorFieldTypes.Email]: emailError?.text || null,
        [EErrorFieldTypes.Password]: passwordError?.text || null,
      };

      console.log('error: ', error);
    }
  };
}
