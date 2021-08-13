import { combineReducers } from "redux";
import UserRegistrationReducer from "./Xetima/Register/RegisterReducers";
import UserLoginReducer from './Xetima/Login/LoginReducers';
import ForgotPasswordReducers from './Xetima/ForgotPassword/ForgotPasswordReducers';
import GetCurrencyReducer from "./Xetima/Currency/CurrencyReducer";

import ModalReducer from "./Xetima/DynamicModal/ModalReducers";


const rootReducer = combineReducers({
  registration: UserRegistrationReducer,
  login:UserLoginReducer,
  forgotpassword:ForgotPasswordReducers,
  getCurrency:GetCurrencyReducer,
  display_modal:ModalReducer
});

export default rootReducer;
