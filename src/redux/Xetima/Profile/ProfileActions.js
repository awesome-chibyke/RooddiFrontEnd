import{
    GET_USER_PROFILE,
    GET_USER_PROFILE_SUCCESS,
    GET_USER_PROFILE_FAIL,

    UPDATE_PROFILE,
    UPDATE_PROFILE_SUCCESS,
    UPDATE_PROFILE_FAIL
}from "./ProfileTypes"

import { BACKEND_BASE_URL, headerIncluder } from "../../../common_variables";
import * as Validator from 'validatorjs';
import validateModule from "../../../validation/validate_module";
import { getRequest, postRequest } from "../../axios_call";
import {CHANGE_USER_OBJECT} from "../Login/LoginActionTypes";


const getProfileAction = () => {
    return {
        type: GET_USER_PROFILE,
        message:''
    };
};

const getProfileActionSuccess = ({data, message }) => {
    return {
        type:GET_USER_PROFILE_SUCCESS,
        payload:data,
        message:message,
    }
}

const getProfileActionFailure = (message) => {
    return {
        type:GET_USER_PROFILE_FAIL,
        message:message
    }
}


export const getUserProfileAction = (loginData) => async (dispatch) => {

    dispatch(getProfileAction());
    try{
        if(loginData.isLogged === true){
            let handleagetUserProfileAction = await getRequest(BACKEND_BASE_URL+"edit/user_profile", headerIncluder(loginData.user_data.token) );
            let returnedObject = handleagetUserProfileAction.data;
            console.log(handleagetUserProfileAction.data)
            let {status, message, data} = returnedObject;
            let {user} = data;
            if(status === true){
                dispatch({type:GET_USER_PROFILE_SUCCESS, payload:user});
            }else{
                validateModule.handleErrorStatement(message, '', 'on', 'no', 'no');
                dispatch({
                    type:GET_USER_PROFILE_FAIL,
                    message:message
                });
            }
        }
    }catch(err){
        dispatch(getProfileActionFailure(err.message));
    }
}

//.............................................Edit user details.......................................//

const editProfileAction = () => {
    return {
        type: UPDATE_PROFILE,
        message:''
    };
};

const editProfileActionSuccess = (message) => {
    return {
        type:UPDATE_PROFILE_SUCCESS,
        message:message
    }
}

const editProfileActionFailure = (message) => {
    return {
        type:UPDATE_PROFILE_FAIL,
        message:message
    }
}


export const editUserProfileAction = ({loginData, first_name, description, middle_name, country_code, passport, phone, address, state, country,preferred_currency }) => async (dispatch)=>{
    validateModule.ClearErrorFields();
    dispatch(editProfileAction());

    let data = {
        first_name:first_name,
        description:description,
        middle_name:middle_name,
        country_code:country_code,
        passport:passport,
        phone:phone,
        address:address,
        state:state,
        country:country,
        preferred_currency:preferred_currency
    };
    let rules = {
        first_name:"required|string",
        description:"required|string",
        middle_name:"required|string",
        country_code:"required|numeric",
        passport:"required|string",
        phone:"required|numeric",
        address:"required|string",
        state:"required|string",
        country:"required|string",
        preferred_currency:"required|string",
    };

    let validation = new Validator(data, rules);

    if (validation.fails()) {
        dispatch(editProfileActionFailure("Your profile update Failed"));
        return validateModule.handleErrorStatement( validation.errors.errors, "", "on", "no", "no" );
    }
    try {
        if(loginData.isLogged === true){

        let formBody = 'first_name='+first_name+'&description='+description+'&middle_name'+middle_name+'&country_code'+country_code+'&passport'+passport+'&phone'+phone+'&address'+address+'&state'+state+'&country'+country+'&preferred_currency'+preferred_currency;
        let handleEditUserProfile = await postRequest(BACKEND_BASE_URL + "edit", formBody,  headerIncluder(loginData.user_data.token));
        let returnedObject = handleEditUserProfile.data;
        console.log(handleEditUserProfile.data)
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
            dispatch(editProfileActionSuccess(message));
        } else {
            validateModule.handleErrorStatement(
                message, "", "on", "no", "no"
            );
            dispatch(editProfileActionFailure("An Error Occurred"));
        }
        }
    } catch (err) {
        dispatch(editProfileActionFailure(err.message));
    }
}

//first_name, description, middle_name, country_code, passport, phone, address, state, country,preferred_currency

