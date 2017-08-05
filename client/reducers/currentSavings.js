
/* ------------   INITIAL STATE     ------------------ */
const initialState = '0'

/* -----------------    ACTION TYPES     ------------------ */
const ADD_CURRENT_SAVINGS = 'ADD_CURRENT_SAVINGS';

/* ------------  SYNC ACTION CREATORS     ------------------ */
export const addCurrentSavings = currentSavings => ({ type: ADD_CURRENT_SAVINGS, currentSavings });

/* ------------       REDUCER    ------------------ */
export default ( state = initialState, action ) => {
  switch( action.type ) {
    case ADD_CURRENT_SAVINGS:
      return action.currentSavings
    default:
      return state
  }
}
