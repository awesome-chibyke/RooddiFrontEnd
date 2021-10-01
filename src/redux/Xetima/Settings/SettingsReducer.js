import {
    UPDATE_SETTINGS,
    UPDATE_SETTINGS_SUCCESS,
    UPDATE_SETTINGS_FAIL,
    RESET_SETTINGS_STATE,
    GET_SETTINGS,
    GET_SETTINGS_SUCCESS,
    GET_SETTINGS_FAIL
  } from "./SettingsType";

  const initialState = {
    message: "",
    loading: false,
    allSettings:{},
    error: false,
    success: false,
  };
  
  const SettingsReducer = (state = initialState, action) => {
    switch (action.type) {
      case UPDATE_SETTINGS:
        return {
          ...state,
          message: action.message,
          loading: true,
          error: false,
          success: false,
        };
      case UPDATE_SETTINGS_SUCCESS:
        return {
          ...state,
          message: action.message,
          loading: false,
          allSettings:action.payload,
          error: false,
          success: true,
        };
      case UPDATE_SETTINGS_FAIL:
        return {
          ...state,
          message: action.message,
          loading: false,
          error: true,
          success: false,
        };
      case GET_SETTINGS:
        return {
          ...state,
          message: action.message,
          loading: true,
          error: false,
          success: false,
        };
      case GET_SETTINGS_SUCCESS:
        return {
          ...state,
          message: action.message,
          loading: false,
          allSettings:action.payload,
          error: false,
          success: true,
        };
      case GET_SETTINGS_FAIL:
        return {
          ...state,
          message: action.message,
          loading: false,
          error: true,
          success: false,
        };
        case RESET_SETTINGS_STATE:
            return {
              ...state,
              message: "",
              loading: false,
              allSettings:{},
              error: false,
              success: false,
            };
      default:
        return state;
    }
  };
  
  export default SettingsReducer;
  
  