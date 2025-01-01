
import { createStore, applyMiddleware, compose } from "redux";

import rootReducer from "./modules/reducers";

import { thunk } from "redux-thunk";

export default createStore(
  rootReducer, 
  compose(applyMiddleware(thunk), 
  window.__REDUX_DEVTOOLS_EXTENSION__ && process.env.NODE_ENV === "development" ?
  (window.__REDUX_DEVTOOLS_EXTENSION__()) : (compose)
));
