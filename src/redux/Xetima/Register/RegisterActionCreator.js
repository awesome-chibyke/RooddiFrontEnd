/* eslint-disable no-unused-vars */
import { REGISTER, REGISTER_FAILURE, REGISTER_SUCCESS, USER_LOGOUT, ACTIVATION,
    ACTIVATION_FAILURE,
    ACTIVATION_SUCCESS,
    RESEND_ACTIVATION_ACTIVATION_CODE_SUCCESS,
    RESEND_ACTIVATION_CODE,
    RESEND_ACTIVATION_CODE_FAILURE,
    DISABLE_ACTIVATION_STATUS, RESET_REGISTER} from "./RegisterActionTypes";
import { BACKEND_BASE_URL } from "../../../common_variables";
import * as Validator from 'validatorjs';
import validateModule from "../../../validation/validate_module";
import { getRequest, postRequest } from "../../axios_call";


const registerUserAction = () => {//for user registration
    return {
        type:REGISTER,
        payload: {},
        message:'Loading.....'
    };
};

const registerUserSuccess = (data) => {
    return {
        type:REGISTER_SUCCESS,
        payload:data.data,
        message:data.message
    }
}

const registerUserFailure = (message) => {
    return {
        type:REGISTER_FAILURE,
        message:message
    }
}

export const logout = () => (dispatch) => {
    localStorage.removeItem('userData')
    dispatch({ type: USER_LOGOUT })
    document.location.href = '/login'
  }

export const RegisterPost = async (userData) => {
    return  async (dispatch) => {

        validateModule.ClearErrorFields();//clear error fields

        dispatch(registerUserAction());

        let postData = {
            email: userData.email,
            password: userData.password
        };

        let rules = {
            email: 'required|email',
            password: 'required',
        };

        let validation = new Validator(postData, rules);

        if(validation.fails()){
            dispatch(registerUserFailure('A Validation Error Occurred'));
            return validateModule.handleErrorStatement(validation.errors.errors, '', 'on', 'no', 'no');
        }

        if(userData.confirmation === false){
            dispatch(registerUserFailure('A Validation Error Occurred'));
            return validateModule.handleErrorStatement({basic_checkbox_1:['please thick to continue']}, '', 'on', 'no', 'no');
        }

        try{

            let formBody = 'email='+userData.email+'&password='+userData.password+'&referral_id='+userData.referral_id;
            let handleRegistration = await postRequest(BACKEND_BASE_URL+"register", formBody, {headers: {'Content-Type': 'application/x-www-form-urlencoded'} });
            const returnedData = handleRegistration.data;
            const {status, message_type, message, data} = returnedData;
            if(status === true){
                dispatch(registerUserSuccess({data, message, message_type}));
            }else if(status === false){
                validateModule.handleErrorStatement(data.message, '', 'on', 'no', 'no');
                dispatch(registerUserFailure('A Error Occurred'));
            }
        }catch(e){
            validateModule.handleErrorStatement({general_error:[e.message]}, '', 'on', 'no', 'no');
            dispatch(registerUserFailure(e.message));
        }


    }
}

//..............................................rsend activation code..................................//////////////////

const resendActivationCodeAction = () => {
    //for user registration
    return {
        type: RESEND_ACTIVATION_CODE,
        payload: {},
        message: "Loading.....",
    };
};

const resendActivationCodeSuccess = (data) => {
    return {
        type: RESEND_ACTIVATION_ACTIVATION_CODE_SUCCESS,
        payload: data.data,
        message: data.message,
    };
};

const resendActivationCodeFailure = (message) => {
    return {
        type: RESEND_ACTIVATION_CODE_FAILURE,
        message: message,
    };
};

export const ResendActivationPost = async (email) => {
    return async (dispatch) => {
        validateModule.ClearErrorFields(); //clear error fields

        dispatch(resendActivationCodeAction());

        let data = {
            email: email,
        };

        let rules = {
            email: "required|email",
        };

        let validation = new Validator(data, rules);

        if (validation.fails()) {
            dispatch(resendActivationCodeFailure("A Validation Error Occurred"));
            return validateModule.handleErrorStatement(
                validation.errors.errors,
                "",
                "on",
                "no",
                "no"
            );
        }
        //resendActivationCodeAction resendActivationCodeSuccess resendActivationCodeFailure
        try {
            let formBody = "email=" + email;
            let handleTokenResend = await postRequest(
                BACKEND_BASE_URL + "activation/resend-activation-email",
                formBody,
                { headers: { "Content-Type": "application/x-www-form-urlencoded" } }
            );
            let data = handleTokenResend.data;
            setTimeout(() => {
                if (data.status === true) {
                    dispatch(resendActivationCodeSuccess(data));
                } else {
                    validateModule.handleErrorStatement(
                        data.message,
                        "",
                        "on",
                        "no",
                        "no"
                    );
                    dispatch(resendActivationCodeFailure("A Error Occurred"));
                }
            }, 3000);
        } catch (e) {
            validateModule.handleErrorStatement({general_error:[e.message]}, '', 'on', 'no', 'no');
            dispatch(resendActivationCodeFailure(e.message));
        }
    };
};

//............................................................account activation after registration..................................//
const activateUserAction = () => {//for user registration
    return {
        type:ACTIVATION,
        payload: {},
        message:'Loading.....'
    };
};

const activateUserSuccess = ({data, message}) => {
    return {
        type:ACTIVATION_SUCCESS,
        payload:data,
        message:message
    }
}

const activateUserFailure = (message) => {
    return {
        type:ACTIVATION_FAILURE,
        message:message
    }
}

export const ActivationPost = async ({token, device_name, email}) => {
    return async (dispatch) => {
        validateModule.ClearErrorFields(); //clear error fields

        dispatch(activateUserAction());

        let postData = {
            token:token,
        };

        let rules = {
            token: "required|numeric",
        };

        let validation = new Validator(postData, rules);

        if (validation.fails()) {
            dispatch(activateUserFailure("A Validation Error Occurred"));
            return validateModule.handleErrorStatement(
                validation.errors.errors,
                "",
                "on",
                "no",
                "no"
            );
        }

        try {
            let formBody =
                "email=" + email + "&token=" + token+ "&device_name=" + device_name;
            let handleActivation = await postRequest(//
                BACKEND_BASE_URL + "edit/activate_account",
                formBody,
                { headers: { "Content-Type": "application/x-www-form-urlencoded" } }
            );
            let returnedData = handleActivation.data;
            const {status, message_type, message, data} = returnedData
            if (status === true) {
                dispatch(activateUserSuccess({data,message, message_type}));
            } else if(status === false) {
                validateModule.handleErrorStatement(
                    data.message,
                    "",
                    "on",
                    "no",
                    "no"
                );
                dispatch(activateUserFailure("A Error Occurred"));
            }
        } catch (e) {
            validateModule.handleErrorStatement({general_error:[e.message]}, '', 'on', 'no', 'no');
            dispatch(activateUserFailure(e.message));
        }
    };
};


//................................disable activation isLogged during logout ..........................................//
export const disableActivationIsloggedKey = () => {
    return async (dispatch) => {
        //validateModule.ClearErrorFields(); //clear error fields
        dispatch({
            type:DISABLE_ACTIVATION_STATUS
        });
    };
};

export const resetRegister = () => {
    return (dispatch) => {
        dispatch({
            type:RESET_REGISTER
        });
    }
}
