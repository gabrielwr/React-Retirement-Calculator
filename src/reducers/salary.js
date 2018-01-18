
/* ------------   INITIAL STATE     ------------------ */
const initialState = '50000'

/* -----------------    ACTION TYPES     ------------------ */
const ADD_SALARY = 'ADD_SALARY';

/* ------------  SYNC ACTION CREATORS     ------------------ */
export const addSalary = salary => ({ type: ADD_SALARY, salary });

/* ------------       REDUCER    ------------------ */
export default ( state = initialState, action ) => {
  switch( action.type ) {
    case ADD_SALARY:
      return action.salary
    default:
      return state
  }
}
