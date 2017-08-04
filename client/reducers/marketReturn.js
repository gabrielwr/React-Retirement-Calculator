
/* ------------   INITIAL STATE     ------------------ */
const initialState = '4'

/* -----------------    ACTION TYPES     ------------------ */
const ADD_MARKET_RETURN = 'ADD_MARKET_RETURN';

/* ------------  SYNC ACTION CREATORS     ------------------ */
export const marketReturn = marketReturn => ({ type: ADD_MARKET_RETURN, marketReturn });

/* ------------       REDUCER    ------------------ */
export default ( state = initialState, action ) => {
  const newState = Object.assign( {}, state )
  switch( action.type ) {
    case ADD_MARKET_RETURN:
      newState.marketReturn = action.marketReturn
      break;
    default:
      return state
  }
  return newState
}
