import {
  UPDATE_SETTINGS,
  UPDATE_SETTINGS_SUCCESS,
  UPDATE_SETTINGS_FAIL,
  RESET_SETTINGS_STATE
} from "./SettingsType";

import { BACKEND_BASE_URL, headerIncluder, NO_OF_TRIAL_COUNTER } from "../../../common_variables";
import * as Validator from 'validatorjs';
import validateModule from "../../../validation/validate_module";
import { postRequest, getRequest, putRequest } from "../../axios_call";

//.............................................Update Settings.......................................//

const updateSettingsAction = () => {
    return {
        type: UPDATE_SETTINGS,
        message:''
    };
};

const updateSettingsActionSuccess = ({message, data}) => {
    return {
        type:UPDATE_SETTINGS_SUCCESS,
        message:message,
        payload:data
    }
}

const updateSettingsActionFailure = (message) => {
    return {
        type:UPDATE_SETTINGS_FAIL,
        message:message
    }
}

export const updateSettingsActionPost = ({loginData, settingsObject, userUniqueId}) => async (dispatch)=>{
    validateModule.ClearErrorFields();
    dispatch(updateSettingsAction());

    let data = {
        preferred_currency:settingsObject.preferred_currency,
        site_name:settingsObject.site_name,
        address1:settingsObject.address1,
        address2:settingsObject.address2,
        address3:settingsObject.address3,
        address4:settingsObject.address4,
        email:settingsObject.email,
        email2:settingsObject.email2,
        site_url:settingsObject.site_url,
        logo_url:settingsObject.logo_url,
        facebook:settingsObject.facebook,
        instagram:settingsObject.instagram,
        linkedin:settingsObject.linkedin,
        ios_url:settingsObject.ios_url,
        android_url:settingsObject.android_url,
        front_end_base_url:settingsObject.front_end_base_url,
        back_end_base_url:settingsObject.back_end_base_url,
        ios_app_store_link:settingsObject.ios_app_store_link,
        phone1:settingsObject.phone1,
        phone2:settingsObject.phone2,
        no_of_days_to_review:settingsObject.no_of_days_to_review,
        total_projects:settingsObject.total_projects,
        slogan:settingsObject.slogan,
        least_withdrawable_amount:settingsObject.least_withdrawable_amount,
    };
    let rules = {
        preferred_currency:"required|string",
        site_name:"required|string",
        address1:"required|string",
        address2:"required|string",
        address3:"required|string",
        address4:"required|string",
        email:"required|string",
        email2:"required|string",
        site_url:"required|string",
        logo_url:"required|string",
        facebook:"required|string",
        instagram:"required|string",
        linkedin:"required|string",
        ios_url:"required|string",
        android_url:"required|string",
        front_end_base_url:"required|string",
        back_end_base_url:"required|string",
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

        let formBody = 'preferred_currency='+settingsObject.preferred_currency+'&site_name='+settingsObject.site_name+'&address1='+settingsObject.address1+'&address2='+settingsObject.address2+'&address3='+settingsObject.address3+'&address4='+settingsObject.address4+'&email='+settingsObject.email+'&email2='+settingsObject.email2+'&site_url='+settingsObject.site_url+'&logo_url='+settingsObject.logo_url+'&facebook='+settingsObject.facebook+'&instagram='+settingsObject.instagram+'&linkedin='+settingsObject.linkedin+'&ios_url='+settingsObject.ios_url+'&android_url='+settingsObject.android_url+'&front_end_base_url='+settingsObject.front_end_base_url+'&back_end_base_url='+settingsObject.back_end_base_url+'&ios_app_store_link='+settingsObject.ios_app_store_link+'&phone1='+settingsObject.phone1+'&phone2='+settingsObject.phone2+'&no_of_days_to_review='+settingsObject.no_of_days_to_review+'&total_projects='+settingsObject.total_projects+'&slogan='+settingsObject.slogan+'&least_withdrawable_amount='+settingsObject.least_withdrawable_amount

        let handleUpdateSettings = await putRequest(BACKEND_BASE_URL+"settings", formBody,  headerIncluder(loginData.user_data.token));
        let returnedObject = handleUpdateSettings.data;
        console.log(handleUpdateSettings)
        let {status, message, data} = returnedObject;
        if (status === true) {
           
            dispatch(updateSettingsActionSuccess({message, data}));
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