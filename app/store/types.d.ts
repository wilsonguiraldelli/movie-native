import { StateType } from 'typesafe-actions';

declare module 'typesafe-actions' {
  export type Store = StateType<typeof import('./index').store>;
  export type RootState = StateType<typeof import('./reducer').reducer>;
}
