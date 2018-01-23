
/* ------------   INITIAL STATE     ------------------ */
const initialState = '20'

/* -----------------    ACTION TYPES     ------------------ */
const ADD_SAVINGS = 'ADD_SAVINGS';

/* ------------  SYNC ACTION CREATORS     ------------------ */
export const addSavings = savings => ({ type: ADD_SAVINGS, savings });

/* ------------       REDUCER    ------------------ */
export default ( state = initialState, action ) => {
  switch( action.type ) {
    case ADD_SAVINGS:
      return action.savings;
    default:
      return state;
  }
}
