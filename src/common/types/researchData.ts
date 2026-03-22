export enum EResearchTypes {
  UnModerated = 'UNMODERATED',
  Moderated = 'MODERATED',
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
  workspaceId: number;
  type: EResearchTypes;
  templateId: number;
  access: EResearchAccessTypes;
  name: string;
  favorite: boolean;
  status: boolean;
  createdAt: string;
  updatedAt: string;
  deletedAt: string;
}
