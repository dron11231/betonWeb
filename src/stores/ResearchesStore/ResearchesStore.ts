import { action, makeObservable, observable } from 'mobx';
import { IResearchApi } from 'api/researchApi';
import { IResearchData } from 'common/types';

export interface IResearchesStore {
  researchesList: IResearchData[];
  isCreateResearchOpen: boolean;
  createNewResearch: (newResearchData: IResearchData) => Promise<void>;
  toggleCreateResearchScreen: () => void;
}

export class ResearchesStore implements IResearchesStore {
  public researchesList: IResearchData[];
  public isCreateResearchOpen: boolean;

  private readonly _researchApi: IResearchApi;

  constructor(researchApi: IResearchApi) {
    this._researchApi = researchApi;
    this.researchesList = [];
    this.isCreateResearchOpen = false;

    makeObservable<IResearchesStore>(this, {
      researchesList: observable,
      isCreateResearchOpen: observable,
      createNewResearch: action,
    });
  }

  public toggleCreateResearchScreen = () => {
    this.isCreateResearchOpen = !this.isCreateResearchOpen;
  };

  public createNewResearch = async (newResearchData: IResearchData) => {
    this.researchesList = [...this.researchesList, newResearchData];
  };
}
