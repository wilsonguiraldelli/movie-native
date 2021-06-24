import { createReducer } from 'typesafe-actions';

type InitialState = Readonly<{

}>;

const INITIAL_STATE: InitialState = {
  loacation: undefined,
  loading: false,
};

const reducer = createReducer(INITIAL_STATE)

export { reducer };
