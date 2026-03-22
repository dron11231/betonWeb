import { EResearchPermissionTypes, EResearchTemplateTypes, IResearchData } from 'common/types';

export type TCreateResearchData = Omit<
  IResearchData,
  'id' | 'favorite' | 'status' | 'workspaceId' | 'templateId' | 'createdAt' | 'updatedAt' | 'deletedAt'
> & { template: EResearchTemplateTypes; permission: EResearchPermissionTypes };
