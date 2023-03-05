import {
  applyMiddleware,
  compose,
  legacy_createStore,
  combineReducers,
} from "redux";
import { reducer as AuthReducer } from "./AuthReducer/reducer";
import { reducer as ProductReducer } from "./ProductReducer/reducer";
import { reducer as AdminReducer } from "./AdminReducer/reducer";
import { reducer as CartReducer } from "./CartReducer/reducer";
import { reducer as UserReducer } from "./UserReducer/reducer";
import thunk from "redux-thunk";

const composeEnhancers = window._REDUX_DEVTOOLS_EXTENTION_COMPOSE_ || compose;

const rootReducer = combineReducers({
  AuthReducer,
  ProductReducer,
  AdminReducer,
  CartReducer,
  UserReducer,
});

export const store = legacy_createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);
