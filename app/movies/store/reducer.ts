import { combineReducers } from 'redux';
import { reducer as list } from './list/reducer';
import { reducer as details } from './details/reducer';
import { reducer as search } from './search/reducer';

const reducer = combineReducers({
  list,
  details,
  search,
});

export { reducer };
