import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import logger from "redux-logger";
import { composeWithDevTools } from "redux-devtools-extension";
import cardReducer from "./reducer/cardReducer";

const store = createStore(
  cardReducer,
  composeWithDevTools(applyMiddleware(logger, thunk))
);

export default store;
