import {
  applyMiddleware,
  combineReducers,
  compose,
  legacy_createStore,
} from "redux";
import { reducer as AuthReducer } from "./AuthReducer/reducer";
import { reducer as AdminReducer } from "./AdminReducer/reducer";
import thunk from "redux-thunk";

const composeEnhancers = window._REDUX_DEVTOOLS_EXTENTION_COMPOSE_ || compose;

const rootReducer = combineReducers({ AuthReducer,AdminReducer });

export const store = legacy_createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);
