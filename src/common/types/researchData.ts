export enum EResearchTypes {
  UnModerated = 'UN_MODERATED',
}

export enum EResearchTemplateTypes {
  Blank = 'BLANK',
}

export enum EResearchAccessTypes {
  Private = 'PRIVATE',
}

export enum EResearchPermissionTypes {
  Write = 'WRITE',
}

export interface IResearchData {
  userId: number;
  name: string;
  type: EResearchTypes;
  template: EResearchTemplateTypes;
  access: EResearchAccessTypes;
  permission: EResearchPermissionTypes;
}
