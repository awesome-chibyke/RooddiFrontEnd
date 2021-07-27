import { applyMiddleware, createStore } from "redux";
//import logger from "redux-logger";
import thunk from "redux-thunk";
import rootReducer from "./combineReducers";
import { composeWithDevTools } from "redux-devtools-extension";

//const store = createStore(rootReducer, applyMiddleware(logger));


const userInfoFromStorage = localStorage.getItem("userData")
  ? JSON.parse(localStorage.getItem("userData"))
  : null;

  const initialState = {
    userLogin: { userData: userInfoFromStorage },
  };

const store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(
    applyMiddleware(thunk)
    // other store enhancers if any
  )
);

export default store;
