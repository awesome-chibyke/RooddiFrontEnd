import {
  ACTIVATION,
  ACTIVATION_SUCCESS,
  ACTIVATION_FAILURE,
  RESEND_ACTIVATION_CODE_FAILURE,
  RESEND_ACTIVATION_CODE,
  RESEND_ACTIVATION_ACTIVATION_CODE_SUCCESS,
} from "./ActivationActionTypes";

const initialState = {
  user_data: [],
  message: "",
  loading: false,
  activation_loading: false,
  error: false,
  success: false,
};

const ActivationReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTIVATION:
      return {
        ...state,
        user_data: [],
        message: action.message,
        loading: false,
        activation_loading: true,
        error: false,
        success: false,
      };
    case ACTIVATION_SUCCESS:
      return {
        ...state,
        user_data: action.payload,
        message: action.message,
        loading: false,
        activation_loading: false,
        error: false,
        success: true,
      };
    case ACTIVATION_FAILURE:
      return {
        ...state,
        loading: false,
        activation_loading: false,
        error: true,
        success: false,
        message: action.message,
      };
    case RESEND_ACTIVATION_CODE:
      return {
        ...state,
        loading: true,
        success: false,
        error: false,
        message: action.message,
      };
    case RESEND_ACTIVATION_ACTIVATION_CODE_SUCCESS:
      return {
        ...state,
        user_data: action.payload,
        success: true,
        message: action.message,
        error: false,
        loading: false,
      };
    case RESEND_ACTIVATION_CODE_FAILURE:
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

export default ActivationReducer;
