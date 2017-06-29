import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  calc: require('./calc.jsx').default,
  auth: require('./auth.jsx').default
})

export default rootReducer;
