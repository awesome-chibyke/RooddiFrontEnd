import {
  SAVE_PHONE_NUMBER_VERIFY,
  SAVE_PHONE_NUMBER_VERIFY_SUCCESS,
  SAVE_PHONE_NUMBER_VERIFY_FAIL,
  RESEND_PHONE_VERIFICATION_CODE,
  RESEND_PHONE_VERIFICATION_CODE_SUCCESS,
  RESEND_PHONE_VERIFICATION_CODE_FAIL,
  VALIDATE_PHONE_NUMBER,
  VALIDATE_PHONE_NUMBER_SUCCESS,
  VALIDATE_PHONE_NUMBER_FAIL,
  RESET_PHONE_STATE
} from "./PhoneVerificationTypes";

const initialState = {
  message: "",
  loading: false,
  error: false,
  success: false,
  resend_code_loading: false,
  phone: {},
};

const phoneVerificationReducer = (state = initialState, action) => {
  switch (action.type) {
    case SAVE_PHONE_NUMBER_VERIFY:
      return {
        ...state,
        message: action.message,
        loading: true,
        error: false,
        success: false,
      };
    case SAVE_PHONE_NUMBER_VERIFY_SUCCESS:
      return {
        ...state,
        message: action.message,
        loading: false,
        error: false,
        success: true,
        phone: action.payload,
      };
    case SAVE_PHONE_NUMBER_VERIFY_FAIL:
      return {
        ...state,
        message: action.message,
        loading: false,
        error: true,
        success: false,
      };
    case VALIDATE_PHONE_NUMBER:
      return {
        ...state,

        message: action.message,
        loading: true,
        error: false,
        success: false,
      };
    case VALIDATE_PHONE_NUMBER_SUCCESS:
      return {
        ...state,
        message: action.message,
        loading: false,
        error: false,
        success: true,
      };
    case VALIDATE_PHONE_NUMBER_FAIL:
      return {
        ...state,
        message: action.message,
        loading: false,
        error: true,
        success: false,
      };
    case RESEND_PHONE_VERIFICATION_CODE:
      return {
        ...state,
        message: action.message,
        loading: false,
        error: false,
        success: false,
        resend_code_loading: true,
      };
    case RESEND_PHONE_VERIFICATION_CODE_SUCCESS:
      return {
        ...state,
        message: action.message,
        loading: false,
        error: false,
        success: true,
        resend_code_loading: false,
        phone: {},
      };
    case RESEND_PHONE_VERIFICATION_CODE_FAIL:
      return {
        ...state,
        message: action.message,
        loading: false,
        error: true,
        success: false,
        resend_code_loading: false,
        phone: {},
      };

      case RESET_PHONE_STATE:
        return {
          ...state,
          message: "",
          loading: false,
          error: false,
          success: false,
          resend_code_loading: false,
          phone: {},
        };

    default:
      return state;
  }
};

export default phoneVerificationReducer;
