import { AxiosError } from 'axios';
import { action, makeObservable, observable } from 'mobx';
import { IResearchApi } from 'api/researchApi';
import { TCreateResearchData } from 'api/researchApi/types';
import { IResponse } from 'api/types';
import { IResearchData } from 'common/types';
import { BaseStore, IBaseStore } from 'stores/BaseStore';
import { EResearchErrorTypes, TResearchErrorsMap } from './types';

export interface IResearchesStore extends IBaseStore {
  readonly errors: Readonly<TResearchErrorsMap>;
  researchesList: IResearchData[];
  createNewResearch: (newResearchData: TCreateResearchData) => Promise<void>;
  clearError: () => void;
}

export class ResearchesStore extends BaseStore implements IResearchesStore {
  public errors: TResearchErrorsMap;
  private readonly _researchApi: IResearchApi;

  public researchesList: IResearchData[];

  constructor(researchApi: IResearchApi) {
    super();
    this._researchApi = researchApi;
    this.researchesList = [];
    this.errors = {
      [EResearchErrorTypes.Name]: null,
    };

    makeObservable<IResearchesStore>(this, {
      researchesList: observable,
      errors: observable,
      createNewResearch: action,
      clearError: action,
    });
  }

  public clearError = () => {
    this.errors = {
      [EResearchErrorTypes.Name]: null,
    };
  };

  public createNewResearch = async (newResearchData: TCreateResearchData) => {
    const request = () => this._researchApi.createResearch(newResearchData);

    const success = (responseData: IResearchData) => (this.researchesList = [...this.researchesList, responseData]);

    const error = (error: AxiosError<IResponse<null, EResearchErrorTypes>>) =>
      error.response?.data.errors!.forEach((error) => {
        this.errors[error.field] = error.text;
      });

    this.executeRequest(request, success, error);
  };
}
