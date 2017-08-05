import { combineReducers } from 'redux';


//should I use import here instead?
//how is this working with require since I'm not
// module.export-ing?
const rootReducer = combineReducers({
  currentAge: require( './currentAge' ).default,
  currentSavings: require( './currentSavings' ).default,
  finalAmount: require( './finalAmount' ).default,
  graphData: require( './graphData' ).default,
  lifespan: require( './lifespan' ).default,
  marketReturn: require( './marketReturn' ).default,
  retireAmt: require( './retireAmt' ).default,
  retireSpending: require( './retireSpending' ).default,
  salary: require( './salary' ).default,
  salaryIncrease: require( './salaryIncrease' ).default,
  savings: require( './savings' ).default,
})

export default rootReducer;
