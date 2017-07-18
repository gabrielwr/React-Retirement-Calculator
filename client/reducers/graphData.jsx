
//INITIAL STATE
const initialState = {
  graphData: []
}

// ACTION TYPES
const ADD_GRAPH_DATA = 'ADD_GRAPH_DATA';
const DELETE_GRAPH_DATA = 'DELETE_GRAPH_DATA';


// SYNC ACTION CREATORS
export const addGraphData = graphData => ({type: ADD_GRAPH_DATA, graphData});
export const deleteGraphData = graphData => ({type: DELETE_GRAPH_DATA, graphData})

// REDUCER
export default (state = initialState, action) => {
  const newState = Object.assign({}, state)
  switch(action.type) {
    case ADD_GRAPH_DATA:
      newState.graphData.push(action.graphData)
      break;
    // case DELETE_GRAPH_DATA:
    //   newState.graphData = scenarios: action.scenarios-1}
    default:
      return state
  }
  return newState
}
