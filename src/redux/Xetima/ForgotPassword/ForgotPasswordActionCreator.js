import { SEND_EMAIL,SEND_EMAIL_SUCCESS,SEND_EMAIL_FAILURE,VERIFY_EMAIL,VERIFY_EMAIL_SUCCESS,VERIFY_EMAIL_FAILURE,VERIFY_TOKEN,VERIFY_TOKEN_SUCCESS,VERIFY_TOKEN_FAILURE,CHANGE_PASSWORD,CHANGE_PASSWORD_SUCCESS,CHANGE_PASSWORD_FAILURE, RESET_PASSWORD_CHANGE_KEY, RESET_FORGOT_PASSWORD_STATE } from "./ForgotPasswordActionTypes";



import { BACKEND_BASE_URL, headerIncluder } from "../../../common_variables";
import * as Validator from 'validatorjs';
import validateModule from "../../../validation/validate_module";
import { getRequest, postRequest } from "../../axios_call";


//........................................................send email ..................................//
const sendEmailAction = () => {//for user login
    return {
        type: SEND_EMAIL,
        message:'Loading.....'
    };
};

const sendEmailSuccess = (data, message_type, message) => {
    return {
        type:SEND_EMAIL_SUCCESS,
        payload:data,
        message_type:message_type,
        message:message
    }
}

const sendEmailFailure = (message) => {
    return {
        type:SEND_EMAIL_FAILURE,
        message:message
    }
}

export const sendEmailPost = async (email) => {
    return  async (dispatch) => {

        validateModule.ClearErrorFields();//clear error fields

        dispatch(sendEmailAction());

        let data = {
            email:email
        };

        let rules = {
            email: 'required|email',
        };

        let validation = new Validator(data, rules);

        if(validation.fails()){
            dispatch(sendEmailFailure('A Validation Error Occurred')); console.log(validation.errors.errors)
            return validateModule.handleErrorStatement(validation.errors.errors, '', 'on', 'no', 'no');
        }

        try{
            let formBody = 'email='+email;
            let handleSendEmail = await postRequest(BACKEND_BASE_URL+"forgot-password", formBody, {headers: {'Content-Type': 'application/x-www-form-urlencoded'} });

            let {status,message,message_type, data} = handleSendEmail.data;//data forgot_password_auth_app

            if(status === true){

                dispatch(sendEmailSuccess(data, message_type, message));

                //window.location.reload();
            }else{
                validateModule.handleErrorStatement(data.message, '', 'on', 'no', 'no');
                dispatch(sendEmailFailure('A Error Occurred'));
            }
        }catch(e){
            dispatch(sendEmailFailure(e.message));
        }


    }
}

//........................................................send email ..................................//
//verifyTokenPost
const verifyTokenAction = () => {//for user login
    return {
        type: VERIFY_TOKEN,
        message:'Loading.....'
    };
};

const verifyTokenSuccess = (data) => {
    return {
        type:VERIFY_TOKEN_SUCCESS,
        payload:data.data,
        message:data.message
    }
}

const verifyTokenError = (message) => {
    return {
        type:VERIFY_TOKEN_FAILURE,
        message:message
    }
}

export const verifyTokenPost = async (email, token, message_type) => {
    return  async (dispatch) => {

        validateModule.ClearErrorFields();//clear error fields

        dispatch(verifyTokenAction());

        let data = {
            token:token
        };

        let rules = {
            token: 'required|numeric',
        };

        let validation = new Validator(data, rules);

        if(validation.fails()){
            dispatch(verifyTokenError('A Validation Error Occurred'));
            return validateModule.handleErrorStatement(validation.errors.errors, '', 'on', 'no', 'no');
        }

        try{
            let formBody = 'email='+email+'&token='+token+'&message_type='+message_type;
            let handleVerifyToken = await postRequest(BACKEND_BASE_URL+"forgot-password/confirm-forgot-password-token", formBody, {headers: {'Content-Type': 'application/x-www-form-urlencoded'} });
            let data = handleVerifyToken.data;
            if(data.status === true){
                dispatch(verifyTokenSuccess(data));
                //window.location.reload();
            }else{
                //console.log(data.message)
                validateModule.handleErrorStatement(data.message, '', 'on', 'no', 'no');
                dispatch(verifyTokenError('A Error Occurred'));
            }
        }catch(e){
            dispatch(verifyTokenError(e.message));
        }


    }
}


//................................................change password..............................................//
//CHANGE_PASSWORD,CHANGE_PASSWORD_SUCCESS,CHANGE_PASSWORD_FAILURE
const changePasswordAction = () => {//for user login
    return {
        type: CHANGE_PASSWORD,
        message:'Loading.....'
    };
};

const changePasswordSuccess = (data) => {
    return {
        type:CHANGE_PASSWORD_SUCCESS,
        payload:data.data,
        message:data.message
    }
}

const changePasswordError = (message) => {
    return {
        type:CHANGE_PASSWORD_FAILURE,
        message:message
    }
}

export const changePasswordPost = async ({email,token,password,password_confirmation, message_type}) => {
    return  async (dispatch) => {

        validateModule.ClearErrorFields();//clear error fields

        dispatch(changePasswordAction());

        let data = {
            password:password
        };

        let rules = {
            password: 'required',
        };

        let validation = new Validator(data, rules);

        if(validation.fails()){
            dispatch(changePasswordError('A Validation Error Occurred'));
            return validateModule.handleErrorStatement(validation.errors.errors, '', 'on', 'no', 'no');
        }

        try{
            let formBody = 'email='+email+'&token='+token+'&password='+password+"&password_confirmation="+password+"&message_type="+message_type;
            let handlePasswordChange = await postRequest(BACKEND_BASE_URL+"forgot-password/change-password", formBody, {headers: {'Content-Type': 'application/x-www-form-urlencoded'} });
            let data = handlePasswordChange.data;
            if(data.status === true){
                dispatch(changePasswordSuccess(data));
            }else{
                validateModule.handleErrorStatement(data.message, '', 'on', 'no', 'no');
                dispatch(changePasswordError('A Error Occurred'));
            }
        }catch(e){
            validateModule.handleErrorStatement({general_error:[e.message]}, '', 'on', 'no', 'no');
            dispatch(changePasswordError(e.message));
        }


    }
}


export const resetPasswordChangeKey = () => {
    return  async (dispatch) => {

        dispatch({
            type:RESET_PASSWORD_CHANGE_KEY
        });

    }
}


export const resetForgotPasswordState = () => {
    return  async (dispatch) => {

        dispatch({
            type:RESET_FORGOT_PASSWORD_STATE
        });

    }
}