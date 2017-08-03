
/* ------------   INITIAL STATE     ------------------ */
const initialState = {
  retireSpending: '40000'
}

/* -----------------    ACTION TYPES     ------------------ */
const ADD_RETIRE_SPENDING = 'ADD_RETIRE_SPENDING';

/* ------------  SYNC ACTION CREATORS     ------------------ */
export const retireSpending = retireSpending => ({ type: ADD_RETIRE_SPENDING, retireSpending });

/* ------------       REDUCER    ------------------ */
export default ( state = initialState, action ) => {
  const newState = Object.assign( {}, state )
  switch( action.type ) {
    case ADD_RETIRE_SPENDING:
      newState.retireSpending = action.retireSpending
      break;
    default:
      return state
  }
  return newState
}
