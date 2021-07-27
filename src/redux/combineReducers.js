import { combineReducers } from "redux";
import UserRegistrationReducer from "./Xetima/Register/RegisterReducers";
import ActivationReducer from "./Xetima/Activation/ActivationReducers";
import UserLoginReducer from './Xetima/Login/LoginReducers'

const rootReducer = combineReducers({
  registration: UserRegistrationReducer,
  activation: ActivationReducer,
  login:UserLoginReducer,
});

export default rootReducer;
