import {VERIFY_EMAIL, VERIFY_EMAIL_SUCCESS,VERIFY_EMAIL_FAILURE, VERIFY_PHONE, VERIFY_PHONE_SUCCESS, VERIFY_PHONE_FAILURE, RESET_TWO_FACTOR_DEATIVATION_STATE, VERIFY_EMAIL_TOKEN_LOADING, VERIFY_EMAIL_TOKEN_SUCCESS, VERIFY_EMAIL_TOKEN_FAILURE, VERIFY_PHONE_TOKEN_LOADING, VERIFY_PHONE_TOKEN_SUCCESS, VERIFY_PHONE_TOKEN_FAILURE} from "./TwoFactorDeactivationTypes";
import validateModule from "../../../validation/validate_module";
import {postRequest} from "../../axios_call";
import {BACKEND_BASE_URL} from "../../../common_variables";

const verifyEmail = () => {
    return {
        type:VERIFY_EMAIL,
        message:'Loading......'
    }
}

const  verifyEmailSuccess = ({email, message}) => {
    return {
        type:VERIFY_EMAIL_SUCCESS,
        payload:email,
        message:message
    }
}

const verifyEmailError = (message) => {
    return {
        type:VERIFY_EMAIL_FAILURE,
        message:message
    }
}

export const sendEmailForTwoFactorDeactivationPost = (email) => {
    return async (dispatch) => {

        dispatch(verifyEmail());

        try{
            let formBody = 'email='+email;
            let handlePasswordChange = await postRequest(BACKEND_BASE_URL+"two_factor/disable_two_factor_email_auth", formBody, {headers: {'Content-Type': 'application/x-www-form-urlencoded'} });
            let returnedData = handlePasswordChange.data;
            let {status,message,message_type, data} = returnedData;
            if(status === true){
                dispatch(verifyEmailSuccess({email:data.email, message}));
            }else{
                validateModule.handleErrorStatement(message, '', 'on', 'no', 'no');
                dispatch(verifyEmailError('A Error Occurred'));
            }
        }catch(e){
            validateModule.handleErrorStatement({general_error:[e.message]}, '', 'on', 'no', 'no');
            dispatch(verifyEmailError(e.message));
        }
    }
}


export const sendPhoneForTwoFactorDeactivationPost = (email) => {
    return async (dispatch) => {

        dispatch(verifyEmail());

        try{
            let formBody = 'email='+email;
            let handlePasswordChange = await postRequest(BACKEND_BASE_URL+"two_factor/disable_two_factor_email_auth", formBody, {headers: {'Content-Type': 'application/x-www-form-urlencoded'} });
            let returnedData = handlePasswordChange.data;
            let {status,message,message_type, data} = returnedData;
            if(status === true){
                dispatch(verifyEmailSuccess({email:data.email, message}));
            }else{
                validateModule.handleErrorStatement(message, '', 'on', 'no', 'no');
                dispatch(verifyEmailError('A Error Occurred'));
            }
        }catch(e){
            validateModule.handleErrorStatement({general_error:[e.message]}, '', 'on', 'no', 'no');
            dispatch(verifyEmailError(e.message));
        }
    }
}