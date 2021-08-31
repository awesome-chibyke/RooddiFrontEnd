import{
    ID_UPLOAD,
    ID_UPLOAD_SUCCESS,
    ID_UPLOAD_FAIL,
    RESET_ID_UPLOAD_STATE
}from './IdentityUploadTypes';

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


export const uploadFileHandler = ({loginData, document_number}) => async (dispatch)=>{
alert(document_number)
    validateModule.ClearErrorFields();
    dispatch(idUploaddAction());

    let data = {
        document_number:document_number
    };
    let rules = {
        document_number:"required|string",
    };

    let validation = new Validator(data, rules);

    const IdFront = document.getElementById('upload_id_card_front').files[0];
    const idBack = document.getElementById('upload_id_card_back').files[0];
    const formData = new FormData();

    formData.append("upload_id_card_back", IdFront);
    formData.append("upload_id_card_front", idBack);
    formData.append("document_number", document_number);

    if (validation.fails()) {
        dispatch(idUploaddActionFailure("Validation Error Occured"));
        return validateModule.handleErrorStatement( validation.errors.errors, "", "on", "no", "no" );
    }
    try {
        if(loginData.isLogged === true){

        const { data:handleIdUpload } = await postRequest(`${BACKEND_BASE_URL}identity_management/upload_id_card`, formData, headerIncluder(loginData.user_data.token, "multipart/form-data"));

        let {status, message, data} = handleIdUpload;

        if (status === true) {
            let {user} = data;
            let userData = loginData.user_data;
            userData.user = user;

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
    } catch (e) {
        dispatch(idUploaddActionFailure(e.message));
        validateModule.handleErrorStatement({general_error:[e.message]}, '', 'on', 'no', 'no');
    }
}

export const resetIdUploadState = () => {
    return (dispatch) => {
        dispatch({
            type:RESET_ID_UPLOAD_STATE
        });
    }
}
