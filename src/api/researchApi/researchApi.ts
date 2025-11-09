import axios from 'axios';
import { baseUrl } from 'api/baseUrl';
import { TBaseResponse } from 'api/types';
import { IResearchData } from 'common/types';

export interface IResearchApi {
  getRecentResearches: (
    userId: number
  ) => Promise<TBaseResponse<IResearchData[]>>;
}

export const researchApi: IResearchApi = {
  getRecentResearches: (userId) => {
    return axios.get(
      `${baseUrl}//research/api/v1/research/recent?userId=${userId}&page=0&size=5`
    );
  },
};
