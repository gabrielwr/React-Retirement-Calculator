
/* ------------   INITIAL STATE     ------------------ */
const initialState = '3'

/* -----------------    ACTION TYPES     ------------------ */
const ADD_SALARY_INCREASE = 'ADD_SALARY_INCREASE';

/* ------------  SYNC ACTION CREATORS     ------------------ */
export const addCurrentAge = salaryIncrease => ({ type: ADD_SALARY_INCREASE, salaryIncrease });

/* ------------       REDUCER    ------------------ */
export default ( state = initialState, action ) => {
  const newState = Object.assign( {}, state )
  switch( action.type ) {
    case ADD_SALARY_INCREASE:
      newState.salaryIncrease = action.salaryIncrease
      break;
    default:
      return state
  }
  return newState
}
