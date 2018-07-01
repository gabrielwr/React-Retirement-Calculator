import * as R from 'ramda';

/*
  # (reducer) calculation-data

  The `calculation-data` reducer describes user-specified data needed for graph calculation

*/
export const actionTypes = {
  SET_STARTING_AGE: 'CALCULATION_DATA_SET_STARTING_AGE',
  SET_STARTING_SAVINGS: 'CALCULATION_DATA_SET_STARTING_SAVINGS',
  SET_FINAL_SAVINGS: 'CALCULATION_DATA_SET_FINAL_SAVINGS',
  SET_GRAPH_DATA: 'CALCULATION_DATA_SET_GRAPH_DATA',
  SET_INVESTMENT_RETURN_RATE: 'CALCULATION_DATA_SET_INVESTMENT_RETURN_RATE',
  SET_LIFE_EXPECTANCY: 'CALCULATION_DATA_SET_LIFE_EXPECTANCY',
  SET_RETIRE_AGE: 'CALCULATION_DATA_SET_RETIRE_AGE',
  SET_RETIRE_SAVINGS: 'CALCULATION_DATA_SET_RETIRE_SAVINGS',
  SET_RETIRE_SPENDING: 'CALCULATION_DATA_SET_RETIRE_SPENDING',
  SET_SALARY: 'CALCULATION_DATA_SET_SALARY',
  SET_SALARY_INCREASE: 'CALCULATION_DATA_SET_SALARY_INCREASE',
  SET_SAVINGS: 'CALCULATION_DATA_SET_SALARY_INCREASE',
};

export const actions = {
  setCurrentAge(age) {
    return { type: actionTypes.SET_STARTING_AGE, age };
  },
  setCurrentSavings(savings) {
    return { type: actionTypes.SET_STARTING_SAVINGS, savings };
  },
  setFinalSavings(savings) {
    return { type: actionTypes.SET_FINAL_SAVINGS, savings };
  },
  setGraphData(graphData) {
    return { type: actionTypes.SET_GRAPH_DATA, graphData };
  },
  setInvestmentReturnRate(returnRate) {
    return { type: actionTypes.SET_INVESTMENT_RETURN_RATE, returnRate };
  },
  setLifeExpectancy(lifeExpectancy) {
    return { type: actionTypes.SET_LIFE_EXPECTANCY, lifeExpectancy };
  },
};

export const INITIAL_STATE = {
  startingAge: '26',
  startingSavings: '0',
  finalSavings: '0',
  graphData: [],
  investmentReturnRate: '4',
  lifeExpectancy: '80',
  retireAge: '65',
  retireAmt: '0',
  retireSpending: '40000',
  salary: '50000',
  salaryIncrease: '3',
  savings: '1',
};

export default reducer = (_state = INITIAL_STATE, action) => {
  let state = Object.assign({}, _state);

  switch(action.type) {
    case actionTypes.SET_STARTING_AGE:
      state = R.assoc('startingAge', action.age)(state);
      break;

    case actionTypes.SET_STARTING_SAVINGS:
      state = R.assoc('startingSavings', action.savings)(state);
      break;

    case actionTypes.SET_FINAL_SAVINGS:
      state = R.assoc('finalSavings', action.savings)(state);
      break;

    case actionTypes.SET_GRAPH_DATA:
      state = R.assoc('graphData', action.graphData)(state);
      break;

    case actionTypes.SET_INVESTMENT_RETURN_RATE:
      state = R.assoc('investmentReturnRate', action.returnRate)(state);
      break;

    case actionTypes.SET_LIFE_EXPECTANCY:
      state = R.assoc('lifeExpectancy', action.lifeExpectancy)(state);
      break;

    default:
      return state;
  }

  return state;
}
