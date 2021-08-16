import{
    ACTIVATE_TWOFACTOR,
    ACTIVATE_TWOFACTOR_SUCCESS,
    ACTIVATE_TWOFACTOR_FAILURE
}from"./TwoFactorTypes"
import { BACKEND_BASE_URL, headerIncluder } from "../../../common_variables";
import * as Validator from 'validatorjs';
import validateModule from "../../../validation/validate_module";
import { getRequest, postRequest } from "../../axios_call";


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
    console.log(loginData)
    try{
        if(loginData.isLogged === true){
                let handleaTwoFactorAction = await getRequest(BACKEND_BASE_URL+"two_factor/activate_two_factor_auth", headerIncluder(loginData.user_data.token));
                // console.log(handleaTwoFactorAction)
                let returnedObject = handleaTwoFactorAction.data;
                console.log(handleaTwoFactorAction.data)
                let {message, status, message_type, data} = returnedObject
                if(status === true){
                    dispatch(twoFactorActivationSuccess(data, message));
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