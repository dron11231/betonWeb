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
  id: number;
  userId: number;
  type: EResearchTypes;
  template: EResearchTemplateTypes;
  access: EResearchAccessTypes;
  permission: EResearchPermissionTypes;
  name: string;
  favorite: boolean;
  status: boolean;
  createdAt: Date;
  updatedAt: Date | null;
  deletedAt: Date | null;
}
