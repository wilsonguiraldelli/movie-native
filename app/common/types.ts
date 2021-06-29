import { AxiosRequestConfig, AxiosResponse } from 'axios';
import { AnyAction } from 'redux';
import { ThunkAction as DefaultThunkAction } from 'redux-thunk';
import { RootState } from 'typesafe-actions';

export type RequestPayload = {
  request: AxiosRequestConfig;
};

export interface Payload {
  payload: AxiosResponse
}

export type ThunkAction<
  T extends AnyAction,
  R = Promise<void>,
  S = undefined
  > = DefaultThunkAction<
    R,
    RootState,
    S,
    T
  >;