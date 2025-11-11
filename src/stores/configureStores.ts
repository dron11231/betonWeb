import { authApi } from 'api/authApi';
import { researchApi } from 'api/researchApi';
import { AuthStore, IAuthStore } from './AuthStore';
import { HomePageStore, IHomePageStore } from './HomePageStore';
import { IResearchesStore, ResearchesStore } from './ResearchesStore';
import { IUserStore, UserStore } from './UserStore';

export const userStore: IUserStore = new UserStore();

export const authStore: IAuthStore = new AuthStore(userStore, authApi);

export const homePageStore: IHomePageStore = new HomePageStore(
  userStore,
  researchApi
);

export const researchesStore: IResearchesStore = new ResearchesStore(
  researchApi
);
