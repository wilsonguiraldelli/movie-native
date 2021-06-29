import { createAction } from 'typesafe-actions';

import { Movie } from 'movies/types';

export const setCurrentMovie = createAction('MOVIES/DETAILS/SET_CURRENT_MOVIE')<Movie>()
