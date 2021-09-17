import {
  GET_ALL_ROLES,
  GET_ALL_ROLES_SUCCESS,
  GET_ALL_ROLES_FAIL,
  ADD_NEW_ROLES,
  ADD_NEW_ROLES_SUCCESS,
  ADD_NEW_ROLES_FAIL,
} from "./RolesType";

const initialState = {
  message: "",
  loading: false,
  allRoles: [],
  error: false,
  success: false,
};

const RolesReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_ROLES:
      return {
        ...state,
        message: action.message,
        loading: true,
        error: false,
        success: false,
      };
    case GET_ALL_ROLES_SUCCESS:
      return {
        ...state,
        message: action.message,
        loading: false,
        allRoles: action.payload,
        error: false,
        success: true,
      };
    case GET_ALL_ROLES_FAIL:
      return {
        ...state,
        message: action.message,
        loading: false,
        error: true,
        success: false,
      };

    case ADD_NEW_ROLES:
      return {
        ...state,
        message: action.message,
        loading: true,
        error: false,
        success: false,
      };
    case ADD_NEW_ROLES_SUCCESS:
      return {
        ...state,
        message: action.message,
        loading: false,
        allRoles: action.payload,
        error: false,
        success: true,
      };
    case ADD_NEW_ROLES_FAIL:
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

export default RolesReducer;
