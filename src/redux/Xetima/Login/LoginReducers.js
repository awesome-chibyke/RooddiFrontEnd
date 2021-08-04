import { LOGIN, LOGIN_SUCCESS, LOGIN_FAILURE, UPDATE_LOGIN_SUCCESS, USER_LOGOUT, USER_LOGOUT_SUCCESS, USER_LOGOUT_FAILURE } from "./LoginActionTypes";//

const initialState = {
    user_data: [],
    message:'',
    loading:false,
    error_message:false,
    logout_error:false,
    logout_success:false,
    success_message:false,
    isLogged:false,
    logout_loading:false
};

const UserLoginReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN:
            return {
                ...state,
                loading:true,
                success_message:false,
                error_message:false,
                message:action.message,
                isLogged:false,
                logout_error:false,
                logout_success:false,
            };
        case LOGIN_SUCCESS:
            return {
                ...state,
                user_data: action.payload,
                success_message:true,
                message:action.message,
                error_message:false,
                loading:false,
                isLogged:false,
                logout_error:false,
                logout_success:false,
            };
        case UPDATE_LOGIN_SUCCESS:
            return {
                ...state,
                user_data: action.payload,
                success_message:true,
                message:action.message,
                error_message:false,
                loading:false,
                isLogged:action.isLogged,
                logout_error:false,
                logout_success:false,
            };
        case LOGIN_FAILURE:
            return {
                ...state,
                loading:false,
                error_message:true,
                success_message:false,
                message:action.message,
                isLogged:false,
                logout_error:false,
                logout_success:false,
            };
        case USER_LOGOUT:
            return {
                ...state,
                loading:false,
                logout_loading:true,
                error_message:false,
                success_message:false,
                message:action.message,
                logout_error:false,
                logout_success:false,
            }
        case USER_LOGOUT_SUCCESS:
            return {
                ...state,
                loading:false,
                logout_loading:false,
                error_message:false,
                success_message:false,
                message:action.message,
                logout_error:false,
                logout_success:true,
                isLogged:false
            }
        case USER_LOGOUT_FAILURE:
            return {
                ...state,
                loading:false,
                logout_loading:false,
                error_message:false,
                success_message:false,
                message:action.message,
                logout_error:true,
                logout_success:false,
            }
        default:
            return state;
    }
};

export default UserLoginReducer;