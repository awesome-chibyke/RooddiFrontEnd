import{
    ACTIVATE_TWOFACTOR,
    ACTIVATE_TWOFACTOR_SUCCESS,
    ACTIVATE_TWOFACTOR_FAILURE,
    FINALISE_TWOFACTOR,
    FINALISE_TWOFACTOR_SUCCESS,
    FINALISE_TWOFACTOR_FAILURE,
    DEACTIVATE_TWOFACTOR,
    DEACTIVATE_TWOFACTOR_SUCCESS,
    DEACTIVATE_TWOFACTOR_FAILURE
}from"./TwoFactorTypes"
import { BACKEND_BASE_URL, headerIncluder } from "../../../common_variables";
import * as Validator from 'validatorjs';
import validateModule from "../../../validation/validate_module";
import { getRequest, postRequest } from "../../axios_call";
import {CHANGE_USER_OBJECT} from "../Login/LoginActionTypes";


const twoFactorActivation = () => {
    return {
        type: ACTIVATE_TWOFACTOR,
        message:''
    };
};

const twoFactorActivationSuccess = ({data, message }) => {
    return {
        type:ACTIVATE_TWOFACTOR_SUCCESS,
        payload:data,
        message:message,
    }
}

const twoFactorActivationFailure = (message) => {
    return {
        type:ACTIVATE_TWOFACTOR_FAILURE,
        message:message
    }
}


export const activateTwoFactorAction = (loginData) => async (dispatch) => {

    dispatch(twoFactorActivation());
    try{
        if(loginData.isLogged === true){
            let handleaTwoFactorAction = await getRequest(BACKEND_BASE_URL+"two_factor/activate_two_factor_auth", headerIncluder(loginData.user_data.token) );
            let returnedObject = handleaTwoFactorAction.data;
            let {status, message, data} = returnedObject;
            let {bar_code_data, otpauth_url} = data;

            if(status === true){
                // dispatch(twoFactorActivationSuccess(data, message));
                dispatch({type:ACTIVATE_TWOFACTOR_SUCCESS, payload:bar_code_data, otpauth_url});
            }else{
                validateModule.handleErrorStatement(message, '', 'on', 'no', 'no');
                dispatch({
                    type:ACTIVATE_TWOFACTOR_FAILURE,
                    message:message
                });
            }
        }
    }catch(err){
        dispatch(twoFactorActivationFailure(err.message));
    }
}

//.............................................finalise otp.......................................//
const finalisetwoFactorActivation = () => {
    return {
        type: FINALISE_TWOFACTOR,
        message:''
    };
};

const finalisetwoFactorActivationSuccess = (message) => {
    return {
        type:FINALISE_TWOFACTOR_SUCCESS,
        message:message
    }
}

const finalisetwoFactorActivationFailure = (message) => {
    return {
        type:FINALISE_TWOFACTOR_FAILURE,
        message:message
    }
}


export const finaliseTwoFactor = ({loginData, token}) => async (dispatch)=>{
    validateModule.ClearErrorFields();
    dispatch(finalisetwoFactorActivation());

    let data = {
        token: token,
    };

    let rules = {
        token: "required|numeric",
    };

    let validation = new Validator(data, rules);

    if (validation.fails()) {
        dispatch(finalisetwoFactorActivationFailure("Your Two Factor Failed"));
        return validateModule.handleErrorStatement( validation.errors.errors, "", "on", "no", "no" );
    }
    try {
        if(loginData.isLogged === true){

        let formBody = "token="+token;
        let handleFinaliseTwoFactor = await postRequest(BACKEND_BASE_URL + "two_factor/finalise_two_factor_activation", formBody,  headerIncluder(loginData.user_data.token));
        let returnedObject = handleFinaliseTwoFactor.data;
        console.log(handleFinaliseTwoFactor.data)
        let {status, message, data} = returnedObject;
        if (status === true) {
            let {user} = data;
            let userData = loginData.user_data;
            userData.user = user;
            console.log(userData)
            dispatch({
                type:CHANGE_USER_OBJECT,
                payload:userData
            })
            dispatch(finalisetwoFactorActivationSuccess(message));
        } else {
            validateModule.handleErrorStatement(
                message, "", "on", "no", "no"
            );
            dispatch(finalisetwoFactorActivationFailure("An Error Occurred"));
        }
        }
    } catch (err) {
        dispatch(finalisetwoFactorActivationFailure(err.message));
    }
}


//.............................................Deactivate otp.......................................//

const deactivatetwoFactorActivation = () => {
    return {
        type: DEACTIVATE_TWOFACTOR,
        message:''
    };
};

const deactivatetwoFactorActivationSuccess = (message) => {
    return {
        type:DEACTIVATE_TWOFACTOR_SUCCESS,
        message:message
    }
}

const deactivatetwoFactorActivationFailure = (message) => {
    return {
        type:DEACTIVATE_TWOFACTOR_FAILURE,
        message:message
    }
}

export const disableTwoFactor = ({loginData, token}) => async (dispatch)=>{
    validateModule.ClearErrorFields();
    dispatch(deactivatetwoFactorActivation());

    let data = {
        token: token,
    };

    let rules = {
        token: "required|numeric",
    };

    let validation = new Validator(data, rules);

    if (validation.fails()) {
        dispatch(deactivatetwoFactorActivationFailure("Disable Two Factor Failed"));
        return validateModule.handleErrorStatement( validation.errors.errors, "", "on", "no", "no" );
    }
    try {
        if(loginData.isLogged === true){

        let formBody = "token="+token;
        let handleDisableTwoFactor = await postRequest(BACKEND_BASE_URL + "two_factor/disable_two_factor_using_auth_app", formBody,  headerIncluder(loginData.user_data.token));
        let returnedObject = handleDisableTwoFactor.data;
        console.log(handleDisableTwoFactor.data)
        let {status, message, data} = returnedObject;
        if (status === true) {
            let {user} = data;
            let userData = loginData.user_data;
            userData.user = user;
            console.log(userData)

            dispatch({//hange the user object
                type:CHANGE_USER_OBJECT,
                payload:userData
            })
            dispatch(deactivatetwoFactorActivationSuccess(message));
        } else {
            validateModule.handleErrorStatement(
                message, "", "on", "no", "no"
            );
            dispatch(deactivatetwoFactorActivationFailure("An Error Occurred"));
        }
        }
    } catch (err) {
        dispatch(deactivatetwoFactorActivationFailure(err.message));
    }
}