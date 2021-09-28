import {
    UPDATE_SETTINGS,
    UPDATE_SETTINGS_SUCCESS,
    UPDATE_SETTINGS_FAIL,
    RESET_SETTINGS_STATE
  } from "./SettingsType";

  const initialState = {
    message: "",
    loading: false,
    data:{},
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
          data:action.payload,
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
        case RESET_SETTINGS_STATE:
            return {
              ...state,
              message: "",
              loading: false,
              data:{},
              error: false,
              success: false,
            };
      default:
        return state;
    }
  };
  
  export default SettingsReducer;
  
  