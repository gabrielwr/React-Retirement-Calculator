
/* ------------   INITIAL STATE     ------------------ */
const initialState = '0'

/* -----------------    ACTION TYPES     ------------------ */
const ADD_FINAL_AMT = 'ADD_FINAL_AMT';

/* ------------  SYNC ACTION CREATORS     ------------------ */
export const addFinalAmt = finalAmount => ({ type: ADD_FINAL_AMT, finalAmount });

/* ------------       REDUCER    ------------------ */
export default ( state = initialState, action ) => {
  switch( action.type ) {
    case ADD_FINAL_AMT:
      return action.finalAmount
    default:
      return state
  }
}
