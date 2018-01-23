import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers/';
import { createLogger } from 'redux-logger';

const store = createStore(
  rootReducer,
  applyMiddleware(
    createLogger()
  )
);

export default store;
