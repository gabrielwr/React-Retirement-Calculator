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

const rootReducer = combineReducers({
  currentAge,
  currentSavings,
  finalAmount,
  graphData,
  lifespan,
  marketReturn,
  retireAge,
  retireAmt,
  retireSpending,
  salary,
  salaryIncrease,
  savings
})

export default rootReducer;
