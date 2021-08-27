import{
    SAVE_PHONE_NUMBER_VERIFY,
    SAVE_PHONE_NUMBER_VERIFY_SUCCESS,
    SAVE_PHONE_NUMBER_VERIFY_FAIL,

    RESEND_PHONE_VERIFICATION_CODE,
    RESEND_PHONE_VERIFICATION_CODE_SUCCESS,
    RESEND_PHONE_VERIFICATION_CODE_FAIL,

    VALIDATE_PHONE_NUMBER,
    VALIDATE_PHONE_NUMBER_FAIL,
    VALIDATE_PHONE_NUMBER_SUCCESS,
    RESET_PHONE_STATE
}from './PhoneVerificationTypes'

import { BACKEND_BASE_URL, headerIncluder } from "../../../common_variables";
import * as Validator from 'validatorjs';
import validateModule from "../../../validation/validate_module";
import { postRequest } from "../../axios_call";
import {CHANGE_USER_OBJECT} from "../Login/LoginActionTypes";

const savePhoneAction = () => {
    return {
        type: SAVE_PHONE_NUMBER_VERIFY,
        message:''
    };
};

const savePhoneActionSuccess = ({data, message}) => {
    return {
        type:SAVE_PHONE_NUMBER_VERIFY_SUCCESS,
        payload:data,
        message:message
    }
}

const savePhoneActionFailure = (message) => {
    return {
        type:SAVE_PHONE_NUMBER_VERIFY_FAIL,
        message:message
    }
}

export const savePhonePost = async ({loginData, phone, country_code}) => {
    return  async (dispatch) => {

        validateModule.ClearErrorFields();

        dispatch(savePhoneAction());

        let data = {
            phone: phone,
            country_code: country_code
        };

        let rules = {
            phone: 'required|numeric',
            country_code: 'numeric',
        };

        let validation = new Validator(data, rules);

        if(validation.fails()){
            dispatch(savePhoneActionFailure('A Validation Error Occurred'));
            return validateModule.handleErrorStatement(validation.errors.errors, '', 'on', 'no', 'no');
        }

        try{
            if(loginData.isLogged === true){
            let formBody = 'phone='+phone+'&country_code='+country_code;
            let handleSavePhoneAction = await postRequest(BACKEND_BASE_URL+"phone", formBody, headerIncluder(loginData.user_data.token) );
            let returnedData = handleSavePhoneAction.data;
                console.log(handleSavePhoneAction.data, 'Save phone post')
            let {message, status, data} = returnedData
            if (status === true) {
                dispatch(savePhoneActionSuccess(data, message));
            } else {
                validateModule.handleErrorStatement(
                    message, "", "on", "no", "no"
                );
                dispatch(savePhoneActionFailure("An Error Occurred"));
            }
        }

        }catch(e){
            validateModule.handleErrorStatement({general_error:[e.message]}, '', 'on', 'no', 'no');
            dispatch(savePhoneActionFailure(e.message));
        }


    }
}


//..............................................resend phone verificaction code code..................................//////////////////

const resendPhoneVerificationCodeAction = () => {
    return {
        type: RESEND_PHONE_VERIFICATION_CODE,
        message: "",
    };
};

const resendPhoneVerificationCodeActionSuccess = (data, message) => {
    return {
        type: RESEND_PHONE_VERIFICATION_CODE_SUCCESS,
        payload: data,
        message: message,
    };
};

const resendPhoneVerificationCodeActionFailure = (message) => {
    return {
        type: RESEND_PHONE_VERIFICATION_CODE_FAIL,
        message: message,
    };
};

