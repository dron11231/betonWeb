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

  protected executeRequest = async (request: () => Promise<void>) => {
    this.isLoading = true;
    await request();
    this.isLoading = false;
  };

  protected handleError = (error) => {
    this.isLoading = false;

    console.log(error);
  };
}
