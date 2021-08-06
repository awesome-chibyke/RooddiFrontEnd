import { combineReducers } from "redux";
import UserRegistrationReducer from "./Xetima/Register/RegisterReducers";
import UserLoginReducer from './Xetima/Login/LoginReducers';
import ForgotPasswordReducers from './Xetima/ForgotPassword/ForgotPasswordReducers';


const rootReducer = combineReducers({
  registration: UserRegistrationReducer,
  login:UserLoginReducer,
  forgotpassword:ForgotPasswordReducers
});

export default rootReducer;
