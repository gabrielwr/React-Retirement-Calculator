
/* ------------   INITIAL STATE     ------------------ */
const initialState = '26'

/* -----------------    ACTION TYPES     ------------------ */
const ADD_CURRENT_AGE = 'ADD_CURRENT_AGE';

/* ------------  SYNC ACTION CREATORS     ------------------ */
export const addCurrentAge = currentAge => ({ type: ADD_CURRENT_AGE, currentAge });

/* ------------       REDUCER    ------------------ */
export default ( state = initialState, action ) => {
  switch( action.type ) {
    case ADD_CURRENT_AGE:
      return action.currentAge
    default:
      return state
  }
}
