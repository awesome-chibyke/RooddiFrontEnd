import {
    GET_ALL_TYPE_OF_USER,
    GET_ALL_TYPE_OF_USER_SUCCESS,
    GET_ALL_TYPE_OF_USER_FAIL,
    ADD_NEW_TYPE_OF_USER,
    ADD_NEW_TYPE_OF_USER_SUCCESS,
    ADD_NEW_TYPE_OF_USER_FAIL,
    RESET_TYPE_OF_USER_STATE
} from "./TypeOfUserTypes"

const initialState = {
    message: "",
    loading: false,
    allTypeOfUser: [],
    error: false,
    success: false,
  };

  const TypeOfUserReducer = (state = initialState, action) => {
    switch (action.type) {
      case GET_ALL_TYPE_OF_USER:
        return {
          ...state,
          message: action.message,
          loading: true,
          error: false,
          success: false,
        };
      case GET_ALL_TYPE_OF_USER_SUCCESS:
        return {
          ...state,
          message: action.message,
          loading: false,
          allTypeOfUser: action.payload,
          error: false,
          success: true,
        };
      case GET_ALL_TYPE_OF_USER_FAIL:
        return {
          ...state,
          message: action.message,
          loading: false,
          error: true,
          success: false,
        };
  
      case ADD_NEW_TYPE_OF_USER:
        return {
          ...state,
          message: action.message,
          loading: true,
          error: false,
          success: false,
        };
      case ADD_NEW_TYPE_OF_USER_SUCCESS:
        return {
          ...state,
          message: action.message,
          loading: false,
          allTypeOfUser: action.payload,
          error: false,
          success: true,
        };
      case ADD_NEW_TYPE_OF_USER_FAIL:
        return {
          ...state,
          message: action.message,
          loading: false,
          error: true,
          success: false,
        };
      case RESET_TYPE_OF_USER_STATE:
        return {
          ...state,
          message: "",
          loading: false,
          allTypeOfUser: [],
          error: false,
          success: false,
        };
  
      default:
        return state;
    }
  };
  
  export default TypeOfUserReducer;