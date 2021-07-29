import {
  ACTIVATION,
  ACTIVATION_SUCCESS,
  ACTIVATION_FAILURE,
  RESEND_ACTIVATION_CODE_FAILURE,
  RESEND_ACTIVATION_CODE,
  RESEND_ACTIVATION_ACTIVATION_CODE_SUCCESS,
  LOGOUT_ACTIVATION_DISABLE
} from "./ActivationActionTypes";

const initialState = {
  user_data: [],
  message: "",
  loading: false,
  resend_loading:false,
  error: false,
  success: false,
  isLogged:false
};

const ActivationReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTIVATION:
      return {
        ...state,
        user_data: [],
        message: action.message,
        loading: true,
        resend_loading:false,
        error: false,
        success: false,
        isLogged:false
      };
    case ACTIVATION_SUCCESS:
      return {
        ...state,
        user_data: action.payload,
        message: action.message,
        loading: false,
        resend_loading:false,
        error: false,
        success: true,
        isLogged:true
      };
    case ACTIVATION_FAILURE:
      return {
        ...state,
        loading: false,
        resend_loading:false,
        error: true,
        success: false,
        message: action.message,
        isLogged:false
      };
    case RESEND_ACTIVATION_CODE:
      return {
        ...state,
        loading: false,
        resend_loading:true,
        success: false,
        error: false,
        message: action.message,
        isLogged:false
      };
    case RESEND_ACTIVATION_ACTIVATION_CODE_SUCCESS:
      return {
        ...state,
        user_data: action.payload,
        success: true,
        message: action.message,
        error: false,
        loading: false,
        resend_loading:false,
        isLogged:false
      };
    case RESEND_ACTIVATION_CODE_FAILURE:
      return {
        ...state,
        loading: false,
        resend_loading:false,
        error: true,
        success: false,
        message: action.message,
        isLogged:false
      };
    case LOGOUT_ACTIVATION_DISABLE:
      return {
        ...state,
        loading: false,
        resend_loading:false,
        error: false,
        success: false,
        message: '',
        isLogged:false
      };
    default:
      return state;
  }
};

export default ActivationReducer;
