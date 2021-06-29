import { combineReducers } from 'redux';
import { reducer as list } from './list/reducer';
import { reducer as details } from './details/reducer';

const reducer = combineReducers({
  list,
  details,
});

export { reducer };
