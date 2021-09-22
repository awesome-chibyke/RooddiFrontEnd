import {
    MANAGE_USER,
    MANAGE_USER_SUCCESS,
    MANAGE_USER_FAIL,
} from "./ManageUserTypes";

import { BACKEND_BASE_URL, headerIncluder, NO_OF_TRIAL_COUNTER } from "../../../common_variables";
import * as Validator from 'validatorjs';
import validateModule from "../../../validation/validate_module";
import { postRequest, getRequest, putRequest } from "../../axios_call";
import {CHANGE_USER_OBJECT} from "../Login/LoginActionTypes";

//............................................ Delete user ..........................................................//
const manageUserAction = () => {
    return {
        type: MANAGE_USER,
        message:'Loading....'
    };
};

const manageUserActionSuccess = ({message, all_users}) => {
    return {
        type:MANAGE_USER_SUCCESS,
        payload:all_users,
        message:message,
    }
}

const manageUserActionFailure = (message) => {
    return {
        type:MANAGE_USER_FAIL,
        message:message
    }
}

export const manageUserActionPost = ({unique_id, action, loginData}) => async (dispatch) => {
    let reVal = window.confirm('Do you really want to carry out this action ?');
    if(reVal === true){
        dispatch(manageUserAction());
        let data = {
            unique_id:unique_id,
            action:action
        };

        let rules = {
            unique_id:"string",
            action:"string"
        };
    
        let validation = new Validator(data, rules);
    
        if (validation.fails()) {
            dispatch(manageUserActionFailure("Validation Error Occured"));
            return validateModule.handleErrorStatement( validation.errors.errors, "", "on", "no", "no" );
        }
        try{

            if(loginData.isLogged === true){
                let reqParams = 'unique_id='+unique_id+'&action='+action

                let handleManageUserAction = await putRequest(`${BACKEND_BASE_URL}users/manage_user_account`, reqParams, headerIncluder(loginData.user_data.token) );
                let returnedObject = handleManageUserAction.data;
                console.log(handleManageUserAction)
                let {status, message, message_type, data} = returnedObject;
                if(status === true){
                    let {all_users} = data;
                    dispatch(manageUserActionSuccess({message, all_users}));
                }else{
                    validateModule.handleErrorStatement(message, '', 'on', 'no', 'no');
                    dispatch({
                        type:MANAGE_USER_FAIL,
                        message:message
                    });
                }
            }
        }catch(err){
            validateModule.handleErrorStatement({general_error:[err.message]}, '', 'on', 'no', 'no');
        }
    }
}