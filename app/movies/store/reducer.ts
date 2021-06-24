import { combineReducers } from 'redux';
import { reducer as list } from './list/reducer';

const reducer = combineReducers({
  list,
});

export { reducer };
