import { IAuthApi } from 'api/authApi';
import { IUserStore } from 'stores/UserStore';
import { IAuthData } from './types';

export interface IAuthStore {
  isLoggedIn: boolean;
  fetchSignUpData(data: IAuthData): void;
}

export class AuthStore implements IAuthStore {
  public isLoggedIn: boolean;

  private readonly _userStore: IUserStore;
  private readonly _authApi: IAuthApi;

  constructor(userStore: IUserStore, authApi: IAuthApi) {
    this._userStore = userStore;
    this._authApi = authApi;
  }

  public fetchSignUpData = async (data: IAuthData) => {
    try {
      const response = await this._authApi.createNewUser(data);

      if (response.data?.payload) {
        const { id, email } = response.data.payload;
        this._userStore.setUserData({ userId: id, email });
        this.isLoggedIn = true;
      }
    } catch (error) {
      console.log(error);
    }
  };
}
