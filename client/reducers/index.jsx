import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  graphData: require( './graphData' ).default,
  currentAge: require( './currentAge' ).default,
  salary: require( './salary' ).default,
  retireSpending: require( './retireSpending' ).default,
  marketReturn: require( './marketReturn' ).default,
  savings: require( './savings' ).default,
  currentSavings: require( './currentSavings' ).default,
  finalAmount: require( './finalAmount' ).default,
  retireAmt: require( './retireAmt' ).default,
  auth: require( './auth' ).default,
})

export default rootReducer;
