
/* ------------   INITIAL STATE     ------------------ */
const initialState = '0'

/* -----------------    ACTION TYPES     ------------------ */
const ADD_RETIRE_AMT = 'ADD_RETIRE_AMT';

/* ------------  SYNC ACTION CREATORS     ------------------ */
export const addRetireAmt = retireAmt => ({ type: ADD_RETIRE_AMT, retireAmt });

/* ------------       REDUCER    ------------------ */
export default ( state = initialState, action ) => {
  switch( action.type ) {
    case ADD_RETIRE_AMT:
      return action.retireAmt
    default:
      return state
  }
}
