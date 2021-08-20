import {
    TWO_FACTOR_DISABLE_REQUEST,
    TWO_FACTOR_DISABLE_REQUEST_SUCESS,
    TWO_FACTOR_DISABLE_REQUEST_FAILURE,
    
    FINALISE_TWO_FACTOR_DISABLE_REQUEST,
    FINALISE_TWO_FACTOR_DISABLE_REQUEST_SUCESS,
    FINALISE_TWO_FACTOR_DISABLE_REQUEST_FAILURE,
  } from "./TwoFactorDisableRequestTypes";

import { BACKEND_BASE_URL, headerIncluder } from "../../../common_variables";
import * as Validator from 'validatorjs';
import validateModule from "../../../validation/validate_module";
import { getRequest, postRequest } from "../../axios_call";
import {CHANGE_USER_OBJECT} from "../Login/LoginActionTypes";

const disabletwoFactor = () => {
    return {
        type: TWO_FACTOR_DISABLE_REQUEST,
        message:''
    };
};

const disabletwoFactorSuccess = ({data, message }) => {
    return {
        type:TWO_FACTOR_DISABLE_REQUEST_SUCESS,
        payload:data,
        message:message,
    }
}

const disabletwoFactorFailure = (message) => {
    return {
        type:TWO_FACTOR_DISABLE_REQUEST_FAILURE,
        message:message
    }
}

export const disableTwoFactorRequest = (loginData) => async (dispatch)=>{
    dispatch(disabletwoFactor());
    try{
        if(loginData.isLogged === true){
            let handleaDisableTwoFactor = await getRequest(BACKEND_BASE_URL+"two_factor/initialize_disable_of_two_factor_deactivation_request", headerIncluder(loginData.user_data.token) );
            let returnedObject = handleaDisableTwoFactor.data;
            console.log(handleaDisableTwoFactor.data)
            let {status, message, data} = returnedObject;
            if(status === true){
                dispatch(disabletwoFactorSuccess(data, message));
            }else{
                validateModule.handleErrorStatement(message, '', 'on', 'no', 'no');
                dispatch({
                    type:TWO_FACTOR_DISABLE_REQUEST_FAILURE,
                    message:message
                });
            }
        }
    }catch(err){
        dispatch(disabletwoFactorFailure(err.message));
    }
}

//....................................Finalise disable twofactor on request.................................................//

const finalisedisabletwoFactor = () => {
    return {
        type: FINALISE_TWO_FACTOR_DISABLE_REQUEST,
        message:''
    };
};

const finalisedisabletwoFactorSuccess = (message) => {
    return {
        type:FINALISE_TWO_FACTOR_DISABLE_REQUEST_SUCESS,
        message:message
    }
}

const finalisedisabletwoFactorFailure = (message) => {
    return {
        type:FINALISE_TWO_FACTOR_DISABLE_REQUEST_FAILURE,
        message:message
    }
}


export const finaliseDisableTwoFactor = ({loginData, token}) => async (dispatch)=>{
    validateModule.ClearErrorFields();
    dispatch(finalisedisabletwoFactor());

    let data = {
        token: token,
    };

    let rules = {
        token: "required|numeric",
    };

    let validation = new Validator(data, rules);

    if (validation.fails()) {
        dispatch(finalisedisabletwoFactorFailure("Your Two Factor Failed"));
        return validateModule.handleErrorStatement( validation.errors.errors, "", "on", "no", "no" );
    }
    try {
        if(loginData.isLogged === true){

        let formBody = "token="+token;
        let handleFinaliseDisableTwoFactor = await postRequest(BACKEND_BASE_URL + "two_factor/supply_token_from_auth_app_for_two_factor_disable", formBody,  headerIncluder(loginData.user_data.token));
        let returnedObject = handleFinaliseDisableTwoFactor.data;
        console.log(handleFinaliseDisableTwoFactor.data)
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
            dispatch(finalisedisabletwoFactorSuccess(message));
        } else {
            validateModule.handleErrorStatement(
                message, "", "on", "no", "no"
            );
            dispatch(finalisedisabletwoFactorFailure("An Error Occurred"));
        }
        }
    } catch (err) {
        dispatch(finalisedisabletwoFactorFailure(err.message));
    }
}