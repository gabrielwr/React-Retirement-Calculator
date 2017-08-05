
/* ------------   INITIAL STATE     ------------------ */
const initialState = '4'

/* -----------------    ACTION TYPES     ------------------ */
const ADD_MARKET_RETURN = 'ADD_MARKET_RETURN';

/* ------------  SYNC ACTION CREATORS     ------------------ */
export const addMarketReturn = marketReturn => ({ type: ADD_MARKET_RETURN, marketReturn });

/* ------------       REDUCER    ------------------ */
export default ( state = initialState, action ) => {
  switch( action.type ) {
    case ADD_MARKET_RETURN:
      return action.marketReturn
    default:
      return state
  }
}
