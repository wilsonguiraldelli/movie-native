import { SearchResponse } from 'movies/types';
import { createReducer, RootState } from 'typesafe-actions';

import * as actions from './actions';

import { Payload } from 'common/types';

type State = Readonly<{
  data: SearchResponse,
  isLoading: boolean,
  currentPage: Number,
}>;

const INITIAL_STATE: State = {
  isLoading: false,
  currentPage: 1,
  data: {
    page: undefined,
    total_pages: undefined,
    total_results: undefined,
    results: [],
  },
};

const reducer: any = createReducer(INITIAL_STATE)
  .handleAction(actions.get.request, (state: RootState) => ({
    ...state,
    isLoading: true,
    currentPage: 1,
  }))
  .handleAction(actions.get.failure, (state: RootState) => ({
    ...state,
    isLoading: false,
  }))
  .handleAction(actions.get.success, (state: State, { payload }: Payload) => ({
    ...state,
    isLoading: false,
    data: {
      page: payload.data.page,
      total_pages: payload.data.total_pages,
      total_results: payload.data.total_results,
      results: payload.data.results,
    },
  }))
  .handleAction(actions.paginate.success, (state: State, { payload }: Payload) => ({
    ...state,
    isLoading: false,
    data: {
      page: payload.data.page,
      total_pages: payload.data.total_pages,
      total_results: payload.data.total_results,
      results: [...state.data.results, ...payload.data.results],
    },
  }))
  .handleAction(actions.setCurrentPage, (state: RootState, { payload }: Payload) => ({
    ...state,
    currentPage: payload,
  }))
  .handleAction(actions.reset, () => INITIAL_STATE)

export { reducer };
