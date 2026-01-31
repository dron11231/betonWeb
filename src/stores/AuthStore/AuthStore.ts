import { AxiosError } from 'axios';
import { action, makeObservable, observable } from 'mobx';
import { IAuthApi } from 'api/authApi';
import { IResponse } from 'api/types';
import { EAuthProcessTypes } from 'pages/AuthPage/types';
import { BaseStore, IBaseStore } from 'stores/BaseStore';
import { IUserStore } from 'stores/UserStore';
import { EErrorAuthFieldTypes, IAuthData, TAuthErrorsMap } from './types';

export interface IAuthStore extends IBaseStore {
  errors: TAuthErrorsMap;
  fetchAuthData(data: IAuthData, authProcessType: EAuthProcessTypes): Promise<void>;
  getCurrentUser(): Promise<void>;
}

export class AuthStore extends BaseStore implements IAuthStore {
  public errors: TAuthErrorsMap;
  private readonly _userStore: IUserStore;
  private readonly _authApi: IAuthApi;

  constructor(userStore: IUserStore, authApi: IAuthApi) {
    super();
    this._userStore = userStore;
    this._authApi = authApi;
    this.errors = {
      [EErrorAuthFieldTypes.Email]: null,
      [EErrorAuthFieldTypes.Password]: null,
    };

    makeObservable<IAuthStore>(this, {
      errors: observable,
      getCurrentUser: action,
      fetchAuthData: action,
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
      this.handleError(error);
    }
  };

  public fetchAuthData = async (data: IAuthData, authProcessType: EAuthProcessTypes) => {
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
      this.handleError(error);
      const axiosError: AxiosError<IResponse<null, EErrorAuthFieldTypes>> = error;
      axiosError.response?.data.errors!.forEach((error) => {
        this.errors[error.field] = error.text;
      });
    }
  };
}
