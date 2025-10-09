import { makeAutoObservable } from 'mobx';
import { IUserData } from './types';

export interface IUserStore {
  userData: IUserData | null;

  setUserData(userData: IUserData): void;
}

export class UserStore implements IUserStore {
  public userData: IUserData;

  constructor() {
    makeAutoObservable(this);
  }

  public setUserData(userData: IUserData): void {
    this.userData = userData;
  }
}
