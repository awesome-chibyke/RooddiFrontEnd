import{
    ID_UPLOAD,
    ID_UPLOAD_SUCCESS,
    ID_UPLOAD_FAIL,
    RESET_ID_UPLOAD_STATE
}from './IdentityUploadTypes'

import { BACKEND_BASE_URL, headerIncluder } from "../../../common_variables";
import * as Validator from 'validatorjs';
import validateModule from "../../../validation/validate_module";
import { postRequest } from "../../axios_call";
import {CHANGE_USER_OBJECT} from "../Login/LoginActionTypes";


const idUploaddAction = () => {
    return {
        type: ID_UPLOAD,
        message:''
    };
};

const idUploaddActionSuccess = (message) => {
    return {
        type:ID_UPLOAD_SUCCESS,
        message:message
    }
}

const idUploaddActionFailure = (message) => {
    return {
        type:ID_UPLOAD_FAIL,
        message:message
    }
}


export const editUserProfileAction = ({loginData, upload_id_card_front, upload_id_card_back, document_number}) => async (dispatch)=>{
    validateModule.ClearErrorFields();
    dispatch(idUploaddAction());

    let data = {
        upload_id_card_front:upload_id_card_front,
        upload_id_card_back:upload_id_card_back,
        document_number:document_number
    };
    let rules = {
        upload_id_card_front:"required|string",
        upload_id_card_back:"required|string",
        document_number:"required|string",
    };

    let validation = new Validator(data, rules);

    if (validation.fails()) {
        dispatch(idUploaddActionFailure("Validation Error Occured"));
        return validateModule.handleErrorStatement( validation.errors.errors, "", "on", "no", "no" );
    }
    try {
        if(loginData.isLogged === true){

        let formBody = 'upload_id_card_front='+upload_id_card_front+'&upload_id_card_back='+upload_id_card_back+'&document_number='+document_number
        let handleIdUpload = await postRequest(BACKEND_BASE_URL + "identity_management/upload_id_card", formBody,  headerIncluder(loginData.user_data.token));
        let returnedObject = handleIdUpload.data;
        console.log(handleIdUpload.data)
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
            dispatch(idUploaddActionSuccess(message));
        } else {
            validateModule.handleErrorStatement(
                message, "", "on", "no", "no"
            );
            dispatch(idUploaddActionFailure("An Error Occurred"));
        }
        }
    } catch (err) {
        dispatch(idUploaddActionFailure(err.message));
        console.log(err.message)
    }
}

export const resetIdUploadState = () => {
    return (dispatch) => {
        dispatch({
            type:RESET_ID_UPLOAD_STATE
        });
    }
}
