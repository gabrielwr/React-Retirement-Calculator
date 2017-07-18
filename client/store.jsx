import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers/';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';

const store = createStore(
  rootReducer,
  applyMiddleware(
    createLogger(),
    thunkMiddleware
  )
);

export default store;
