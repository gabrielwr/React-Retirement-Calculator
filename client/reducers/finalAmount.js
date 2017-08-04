
/* ------------   INITIAL STATE     ------------------ */
const initialState = '0'


/* -----------------    ACTION TYPES     ------------------ */
const ADD_FINAL_AMOUNT = 'ADD_FINAL_AMOUNT';

/* ------------  SYNC ACTION CREATORS     ------------------ */
export const finalAmount = finalAmount => ({ type: ADD_FINAL_AMOUNT, finalAmount });

/* ------------       REDUCER    ------------------ */
export default ( state = initialState, action ) => {
  const newState = Object.assign( {}, state )
  switch( action.type ) {
    case ADD_FINAL_AMOUNT:
      newState.finalAmount = action.finalAmount
      break;
    default:
      return state
  }
  return newState
}
