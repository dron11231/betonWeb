import { restApi } from 'api/restApi';
import { TBaseResponse } from 'api/types';
import { IResearchData } from 'common/types';
import { TCreateResearchData } from './types';

export interface IResearchApi {
  getRecentResearches: (
    userId: number
  ) => Promise<TBaseResponse<IResearchData[]>>;
  createResearch: (
    newResearchData: TCreateResearchData
  ) => Promise<TBaseResponse<IResearchData>>;
}

export const researchApi: IResearchApi = {
  getRecentResearches: (userId) => {
    return restApi.get(
      `/api/v1/research/recent?userId=${userId}&page=0&size=5`
    );
  },
  createResearch: (newResearchData) => {
    return restApi.post('/api/v1/research/create', newResearchData);
  },
};
