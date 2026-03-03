import {
  EResearchAccessTypes,
  EResearchPermissionTypes,
  EResearchTemplateTypes,
  EResearchTypes,
} from 'common/types';

export const generateCreatedResearchData = (
  name: string,
  userId: number,
  type: EResearchTypes
) => ({
  userId: userId,
  type: type,
  template: EResearchTemplateTypes.Blank,
  access: EResearchAccessTypes.Private,
  permission: EResearchPermissionTypes.Write,
  name: name,
});
