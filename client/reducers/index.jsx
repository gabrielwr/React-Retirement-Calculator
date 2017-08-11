import { combineReducers } from 'redux';

import currentAge from './currentAge';
import currentSavings from './currentSavings';
import finalAmount from './finalAmt';
import graphData from './graphData';
import lifespan from './lifespan';
import marketReturn from './marketReturn';
import retireAge from './retireAge';
import retireAmt from './retireAmt';
import retireSpending from './retireSpending';
import salary from './salary';
import salaryIncrease from './salaryIncrease';
import savings from './savings';

//should I use import here instead?
//how is this working with require since I'm not
// module.export-ing?
const rootReducer = combineReducers({
  currentAge: require( './currentAge' ).default,
  currentSavings: require( './currentSavings' ).default,
  finalAmount: require( './finalAmt' ).default,
  graphData: require( './graphData' ).default,
  lifespan: require( './lifespan' ).default,
  marketReturn: require( './marketReturn' ).default,
  retireAge: require( './retireAge' ).default,
  retireAmt: require( './retireAmt' ).default,
  retireSpending: require( './retireSpending' ).default,
  salary: require( './salary' ).default,
  salaryIncrease: require( './salaryIncrease' ).default,
  savings: require( './savings' ).default,
})

export default rootReducer;
