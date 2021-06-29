import { MoviesResponse } from 'movies/types';
import { createReducer, RootState } from 'typesafe-actions';

import * as actions from './actions';

import { Payload } from 'common/types';

type State = Readonly<{
  data: MoviesResponse,
  isLoading: boolean,
  currentPage: Number,
}>;

const INITIAL_STATE: State = {
  isLoading: false,
  currentPage: 1,
  data: {
    page: undefined,
    pages_total: undefined,
    total_results: undefined,
    results: [],
    dates: {
      maximum: undefined,
      minimum: undefined,
    }
  },
};

const reducer: any = createReducer(INITIAL_STATE)
  .handleAction(actions.upcoming.request, (state: RootState) => ({
    ...state,
    isLoading: true,
  }))
  .handleAction(actions.upcoming.success, (state: State, { payload }: Payload) => ({
    ...state,
    isLoading: false,
    data: {
      page: payload.data.page,
      pages_total: payload.data.total,
      total_results: payload.data.total,
      results: [...state.data.results, ...payload.data.results],
      dates: {
        maximum: payload.data.maximum,
        minimum: payload.data.minimum,
      }
    },
  }))
  .handleAction(actions.upcoming.failure, (state: RootState) => ({
    ...state,
    isLoading: false,
  }))
  .handleAction(actions.setCurrentPage, (state: RootState, { payload }: Payload) => ({
    ...state,
    currentPage: payload,
  }))

export { reducer };
