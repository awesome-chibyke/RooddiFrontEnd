import {
  AUTHENTICATION,
  AUTHENTICATION_SUCCESS,
  AUTHENTICATION_FAILURE,
  RESEND_AUTHENTICATION_CODE_FAILURE,
  RESEND_AUTHENTICATION_CODE,
  RESEND_AUTHENTICATION_AUTHENTICATION_CODE_SUCCESS,
} from "./AuthActionTypes";

const initialState = {
  user_data: [],
  message: "",
  loading: false,
  authentication_loading: false,
  error: false,
  success: false,
};

const AuthenticationReducer = (state = initialState, action) => {
  switch (action.type) {
    case AUTHENTICATION:
      return {
        ...state,
        user_data: [],
        message: action.message,
        loading: false,
        authentication_loading: true,
        error: false,
        success: false,
      };
    case AUTHENTICATION_SUCCESS:
      return {
        ...state,
        user_data: action.payload,
        message: action.message,
        loading: false,
        authentication_loading: false,
        error: false,
        success: true,
      };
    case AUTHENTICATION_FAILURE:
      return {
        ...state,
        loading: false,
        authentication_loading: false,
        error: true,
        success: false,
        message: action.message,
      };
    case RESEND_AUTHENTICATION_CODE:
      return {
        ...state,
        loading: true,
        success: false,
        error: false,
        message: action.message,
      };
    case RESEND_AUTHENTICATION_AUTHENTICATION_CODE_SUCCESS:
      return {
        ...state,
        user_data: action.payload,
        success: true,
        message: action.message,
        error: false,
        loading: false,
      };
    case RESEND_AUTHENTICATION_CODE_FAILURE:
      return {
        ...state,
        loading: false,
        error: true,
        success: false,
        message: action.message,
      };
    default:
      return state;
  }
};

export default AuthenticationReducer;
