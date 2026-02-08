export enum EResearchErrorTypes {
  Name = 'name', // Потом заменить на NAME
}

export type TResearchErrorsMap = Record<EResearchErrorTypes, string | null>;
