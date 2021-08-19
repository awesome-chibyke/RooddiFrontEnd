import {VERIFY_EMAIL_LOADING, VERIFY_EMAIL_SUCCESS,VERIFY_EMAIL_FAILURE, VERIFY_PHONE_LOADING, VERIFY_PHONE_SUCCESS, VERIFY_PHONE_FAILURE, RESET_TWO_FACTOR_DEATIVATION_STATE, VERIFY_EMAIL_TOKEN_LOADING, VERIFY_EMAIL_TOKEN_SUCCESS, VERIFY_EMAIL_TOKEN_FAILURE, VERIFY_PHONE_TOKEN_LOADING, VERIFY_PHONE_TOKEN_SUCCESS, VERIFY_PHONE_TOKEN_FAILURE} from "./TwoFactorDeactivationTypes";
import validateModule from "../../../validation/validate_module";
import {postRequest} from "../../axios_call";
import {BACKEND_BASE_URL} from "../../../common_variables";
import * as Validator from "validatorjs";


//.................................................send email to server for verification................................//

const verifyEmail = () => {
    return {
        type:VERIFY_EMAIL_LOADING,
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
        validateModule.ClearErrorFields();//clear error fields

        dispatch(verifyEmail());

        let data = {
            email: email,
        };

        let rules = {
            email: 'required|email'
        };

        let validation = new Validator(data, rules);

        if(validation.fails()){
            dispatch(verifyPhoneError('A Validation Error Occurred'));
            return validateModule.handleErrorStatement(validation.errors.errors, '', 'on', 'no', 'no');
        }

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
    };
}

//.....................................verify email token for two factor deactivation..................................//

const VerifyEmailTokenLoading = () => {
    return {
        type:VERIFY_EMAIL_TOKEN_LOADING,
        message:'Loading.....'
    }
}

const VerifyEmailTokenSuccess = ({message, email}) => {
    return {
        type:VERIFY_EMAIL_TOKEN_SUCCESS,
        message:message,
        payload:email
    }
}

const VerifyEmailTokenFailure = (message) => {
    return {
        type:VERIFY_EMAIL_TOKEN_FAILURE,
        message:message
    }
}

export const verifyTokenSentToEmailForTwoFactorDeactivation = ({email, token}) => {
    return async (dispatch) => {
        validateModule.ClearErrorFields();//clear error fields

        dispatch(VerifyEmailTokenLoading);

        let data = {
            email: email,
            token: token
        };

        let rules = {
            email: 'required|email',
            token: 'required',
        };

        let validation = new Validator(data, rules);

        if(validation.fails()){
            dispatch(VerifyEmailTokenFailure('A Validation Error Occurred'));
            return validateModule.handleErrorStatement(validation.errors.errors, '', 'on', 'no', 'no');
        }

        try{
            let formBody = 'email='+email+'&token='+token;
            let handlePasswordChange = await postRequest(BACKEND_BASE_URL+"two_factor/verify_email_token_for_two_factor_deactivation", formBody, {headers: {'Content-Type': 'application/x-www-form-urlencoded'} });
            let returnedData = handlePasswordChange.data;
            let {status,message,message_type, data} = returnedData;
            if(status === true){
                dispatch(VerifyEmailTokenSuccess({email:data.email, message}));
            }else{
                validateModule.handleErrorStatement(message, '', 'on', 'no', 'no');
                dispatch(VerifyEmailTokenFailure('A Error Occurred'));
            }
        }catch(e){
            validateModule.handleErrorStatement({general_error:[e.message]}, '', 'on', 'no', 'no');
            dispatch(VerifyEmailTokenFailure(e.message));
        }
    }
}

//..........................................verify phone number for two factor authentication...............................//

const verifyPhoneLoading = () => {
    return {
        type:VERIFY_PHONE_LOADING,
        message:'Loading......'
    }
}

const  verifyPhoneSuccess = ({email,country_code, message}) => {
    return {
        type:VERIFY_PHONE_SUCCESS,
        email:email,
        country_code:country_code,
        message:message
    }
}

const verifyPhoneError = (message, email) => {
    return {
        type:VERIFY_PHONE_FAILURE,
        email:email,
        message:message
    }
}

