
/* ------------   INITIAL STATE     ------------------ */
const initialState = {
  salary: '50000'
}

/* -----------------    ACTION TYPES     ------------------ */
const ADD_SALARY = 'ADD_SALARY';

/* ------------  SYNC ACTION CREATORS     ------------------ */
export const addSalary = salary => ({ type: ADD_SALARY, salary });

/* ------------       REDUCER    ------------------ */
export default ( state = initialState, action ) => {
  const newState = Object.assign( {}, state )
  switch( action.type ) {
    case ADD_SALARY:
      newState.salary = action.salary
      break;
    default:
      return state
  }
  return newState
}
