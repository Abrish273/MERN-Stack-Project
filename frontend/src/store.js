import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { userLoginReducer } from "./reducers/userReducers";

const reducer = combineReducers({
  //this will contain all reducers

  userLogin: userLoginReducer,
});

const initialState = {};

const middleware = [thunk];

const store = createStore(
  reducer,
  middleware,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
