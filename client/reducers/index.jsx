import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  numScenarios: require('./calcScenarios').default,
  graphData: require('./graphData').default,
  auth: require('./auth').default
})

export default rootReducer;
