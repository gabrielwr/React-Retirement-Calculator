/* ------------   INITIAL STATE     ------------------ */
const initialState = '80'

/* -----------------    ACTION TYPES     ------------------ */
const ADD_LIFESPAN = 'ADD_LIFESPAN';

/* ------------  SYNC ACTION CREATORS     ------------------ */
export const addLifespan = lifespan => ({ type: ADD_LIFESPAN, lifespan });

/* ------------       REDUCER    ------------------ */
export default ( state = initialState, action ) => {
  const newState = Object.assign( {}, state )
  switch( action.type ) {
    case ADD_LIFESPAN:
      newState.lifespan = action.lifespan
      break;
    default:
      return state
  }
  return newState
}
