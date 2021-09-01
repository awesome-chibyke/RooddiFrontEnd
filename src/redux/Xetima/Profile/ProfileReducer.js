import {
  UPDATE_PROFILE,
  UPDATE_PROFILE_SUCCESS,
  UPDATE_PROFILE_FAIL,
  RESET_PROFILE_STATE
} from "./ProfileTypes";

const initialState = {
  message: "",
  loading: false,
  error: false,
  success: false,
};

const ProfileReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_PROFILE:
      return {
        ...state,
        message: action.message,
        loading: true,
        error: false,
        success: false,
      };
    case UPDATE_PROFILE_SUCCESS:
      return {
        ...state,
        message: action.message,
        loading: false,
        error: false,
        success: true,
      };
    case UPDATE_PROFILE_FAIL:
      return {
        ...state,
        message: action.message,
        loading: false,
        error: true,
        success: false,
      };

    case RESET_PROFILE_STATE:
      return {
        ...state,
        message: "",
        loading: false,
        error: false,
        success: false
      }

    default:
      return state;
  }
};

export default ProfileReducer;
