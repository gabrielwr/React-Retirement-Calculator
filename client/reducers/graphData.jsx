
/* ------------   INITIAL STATE     ------------------ */
const initialState = []

/* -----------------    ACTION TYPES     ------------------ */
const ADD_GRAPH_DATA = 'ADD_GRAPH_DATA';

/* ------------  SYNC ACTION CREATORS     ------------------ */
export const addGraphData = graphData => ({ type: ADD_GRAPH_DATA, graphData });

/* ------------       REDUCER    ------------------ */
export default ( state = initialState, action ) => {
  switch( action.type ) {
    case ADD_GRAPH_DATA:
      return action.graphData
    default:
      return state
  }
}
