import { SEND_EMAIL,SEND_EMAIL_SUCCESS,SEND_EMAIL_FAILURE,VERIFY_EMAIL,VERIFY_EMAIL_SUCCESS,VERIFY_EMAIL_FAILURE,VERIFY_TOKEN,VERIFY_TOKEN_SUCCESS,VERIFY_TOKEN_FAILURE,CHANGE_PASSWORD,CHANGE_PASSWORD_SUCCESS,CHANGE_PASSWORD_FAILURE,RESET_PASSWORD_CHANGE_KEY } from "./ForgotPasswordActionTypes";//

const initialState = {
    user_data: [],
    message:null,
    send_forgot_email_loading:false,
    verify_token_loading:false,
    change_password_loading:false,

    error:false,
    success:false,

    initial_send_mail_status:false,
    verify_token_success:false,
    change_password_status:false,
};

const ForgotPasswordReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEND_EMAIL:
            return {
                ...state,
                user_data: [],
                message:action.message,
                send_forgot_email_loading:true,
                verify_token_loading:false,
                change_password_loading:false,

                error:false,
                success:false,
            };
        case SEND_EMAIL_SUCCESS:
            return {
                ...state,
                message:action.message,
                user_data: action.payload,
                send_forgot_email_loading:false,
                verify_token_loading:false,
                change_password_loading:false,

                error:false,
                success:true,
                initial_send_mail_status:true
            };
        case SEND_EMAIL_FAILURE:
            return {
                ...state,
                message:action.message,
                send_forgot_email_loading:false,
                verify_token_loading:false,
                change_password_loading:false,

                error:true,
                success:false,
            };
        case VERIFY_TOKEN:
            return {
                ...state,
                message:action.message,
                send_forgot_email_loading:false,
                verify_token_loading:true,
                change_password_loading:false,

                error:false,
                success:false,
            };
        case VERIFY_TOKEN_SUCCESS:
            return {
                ...state,
                message:action.message,
                user_data: action.payload,
                send_forgot_email_loading:false,
                verify_token_loading:false,
                change_password_loading:false,

                error:false,
                success:true,
                verify_token_success:true
            };
        case VERIFY_TOKEN_FAILURE:
            return {
                ...state,
                message:action.message,
                send_forgot_email_loading:false,
                verify_token_loading:false,
                change_password_loading:false,

                error:true,
                success:false,
            };//CHANGE_PASSWORD,CHANGE_PASSWORD_SUCCESS,CHANGE_PASSWORD_FAILURE
        case CHANGE_PASSWORD:
            return {
                ...state,
                message:action.message,
                send_forgot_email_loading:false,
                verify_token_loading:false,
                change_password_loading:true,

                error:false,
                success:false,
            };
        case CHANGE_PASSWORD_SUCCESS:
            return {
                ...state,
                message:action.message,
                user_data: action.payload,
                send_forgot_email_loading:false,
                verify_token_loading:false,
                change_password_loading:false,

                verify_token_success:false,
                initial_send_mail_status:false,
                change_password_status:true,

                error:false,
                success:true,
            };
        case CHANGE_PASSWORD_FAILURE:
            return {
                ...state,
                message:action.message,
                send_forgot_email_loading:false,
                verify_token_loading:false,
                change_password_loading:false,

                error:true,
                success:false,
            }
        case RESET_PASSWORD_CHANGE_KEY:
            return {
                ...state,
                change_password_status:false,
                message:null,
                error:false,
                success:false,
            }
        default:
            return state;
    }
};

export default ForgotPasswordReducer;