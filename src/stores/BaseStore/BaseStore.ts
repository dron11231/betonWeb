import { AxiosError } from 'axios';
import { makeObservable, observable, runInAction } from 'mobx';
import { TBaseResponse } from 'api/types';

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

  protected executeRequest = async <DataType, ErrorType>(
    request: () => Promise<TBaseResponse<DataType, ErrorType>>,
    onSuccess?: (data: DataType) => DataType | void,
    onError?: (error: AxiosError) => void
  ): Promise<void> => {
    try {
      this.isLoading = true;
      const responseData = await request();
      runInAction(() => {
        if (responseData.data.payload) {
          onSuccess?.(responseData.data.payload);
        }
      });
    } catch (error) {
      console.log(error);

      runInAction(() => {
        onError?.(error);
      });
    } finally {
      this.isLoading = false;
    }
  };
}
