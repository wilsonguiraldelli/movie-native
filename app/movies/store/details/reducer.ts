import { Movie } from 'movies/types';
import { createReducer, RootState } from 'typesafe-actions';

import * as actions from './actions';

import { Payload } from 'common/types';

type State = Readonly<{
  movie: Movie | undefined,
}>;

const INITIAL_STATE: State = {
  movie: undefined,
};

const reducer: any = createReducer(INITIAL_STATE)
  .handleAction(actions.setCurrentMovie, (state: RootState, { payload }: Payload) => ({
    ...state,
    movie: payload,
  }))

export { reducer };
