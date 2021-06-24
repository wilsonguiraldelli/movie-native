import { createStore, applyMiddleware, compose } from 'redux';
import { multiClientMiddleware } from 'redux-axios-middleware';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';

import { reducer } from './reducer';
import { clients } from './clients';

const middlewares = [];

const composeEnhancers = (process.env.NODE_ENV === 'development'
  && window
  && (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__)
  || compose;

const axiosMiddleware = multiClientMiddleware(clients, {
  defaultClientName: 'default',
  returnRejectedPromiseOnError: true,
});

middlewares.push(axiosMiddleware);
middlewares.push(thunk);

const logger = createLogger({ duration: true, diff: true });
middlewares.push(logger);
// eslint-disable-next-line no-console
console.log('[REDUX] Redux logger added!');

const enhancer = composeEnhancers(applyMiddleware(...middlewares));
const store = createStore(reducer, {}, enhancer);
export { store };
