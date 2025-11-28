export enum EErrorFieldTypes {
  Email = 'email', // Поменять потом на EMAIL
}

export interface IErrorResponse {
  field: EErrorFieldTypes; // null временно,
  text: string;
}
