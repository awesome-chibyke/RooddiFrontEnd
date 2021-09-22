import {
    MANAGE_USER,
    MANAGE_USER_SUCCESS,
    MANAGE_USER_FAIL,
  } from "./ManageUserTypes";
  
  const initialState = {
    message: "",
    loading: false,
    allUsers: [],
    error: false,
    success: false,
  };

  const ManageUserReducer = (state = initialState, action) => {
    switch (action.type) {
      case MANAGE_USER:
        return {
          ...state,
          message: action.message,
          loading: true,
          error: false,
          success: false,
        };
      case MANAGE_USER_SUCCESS:
        return {
          ...state,
          message: action.message,
          loading: false,
          allUsers: action.payload,
          error: false,
          success: true,
        };
      case MANAGE_USER_FAIL:
        return {
          ...state,
          message: action.message,
          loading: false,
          error: true,
          success: false,
        };
      default:
        return state;
    }
  };
  
  export default ManageUserReducer;