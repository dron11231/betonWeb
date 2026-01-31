import { makeObservable, observable } from 'mobx';

export interface IBaseStore {
  isLoading: boolean;
}

export abstract class BaseStore implements IBaseStore {
  public isLoading: boolean;

  constructor() {
    this.isLoading = false;
    makeObservable(this, {
      isLoading: observable,
    });
  }

  protected handleError = (error) => {
    this.isLoading = false;

    console.log(error);
  };
}
