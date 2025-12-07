export enum EErrorFieldTypes {
  Email = 'email', // Поменять потом на EMAIL
  Password = 'PASSWORD',
}

export interface IErrorResponse {
  field: EErrorFieldTypes; // null временно,
  text: string;
}