export const sendPhoneForTwoFactorDeactivationPost = ({phone, country_code, email}) => {
    return async (dispatch) => {
        validateModule.ClearErrorFields();//clear error fields

        dispatch(verifyPhoneLoading());

        let data = {
            phone: phone,
            country_code:country_code
        };

        let rules = {
            phone: 'required|numeric',
            country_code:'required'
        };

        let validation = new Validator(data, rules);

        if(validation.fails()){
            dispatch(verifyPhoneError('A Validation Error Occurred', email));
            return validateModule.handleErrorStatement(validation.errors.errors, '', 'on', 'no', 'no');
        }
        //SELECT * FROM `users` WHERE phone = '8164327283' AND email = 'realtestzer13@gmail.com' AND country_code = '+234'
        try{

            //let formBody = 'phone='+phone.trim()+'&country_code='+country_code.value.trim()+'&email='+email.trim();
            let formBody = 'phone=08164327283'+'&country_code=+234'+'&email=realtestzer13@gmail.com';

            let handlePhoneNumberSendingForTwoFactorDeactivation = await postRequest(BACKEND_BASE_URL+"two_factor/send_token_by_sms_for_two_factor_deactivation", formBody, {headers: {'Content-Type': 'application/x-www-form-urlencoded'} });
            console.log(handlePhoneNumberSendingForTwoFactorDeactivation.data);
            let returnedData = handlePhoneNumberSendingForTwoFactorDeactivation.data;
            let {status,message,message_type, data} = returnedData;
            if(status === true){
                dispatch(verifyPhoneSuccess({email:data.email, country_code:data.country_code, message}));
            }else{
                validateModule.handleErrorStatement(message, '', 'on', 'no', 'no');
                dispatch(verifyPhoneError('A Error Occurred', email));
            }
        }catch(e){
            validateModule.handleErrorStatement({general_error:[e.message]}, '', 'on', 'no', 'no');
            dispatch(verifyPhoneError(e.message, email));
        }
    }
}


//..........................................verify token sent to phone number for two factor authentication ...............................//

const verifyPhoneTokenLoading = () => {
    return {
        type:VERIFY_PHONE_TOKEN_LOADING,
        message:'Loading......'
    }
}

const  verifyPhoneTokenSuccess = ({email, phone, message}) => {
    return {
        type:VERIFY_PHONE_TOKEN_SUCCESS,
        email:email,
        phone:phone,
        message:message
    }
}

const verifyPhoneTokenError = (message, email) => {
    return {
        type:VERIFY_PHONE_TOKEN_FAILURE,
        email:email,
        message:message
    }
}

export const sendPhoneTokenForTwoFactorDeactivationPost = ({phone, token, country_code, email}) => {
    return async (dispatch) => {

        validateModule.ClearErrorFields();//clear error fields

        dispatch(verifyPhoneTokenLoading());

        let data = {
            token: token
        };

        let rules = {
            token: 'required|numeric'
        };

        let validation = new Validator(data, rules);

        if(validation.fails()){
            dispatch(verifyPhoneTokenError('A Validation Error Occurred', email));
            return validateModule.handleErrorStatement(validation.errors.errors, '', 'on', 'no', 'no');
        }

        try{
            let formBody = 'phone='+phone+'&token='+token+'&country_code='+country_code.value+'&email='+email;
            let handlePhoneTokenSendingForTwoFactorDeactivation = await postRequest(BACKEND_BASE_URL+"two_factor/verify_token_for_phone", formBody, {headers: {'Content-Type': 'application/x-www-form-urlencoded'} });
            let returnedData = handlePhoneTokenSendingForTwoFactorDeactivation.data;
            let {status,message,message_type, data} = returnedData;
            if(status === true){
                dispatch(verifyPhoneTokenSuccess({email:data.email, phone:data.phone, message}));
            }else{
                alert(JSON.stringify(message))
                validateModule.handleErrorStatement(message, '', 'on', 'no', 'no');
                dispatch(verifyPhoneTokenError('A Error Occurred', email));
            }
        }catch(e){
            validateModule.handleErrorStatement({general_error:[e.message]}, '', 'on', 'no', 'no');
            dispatch(verifyPhoneTokenError(e.message, email));
        }
    }
}

//................................................................reset the whole state..................................//
export const resetTwoFactorDeactivationState = () => {
    return async (dispatch) => {

        dispatch({
            type:RESET_TWO_FACTOR_DEATIVATION_STATE
        });

    }
}