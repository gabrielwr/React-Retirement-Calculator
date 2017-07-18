
//INITIAL STATE
const initialState = {
  scenarios: 1
}

// ACTION TYPES
const ADD_SCENARIO = 'ADD_SCENARIO';
const DELETE_SCENARIO = 'DELETE_SCENARIO';


// SYNC ACTION CREATORS
export const addScenario = scenarios => ({type: ADD_SCENARIO, scenarios});
export const deleteScenario = scenarios => ({type: DELETE_SCENARIO, scenarios})

// REDUCER
export default (state = initialState, action) => {
  const newState = Object.assign({}, state)

  switch(action.type) {
    case ADD_SCENARIO:
      newState.scenarios = ++action.scenarios
      break;
    case DELETE_SCENARIO:
       newState.scenarios = --action.scenarios
       break;
    default:
      return state
  }

  return newState
}
