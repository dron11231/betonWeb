import { action, makeObservable, observable } from 'mobx';
import { IAuthApi } from 'api/authApi';
import { EAuthProcessTypes } from 'pages/AuthPage/types';
import { IUserStore } from 'stores/UserStore';
import { IAuthData } from './types';

export interface IAuthStore {
  isLoggedIn: boolean;
  isLoading: boolean;
  fetchAuthData(data: IAuthData, authProcessType: EAuthProcessTypes): void;
}

export class AuthStore implements IAuthStore {
  public isLoggedIn: boolean;
  public isLoading: boolean;

  private readonly _userStore: IUserStore;
  private readonly _authApi: IAuthApi;

  constructor(userStore: IUserStore, authApi: IAuthApi) {
    this._userStore = userStore;
    this._authApi = authApi;
    this.isLoading = false;
    this.isLoggedIn = false;

    makeObservable<IAuthStore>(this, {
      isLoggedIn: observable,
      isLoading: observable,
      fetchAuthData: action,
    });
  }

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
        this.isLoggedIn = true;
        this.isLoading = false;
      }
    } catch (error) {
      console.log(error);
      this.isLoading = false;
    }
  };
}
