import { combineReducers } from "redux";
import UserRegistrationReducer from "./Xetima/Register/RegisterReducers";
import UserLoginReducer from './Xetima/Login/LoginReducers';
import ForgotPasswordReducers from './Xetima/ForgotPassword/ForgotPasswordReducers';
import ModalReducer from "./Xetima/DynamicModal/ModalReducers";
import TwoFactorDeactivationReducer from './Xetima/TwoFactorDeactivation/TwoFactorDeactivationReducers';


const rootReducer = combineReducers({
  registration: UserRegistrationReducer,
  login:UserLoginReducer,
  forgotpassword:ForgotPasswordReducers,
  display_modal:ModalReducer,
  TwoFactorDeactivationState:TwoFactorDeactivationReducer
});

export default rootReducer;
