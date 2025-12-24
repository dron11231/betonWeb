import { action, makeObservable, observable } from 'mobx';
import { IResearchApi } from 'api/researchApi';
import { IResearchData } from 'common/types';
import { IUserStore } from 'stores/UserStore';

export interface IHomePageStore {
  recentResearches: IResearchData[];
  getRecentResearchesList: () => Promise<void>;
}

export class HomePageStore implements IHomePageStore {
  public recentResearches: IResearchData[];

  private readonly _userStore: IUserStore;
  private readonly _researchApi: IResearchApi;

  constructor(userStore: IUserStore, researchApi: IResearchApi) {
    this._userStore = userStore;
    this._researchApi = researchApi;
    this.recentResearches = [];

    makeObservable<IHomePageStore>(this, {
      recentResearches: observable,
      getRecentResearchesList: action,
    });
  }

  public getRecentResearchesList = async () => {
    try {
      const response = await this._researchApi.getRecentResearches(
        this._userStore.userData!.userId
      );

      if (response.data.payload) {
        this.recentResearches = response.data.payload;
      }
    } catch (error) {
      console.log('error: ', error);
    }
  };
}
