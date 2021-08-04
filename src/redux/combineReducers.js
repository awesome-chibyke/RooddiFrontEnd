import { combineReducers } from "redux";
import UserRegistrationReducer from "./Xetima/Register/RegisterReducers";
import ActivationReducer from "./Xetima/Activation/ActivationReducers";
import UserLoginReducer from './Xetima/Login/LoginReducers'
import AuthReducers from './Xetima/LoginAuth/AuthReducers'
import ForgotPasswordReducers from './Xetima/ForgotPassword/ForgotPasswordReducers'


const rootReducer = combineReducers({
  registration: UserRegistrationReducer,
  activation: ActivationReducer,
  login:UserLoginReducer,
  authentication:AuthReducers,
  forgotpassword:ForgotPasswordReducers
});

export default rootReducer;
