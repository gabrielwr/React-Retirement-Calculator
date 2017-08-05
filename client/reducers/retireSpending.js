
/* ------------   INITIAL STATE     ------------------ */
const initialState = '40000'

/* -----------------    ACTION TYPES     ------------------ */
const ADD_RETIRE_SPENDING = 'ADD_RETIRE_SPENDING';

/* ------------  SYNC ACTION CREATORS     ------------------ */
export const addRetireSpending = retireSpending => ({ type: ADD_RETIRE_SPENDING, retireSpending });

/* ------------       REDUCER    ------------------ */
export default ( state = initialState, action ) => {
  switch( action.type ) {
    case ADD_RETIRE_SPENDING:
      return action.retireSpending
    default:
      return state
  }
}
