import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  graphData: require('./graphData').default,
  auth: require('./auth').default
})

export default rootReducer;
