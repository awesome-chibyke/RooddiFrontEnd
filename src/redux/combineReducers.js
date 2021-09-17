import { combineReducers } from "redux";
import UserRegistrationReducer from "./Xetima/Register/RegisterReducers";
import UserLoginReducer from './Xetima/Login/LoginReducers';
import ForgotPasswordReducers from './Xetima/ForgotPassword/ForgotPasswordReducers';
import GetCurrencyReducer from "./Xetima/Currency/CurrencyReducer";
import ActivtateTwoFactorReducer from "./Xetima/TwoFactor/TwoFactorReducer";
import ModalReducer from "./Xetima/DynamicModal/ModalReducers";
import TwoFactorDeactivationReducer from './Xetima/TwoFactorDeactivation/TwoFactorDeactivationReducers';
import TwoFactorDisableRequest from "./Xetima/TwoFactorDisableRequest/TwoFactorDisableRequestReducer"
import ProfileReducer from "./Xetima/Profile/ProfileReducer"
import phoneVerificationReducer from "./Xetima/PhoneVerification/PhoneVerificationReducer";
import IdUploadReducer from "./Xetima/IdentityUpload/IdentityUploadReducer";
import UserReducer from "./Xetima/User/UserReducer";
import RolesReducer from "./Xetima/Roles/RolesReducer";
import TypeOfUserReducer from "./Xetima/TypeOfUser/TypeOfUserReducer";


const rootReducer = combineReducers({
  registration: UserRegistrationReducer,
  login:UserLoginReducer,
  forgotpassword:ForgotPasswordReducers,
  display_modal:ModalReducer,
  TwoFactorDeactivationState:TwoFactorDeactivationReducer,
  getCurrency:GetCurrencyReducer,
  twofactor:ActivtateTwoFactorReducer,
  disable_two_factor:TwoFactorDisableRequest,
  profile:ProfileReducer,
  PhoneVerify:phoneVerificationReducer,
  idUpload:IdUploadReducer,
  user: UserReducer,
  roles:RolesReducer,
  typeOfUser:TypeOfUserReducer
});

export default rootReducer;
