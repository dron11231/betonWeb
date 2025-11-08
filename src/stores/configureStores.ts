import { authApi } from 'api/authApi';
import { AuthStore, IAuthStore } from './AuthStore';
import { IUserStore, UserStore } from './UserStore';

export const userStore: IUserStore = new UserStore();

export const authStore: IAuthStore = new AuthStore(userStore, authApi);
