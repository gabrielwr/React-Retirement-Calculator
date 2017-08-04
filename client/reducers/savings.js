
/* ------------   INITIAL STATE     ------------------ */
const initialState = '0'

/* -----------------    ACTION TYPES     ------------------ */
const ADD_SAVINGS = 'ADD_SAVINGS';

/* ------------  SYNC ACTION CREATORS     ------------------ */
export const savings = savings => ({ type: ADD_SAVINGS, savings });

/* ------------       REDUCER    ------------------ */
export default ( state = initialState, action ) => {
  const newState = Object.assign( {}, state )
  switch( action.type ) {
    case ADD_SAVINGS:
      newState.savings = action.savings
      break;
    default:
      return state
  }
  return newState
}
