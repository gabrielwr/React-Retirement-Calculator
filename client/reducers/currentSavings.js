
/* ------------   INITIAL STATE     ------------------ */
const initialState = {
  currentSavings: '0'
}

/* -----------------    ACTION TYPES     ------------------ */
const ADD_CURRENT_SAVINGS = 'ADD_CURRENT_SAVINGS';

/* ------------  SYNC ACTION CREATORS     ------------------ */
export const currentSavings = currentSavings => ({ type: ADD_CURRENT_SAVINGS, currentSavings });

/* ------------       REDUCER    ------------------ */
export default ( state = initialState, action ) => {
  const newState = Object.assign( {}, state )
  switch( action.type ) {
    case ADD_CURRENT_SAVINGS:
      newState.currentSavings = action.currentSavings
      break;
    default:
      return state
  }
  return newState
}
