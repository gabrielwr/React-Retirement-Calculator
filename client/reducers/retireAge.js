
/* ------------   INITIAL STATE     ------------------ */
const initialState = '65'

/* -----------------    ACTION TYPES     ------------------ */
const ADD_RETIRE_AGE = 'ADD_RETIRE_AGE';

/* ------------  SYNC ACTION CREATORS     ------------------ */
export const addRetireAge = retireAge => ({ type: ADD_RETIRE_AGE, retireAge });

/* ------------       REDUCER    ------------------ */
export default ( state = initialState, action ) => {
  switch( action.type ) {
    case ADD_RETIRE_AGE:
      return action.retireAge
    default:
      return state
  }
}
