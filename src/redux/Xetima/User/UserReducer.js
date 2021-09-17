import {
  GET_ALL_USERS,
  GET_ALL_USERS_SUCCESS,
  GET_ALL_USERS_FAIL,
  SELECT_ONE_USER,
  SELECT_ONE_USER_SUCCESS,
  SELECT_ONE_USER_FAIL,
  DELETE_USER,
  DELETE_USER_SUCCESS,
  DELETE_USER_FAIL,
  RESET_USERS_STATE,
  EDIT_USER,
  EDIT_USER_SUCCESS,
  EDIT_USER_FAIL,
    REVERSE_DELETE_USER,REVERSE_DELETE_USER_SUCCESS,REVERSE_DELETE_USER_FAIL
} from "./UserTypes";

const initialState = {
  message: "",
  loading: false,
  delete_loading: false,
  allUsers: [],
  singleUser: {},
  error: false,
  success: false,
    government_id_back:null,
    government_id_front:null,
    faceUploads:null
};

const UserReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_USERS:
      return {
        ...state,
        message: action.message,
        loading: true,
        error: false,
        success: false,
      };
    case GET_ALL_USERS_SUCCESS:
      return {
        ...state,
        message: action.message,
        loading: false,
        allUsers: action.payload,
          government_id_back:action.government_id_back,
          government_id_front:action.government_id_front,
          faceUploads:action.faceUploads,
        error: false,
        success: true,
      };
    case GET_ALL_USERS_FAIL:
      return {
        ...state,
        message: action.message,
        loading: false,
        error: true,
        success: false,
      };
    case SELECT_ONE_USER:
      return {
        ...state,
        message: action.message,
        loading: true,
        error: false,
        success: false,
      };
    case SELECT_ONE_USER_SUCCESS:
      return {
        ...state,
        message: action.message,
        loading: false,
        singleUser: action.payload,
        error: false,
        success: true,
      };
    case SELECT_ONE_USER_FAIL:
      return {
        ...state,
        message: action.message,
        loading: false,
        error: true,
        success: false,
      };
    case DELETE_USER:
      return {
        ...state,
        message: action.message,
        loading: false,
        delete_loading: true,
        error: false,
        success: false,
      };
    case DELETE_USER_SUCCESS:
      return {
        ...state,
        message: action.message,
        loading: false,
        allUsers: action.payload,
        delete_loading: false,
        error: false,
        success: true,
      };
    case DELETE_USER_FAIL:
      return {
        ...state,
        message: action.message,
        delete_loading: false,
        loading: false,
        error: true,
        success: false,
      };
    case RESET_USERS_STATE:
      return {
        ...state,
        message: "",
        loading: false,
        delete_loading: false,
        allUsers: [],
        singleUser: {},
        error: false,
        success: false,
      };

    case EDIT_USER:
      return {
        ...state,
        message: action.message,
        loading: true,
        error: false,
        success: false,
      };
    case EDIT_USER_SUCCESS:
      return {
        ...state,
        message: action.message,
        loading: false,
        allUsers:action.payload,
        error: false,
        success: true,
      };
    case EDIT_USER_FAIL:
      return {
        ...state,
        message: action.message,
        loading: false,
        error: true,
        success: false,
      };
      case REVERSE_DELETE_USER:
          return {
              ...state,
              message:action.message,
              delete_loading: true,
              error: false,
              success: false,
          };
      case REVERSE_DELETE_USER_SUCCESS:
          return {
              ...state,
              message:action.message,
              delete_loading: false,
              allUsers: action.payload,
              error: false,
              success: true,
          };
      case REVERSE_DELETE_USER_FAIL:
          return {
              ...state,
              message:action.message,
              delete_loading: false,
              error: true,
              success: false,
          };
    default:
      return state;
  }
};

export default UserReducer;
