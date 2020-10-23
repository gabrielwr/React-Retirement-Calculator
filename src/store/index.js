import { createStore, applyMiddleware } from "redux";
import { createLogger } from "redux-logger";

import rootReducer from "../reducers/";

const store = createStore(rootReducer, applyMiddleware(createLogger()));

export default store;
