import { AxiosError } from 'axios';
import { action, makeObservable, observable } from 'mobx';
import { IAuthApi, IAuthResponse } from 'api/authApi';
import { IResponse } from 'api/types';
import { EAuthProcessTypes } from 'pages/AuthPage/types';
import { BaseStore, IBaseStore } from 'stores/BaseStore';
import { IUserStore } from 'stores/UserStore';
import { EErrorAuthFieldTypes, IAuthData, TAuthErrorsMap } from './types';

export interface IAuthStore extends IBaseStore {
  errors: TAuthErrorsMap;
  fetchAuthData(data: IAuthData, authProcessType: EAuthProcessTypes): Promise<void>;
  getCurrentUser(): Promise<void>;
  clearError(): void;
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
      clearError: action,
    });
  }

  public clearError = () => {
    if (this.errors.email !== null || this.errors.PASSWORD !== null) {
      this.errors = {
        [EErrorAuthFieldTypes.Email]: null,
        [EErrorAuthFieldTypes.Password]: null,
      };
    }
  };

  public getCurrentUser = async () => {
    const request = () => this._authApi.getCurrentUser();

    const success = ({ id, email }: IAuthResponse) => this._userStore.setUserData({ userId: id, email });

    this.executeRequest(request, success);
  };

  public fetchAuthData = async (data: IAuthData, authProcessType: EAuthProcessTypes) => {
    const authRequestsMap = {
      [EAuthProcessTypes.SignUp]: this._authApi.createNewUser,
      [EAuthProcessTypes.SignIn]: this._authApi.signIn,
    };

    const request = () => authRequestsMap[authProcessType](data);

    const success = ({ id, email }: IAuthResponse) => this._userStore.setUserData({ userId: id, email });

    const error = (error: AxiosError<IResponse<null, EErrorAuthFieldTypes>>) => {
      const errorData = error.response!.data.errors![0];
      this.errors[errorData.field] = errorData.text;
    };

    this.executeRequest(request, success, error);
  };
}
