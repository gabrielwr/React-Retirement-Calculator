
/* ------------   INITIAL STATE     ------------------ */
const initialState = '10'

/* -----------------    ACTION TYPES     ------------------ */
const ADD_SAVINGS = 'ADD_SAVINGS';

/* ------------  SYNC ACTION CREATORS     ------------------ */
export const addSavings = savings => ({ type: ADD_SAVINGS, savings });

/* ------------       REDUCER    ------------------ */
export default ( state = initialState, action ) => {
  const newState = Object.assign( {}, state )
  switch( action.type ) {
    case ADD_SAVINGS:
      return action.savings
      break;
    default:
      return state
  }
}
