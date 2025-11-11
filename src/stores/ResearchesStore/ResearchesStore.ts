import { action, makeObservable, observable } from 'mobx';
import { IResearchApi } from 'api/researchApi';
import { TCreateResearchData } from 'api/researchApi/types';
import { IResearchData } from 'common/types';

export interface IResearchesStore {
  researchesList: IResearchData[];
  createNewResearch: (newResearchData: IResearchData) => Promise<void>;
}

export class ResearchesStore implements IResearchesStore {
  public researchesList: IResearchData[];

  private readonly _researchApi: IResearchApi;

  constructor(researchApi: IResearchApi) {
    this._researchApi = researchApi;
    this.researchesList = [];

    makeObservable<IResearchesStore>(this, {
      researchesList: observable,
      createNewResearch: action,
    });
  }

  public createNewResearch = async (newResearchData: IResearchData) => {
    this.researchesList = [...this.researchesList, newResearchData];
  };
}
