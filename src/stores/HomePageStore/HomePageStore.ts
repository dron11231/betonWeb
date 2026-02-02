import { action, makeObservable, observable } from 'mobx';
import { IResearchApi } from 'api/researchApi';
import { IResearchData } from 'common/types';
import { BaseStore, IBaseStore } from 'stores/BaseStore';
import { IUserStore } from 'stores/UserStore';

export interface IHomePageStore extends IBaseStore {
  recentResearches: IResearchData[];
  getRecentResearchesList: () => Promise<void>;
}

export class HomePageStore extends BaseStore implements IHomePageStore {
  public recentResearches: IResearchData[];

  private readonly _userStore: IUserStore;
  private readonly _researchApi: IResearchApi;

  constructor(userStore: IUserStore, researchApi: IResearchApi) {
    super();
    this._userStore = userStore;
    this._researchApi = researchApi;
    this.recentResearches = [];

    makeObservable<IHomePageStore>(this, {
      recentResearches: observable,
      getRecentResearchesList: action,
    });
  }

  public getRecentResearchesList = async () => {
    const request = () => this._researchApi.getRecentResearches(this._userStore.userData!.userId);

    const success = (responseData: IResearchData[]) => (this.recentResearches = responseData);

    this.executeRequest(request, success);
  };
}
