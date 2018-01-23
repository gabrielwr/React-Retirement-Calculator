
/* ------------   INITIAL STATE     ------------------ */
const initialState = '3'

/* -----------------    ACTION TYPES     ------------------ */
const ADD_SALARY_INCREASE = 'ADD_SALARY_INCREASE';

/* ------------  SYNC ACTION CREATORS     ------------------ */
export const addSalaryIncrease = salaryIncrease => ({ type: ADD_SALARY_INCREASE, salaryIncrease });

/* ------------       REDUCER    ------------------ */
export default ( state = initialState, action ) => {
  switch( action.type ) {
    case ADD_SALARY_INCREASE:
      return action.salaryIncrease;
    default:
      return state;
  }
}
