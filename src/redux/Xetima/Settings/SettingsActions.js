import {
  UPDATE_SETTINGS,
  UPDATE_SETTINGS_SUCCESS,
  UPDATE_SETTINGS_FAIL,
  RESET_SETTINGS_STATE,
  GET_SETTINGS,
  GET_SETTINGS_SUCCESS,
  GET_SETTINGS_FAIL
} from "./SettingsType";

import { BACKEND_BASE_URL, headerIncluder, NO_OF_TRIAL_COUNTER } from "../../../common_variables";
import * as Validator from 'validatorjs';
import validateModule from "../../../validation/validate_module";
import { postRequest, getRequest, putRequest } from "../../axios_call";
//.............................................Get Settings.......................................//
const getSettingsAction = () => {
    return {
        type: GET_SETTINGS,
        message:''
    };
};

const getSettingsActionSuccess = ({data, message }) => {
    return {
        type:GET_SETTINGS_SUCCESS,
        payload:data,
        message:message,
    }
}

const getSettingsActionFailure = (message) => {
    return {
        type:GET_SETTINGS_FAIL,
        message:message
    }
}

export const getSettingsActionPost = (loginData, allSettings, counter = 0) => {

    return async (dispatch) => {

    try{
        counter++;
        dispatch(getSettingsAction());

        if(loginData.isLogged === true){

            if(allSettings.length > 0){
                dispatch(getSettingsActionSuccess({data:allSettings, message:'' }));
            }else{
                let handlegetSettingsAction = await getRequest(`${BACKEND_BASE_URL}settings/get_settings`, headerIncluder(loginData.user_data.token) );
                let returnedObject = handlegetSettingsAction.data;
                // console.log(handlegetSettingsAction)
                let {status, message, data} = returnedObject;
                if(status === true){
                    dispatch(getSettingsActionSuccess({data, message:'' }));
                }else{
                    validateModule.handleErrorStatement(message, '', 'on', 'no', 'no');
                    dispatch({
                        type:GET_SETTINGS_FAIL,
                        message:message
                    });
                }
            }
        }
    }catch(err){
        validateModule.handleErrorStatement({general_error:[err.message]}, '', 'on', 'no', 'no');
    }
}
}



//.............................................Update Settings.......................................//

const updateSettingsAction = () => {
    return {
        type: UPDATE_SETTINGS,
        message:''
    };
};

const updateSettingsActionSuccess = ({message, updatedSettingsObject}) => {
    return {
        type:UPDATE_SETTINGS_SUCCESS,
        message:message,
        payload:updatedSettingsObject
    }
}

const updateSettingsActionFailure = (message) => {
    return {
        type:UPDATE_SETTINGS_FAIL,
        message:message
    }
}

export const updateSettingsActionPost = ({
    loginData,
    preferred_currency,
    site_name,
    address1,
    address2,
    address_3,
    address4,
    email1,
    email2,
    site_url,
    logo_url,
    facebook,
    instagram,
    linkedin,
    ios_url,
    android_url,
    front_end_base_url,
    backend_base_url,
    ios_app_store_link,
    phone1,
    phone2,
    no_of_days_to_review,
    total_projects,
    slogan,
    least_withdrawable_amount,}) => async (dispatch)=>{
    validateModule.ClearErrorFields();
    dispatch(updateSettingsAction());

    let data = {
        preferred_currency:preferred_currency,
        site_name:site_name,
        address1:address1,
        address2:address2,
        address_3:address_3,
        address4:address4,
        email1:email1,
        email2:email2,
        site_url:site_url,
        logo_url:logo_url,
        facebook:facebook,
        instagram:instagram,
        linkedin:linkedin,
        ios_url:ios_url,
        android_url:android_url,
        front_end_base_url:front_end_base_url,
        backend_base_url:backend_base_url,
        ios_app_store_link:ios_app_store_link,
        phone1:phone1,
        phone2:phone2,
        no_of_days_to_review:no_of_days_to_review,
        total_projects:total_projects,
        slogan:slogan,
        least_withdrawable_amount:least_withdrawable_amount,
    };
    let rules = {
        preferred_currency:"required|string",
        site_name:"required|string",
        address1:"required|string",
        address2:"required|string",
        address_3:"required|string",
        address4:"required|string",
        email1:"required|string",
        email2:"required|string",
        site_url:"required|string",
        logo_url:"required|string",
        facebook:"required|string",
        instagram:"required|string",
        linkedin:"required|string",
        ios_url:"required|string",
        android_url:"required|string",
        front_end_base_url:"required|string",
        backend_base_url:"required|string",
        ios_app_store_link:"required|string",
        phone1:"required|string",
        phone2:"required|string",
        no_of_days_to_review:"required|numeric",
        total_projects:"required|numeric",
        slogan:"required|string",
        least_withdrawable_amount:"required|numeric",
        zip_code:"required|numeric"
    };

    let validation = new Validator(data, rules);

    if (validation.fails()) {
        dispatch(updateSettingsActionFailure("Validation Error Occured"));
        return validateModule.handleErrorStatement( validation.errors.errors, "", "on", "no", "no" );
    }
    try {
        if(loginData.isLogged === true){

        let formBody = 'preferred_currency='+preferred_currency+'&site_name='+site_name+'&address1='+address1+'&address2='+address2+'&address_3='+address_3+'&address4='+address4+'&email1='+email1+'&email2='+email2+'&site_url='+site_url+'&logo_url='+logo_url+'&facebook='+facebook+'&instagram='+instagram+'&linkedin='+linkedin+'&ios_url='+ios_url+'&android_url='+android_url+'&front_end_base_url='+front_end_base_url+'&backend_base_url='+backend_base_url+'&ios_app_store_link='+ios_app_store_link+'&phone1='+phone1+'&phone2='+phone2+'&no_of_days_to_review='+no_of_days_to_review+'&total_projects='+total_projects+'&slogan='+slogan+'&least_withdrawable_amount='+least_withdrawable_amount;

        let handleUpdateSettings = await putRequest(BACKEND_BASE_URL+"settings", formBody,  headerIncluder(loginData.user_data.token));
        let returnedObject = handleUpdateSettings.data;
        console.log(handleUpdateSettings)
        let {status, message, data} = returnedObject;
        let {updatedSettingsObject} = data
        if (status === true) {
            dispatch(updateSettingsActionSuccess({message, updatedSettingsObject}));
        } else {
            validateModule.handleErrorStatement(
                message, "", "on", "no", "no"
            );
            dispatch(updateSettingsActionFailure("An Error Occurred"));
        }
        }
    } catch (err) {
        dispatch(updateSettingsActionFailure(err.message));
        validateModule.handleErrorStatement({general_error:[err.message]}, '', 'on', 'no', 'no');
        
    }
}

export const resetSettingsState = () => async (dispatch) => {
    dispatch({
        type:RESET_SETTINGS_STATE,
    });
}