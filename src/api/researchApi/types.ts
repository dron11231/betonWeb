import { IResearchData } from 'common/types';

export type TCreateResearchData = Omit<
  IResearchData,
  'id' | 'favorite' | 'status' | 'createdAt' | 'updatedAt' | 'deletedAt'
>;
