
/* ------------   INITIAL STATE     ------------------ */
const initialState = '0'

/* -----------------    ACTION TYPES     ------------------ */
const ADD_RETIRE_AMT = 'ADD_RETIRE_AMT';

/* ------------  SYNC ACTION CREATORS     ------------------ */
export const retireAmt = retireAmt => ({ type: ADD_RETIRE_AMT, retireAmt });

/* ------------       REDUCER    ------------------ */
export default ( state = initialState, action ) => {
  const newState = Object.assign( {}, state )
  switch( action.type ) {
    case ADD_RETIRE_AMT:
      newState.retireAmt = action.retireAmt
      break;
    default:
      return state
  }
  return newState
}
