import { combineReducers } from 'redux';
import { reducer as movies } from 'movies/store/reducer';

const reducer = combineReducers({
  movies,
});

export { reducer };
