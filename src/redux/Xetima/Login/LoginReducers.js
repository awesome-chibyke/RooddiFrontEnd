/* eslint-disable no-unused-vars */
import { LOGIN, LOGIN_SUCCESS, LOGIN_FAILURE, UPDATE_LOGIN_SUCCESS, USER_LOGOUT, USER_LOGOUT_SUCCESS, USER_LOGOUT_FAILURE, CHANGE_AUTHENTICATION_STATUS, AUTHENTICATION,
    AUTHENTICATION_SUCCESS,
    AUTHENTICATION_FAILURE,
    RESEND_AUTHENTICATION_CODE_FAILURE,
    RESEND_AUTHENTICATION_CODE,
    RESEND_AUTHENTICATION_AUTHENTICATION_CODE_SUCCESS,
    REMOVE_MESSAGE,
    LOGOUT_AUTH_DISABLE } from "./LoginActionTypes";//

const initialState = {
    user_data: [],
    message:'',
    message_type:'normal',
    loading:false,
    error_message:false,
    logout_error:false,
    logout_success:false,
    success_message:false,
    isLogged:false,
    logout_loading:false,
    resend_code_loading:false
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
                message_type:action.message_type,
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
                logout_success:true,
                isLogged:false
            }
        case AUTHENTICATION:
            return {
                ...state,
                loading:true,
                logout_loading:false,
                error_message:false,
                success_message:false,
                message:action.message,
                logout_error:false,
                logout_success:false,
                isLogged:false
            }
        case AUTHENTICATION_SUCCESS:
            return {
                ...state,
                user_data:action.payload,
                loading:false,
                logout_loading:false,
                error_message:false,
                success_message:true,
                isLogged:true,
                message:action.message,
                logout_error:false,
                logout_success:false,
            }
        case AUTHENTICATION_FAILURE:
            return {
                ...state,
                loading:false,
                logout_loading:false,
                error_message:true,
                success_message:false,
                message:action.message,
                logout_error:false,
                logout_success:false,
                isLogged:false
            }
        case RESEND_AUTHENTICATION_CODE:
            return {
                ...state,
                loading:false,
                resend_code_loading:true,
                logout_loading:false,
                error_message:false,
                success_message:false,
                message:action.message,
                logout_error:false,
                logout_success:false,
                isLogged:false
            }
        case RESEND_AUTHENTICATION_CODE_FAILURE:
            return {
                ...state,
                loading:false,
                resend_code_loading:false,
                logout_loading:false,
                error_message:true,
                success_message:false,
                message:action.message,
                logout_error:false,
                logout_success:false,
                isLogged:false
            }
        case RESEND_AUTHENTICATION_AUTHENTICATION_CODE_SUCCESS:
            return {
                ...state,
                user_data:action.payload,
                loading:false,
                resend_code_loading:false,
                logout_loading:false,
                error_message:false,
                success_message:true,
                message:action.message,
                logout_error:false,
                logout_success:false,
            }
        case CHANGE_AUTHENTICATION_STATUS:
            return {
                ...state,
                success_message:false,
            }
        case REMOVE_MESSAGE:
            return {
                ...state,
                message:'',
                message_type:'normal',
                loading:false,
                error_message:false,
                logout_error:false,
                logout_success:false,
                success_message:false,
                isLogged:false,
                logout_loading:false,
                resend_code_loading:false
            }
        default:
            return state;
    }
};

export default UserLoginReducer;