import {
  // GET_USER_PROFILE,
  // GET_USER_PROFILE_SUCCESS,
  // GET_USER_PROFILE_FAIL,
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
    // case GET_USER_PROFILE:
    //   return {
    //     ...state,
    //     user_data: [],
    //     message: action.message,
    //     get_user_profile: true,
    //     edit_profile: false,
    //     userData: {},
    //     editedUserData: null,
    //     loading: true,
    //     error: false,
    //     success: false,
    //   };
    // case GET_USER_PROFILE_SUCCESS:
    //   return {
    //     ...state,
    //     user_data: [],
    //     message: action.message,
    //     get_user_profile: true,
    //     edit_profile: false,
    //     userData: action.payload,
    //     editedUserData: null,
    //     loading: true,
    //     error: false,
    //     success: true,
    //   };
    // case GET_USER_PROFILE_FAIL:
    //   return {
    //     ...state,
    //     message: action.message,
    //     get_user_profile: false,
    //     edit_profile: false,
    //     loading: false,
    //     error: true,
    //     success: false,
    //   };
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