export const ResendVerificationCodePost = ({loginData, userPhone, countryCode}) => {
    
    return async (dispatch) => {
        validateModule.ClearErrorFields();

        dispatch(resendPhoneVerificationCodeAction());

        let data = {
            phone: userPhone,
            country_code:countryCode
        };

        let rules = {
            phone: "required|numeric",
            country_code: "required|numeric"
        };

        let validation = new Validator(data, rules);

        if (validation.fails()) {
            dispatch(resendPhoneVerificationCodeActionFailure("A Validation Error Occurred"));
            return validateModule.handleErrorStatement(
                validation.errors.errors,
                "",
                "on",
                "no",
                "no"
            );
        }
        try {
            if(loginData.isLogged === true){
            let formBody = 'phone='+userPhone+'&country_code='+countryCode;
            let handleResendVerificationCode = await postRequest(
                BACKEND_BASE_URL + "phone/resend_token_to_phone_number",
                formBody,
                headerIncluder(loginData.user_data.token)
            );
            let returnedData = handleResendVerificationCode.data;
            console.log(handleResendVerificationCode.data, 'Resend code')
            let {data, status, message} = returnedData
            setTimeout(() => {
                if (status === true) {
                    dispatch(resendPhoneVerificationCodeActionSuccess(data, message));
                } else {
                    validateModule.handleErrorStatement(
                        message,
                        "",
                        "on",
                        "no",
                        "no"
                    );
                    dispatch(resendPhoneVerificationCodeActionFailure("A Error Occurred"));
                }
            }, 3000);
            }
        } catch (e) {
            dispatch(resendPhoneVerificationCodeActionFailure(e.message));
        }
    };
};


//...........................................validate the user phone number.........................................//
const validateUserPhoneAction = () => {
    return {
        type: VALIDATE_PHONE_NUMBER,
        message: "",
    };
};

const validateUserPhoneActionSuccess = (data, message) => {
    return {
        type: VALIDATE_PHONE_NUMBER_FAIL,
        payload: data.data,
        message: message,
    };
};

const validateUserPhoneActionFailure = (message) => {
    return {
        type: VALIDATE_PHONE_NUMBER_SUCCESS,
        message: message,
    };
};

export const ValidatePhonePost = async ({loginData, userPhone, countryCode, token}) => { return async (dispatch) => {
        validateModule.ClearErrorFields();
        
        dispatch(validateUserPhoneAction());

        let data = {
            phone: userPhone,
            country_code: countryCode,
            token: token,
        };

        let rules = {
            token: "required|numeric",
            country_code: "required|numeric",
            phone: "required|numeric",
        };

        let validation = new Validator(data, rules);

        if (validation.fails()) {
            dispatch(validateUserPhoneActionFailure("A Validation Error Occurred"));
            return validateModule.handleErrorStatement(
                validation.errors.errors,
                "",
                "on",
                "no",
                "no"
            );
        }

        try {
            if(loginData.isLogged === true){
            let formBody =
                "phone="+userPhone+"&token="+token+"&country_code="+countryCode;
            let handlePhoneValidation = await postRequest(
                BACKEND_BASE_URL + "phone/verify_phone_number",
                formBody,
                headerIncluder(loginData.user_data.token)
            );
            let returnedData = handlePhoneValidation.data;
            console.log(handlePhoneValidation.data, 'Phone validation')
            let{message, data, status} = returnedData
            if (status === true) {
                let {user} = data;
                let userData = loginData.user_data;
                userData.user = user;
                console.log(userData, 'Updated user data')
                dispatch({
                    type:CHANGE_USER_OBJECT,
                    payload:userData
                })
                dispatch(validateUserPhoneActionSuccess(data));
            } else {
                validateModule.handleErrorStatement(
                    message,
                    "",
                    "on",
                    "no",
                    "no"
                );
                dispatch(validateUserPhoneActionFailure("A Error Occurred"));
            }}
        } catch (e) {
            validateModule.handleErrorStatement({general_error:[e.message]}, '', 'on', 'no', 'no');
            dispatch(validateUserPhoneActionFailure(e.message));
        }
    };
};

export const resetPhoneState = () => {
    return (dispatch) => {
        dispatch({
            type:RESET_PHONE_STATE
        });
    }
}