import{
    GET_ALL_PRIVILEDGES,
    GET_ALL_PRIVILEDGES_SUCCESS,
    GET_ALL_PRIVILEDGES_FAIL,
    UPDATE_PRIVILEDGES,
    UPDATE_PRIVILEDGES_SUCCESS,
    UPDATE_PRIVILEDGES_FAIL,
    RESET_PRIVILEDGES_STATE,
    ALTER_PRIVILEDGE, ALTER_PRIVILEDGE_SUCCESS, ALTER_PRIVILEDGE_FAIL
}from './PriviledgesTypes'

import { BACKEND_BASE_URL, headerIncluder, NO_OF_TRIAL_COUNTER } from "../../../common_variables";
import * as Validator from 'validatorjs';
import validateModule from "../../../validation/validate_module";
import { postRequest, getRequest } from "../../axios_call";
import {ADD_NEW_ROLES, ADD_NEW_ROLES_FAIL, ADD_NEW_ROLES_SUCCESS} from "../Roles/RolesType";
//............................................Get all priviledges..........................................................//
const getAllPriviledgeAction = () => {
    return {
        type: GET_ALL_PRIVILEDGES,
        message:'Loading...'
    };
};

const getAllPriviledgeSuccess = ({data, message }) => {
    return {
        type:GET_ALL_PRIVILEDGES_SUCCESS,
        payload:data,
        message:message,
    }
}

const getAllPriviledgeFailure = (message) => {
    return {
        type:GET_ALL_PRIVILEDGES_FAIL,
        message:message
    }
}

export const getAllPriviledgeActionPost = (loginData, allPriviledges, counter = 0) => {
    return async (dispatch) => {
    try{
        counter++;
        dispatch(getAllPriviledgeAction());

        if(loginData.isLogged === true){

            if(allPriviledges.length > 0){
                dispatch(getAllPriviledgeSuccess({data:allPriviledges, message:'' }));
            }else{
                let handleGetPriviledgeAction = await getRequest(`${BACKEND_BASE_URL}roles_management/display_privileges`, headerIncluder(loginData.user_data.token) );
                let returnedObject = handleGetPriviledgeAction.data;
                console.log(handleGetPriviledgeAction)
                let {status, message, data} = returnedObject;
                let {roles} = data;
                if(status === true){
                    dispatch(getAllPriviledgeSuccess({data:roles, message:'' }));
                }else{
                    validateModule.handleErrorStatement(message, '', 'on', 'no', 'no');
                    dispatch({
                        type:GET_ALL_PRIVILEDGES_FAIL,
                        message:message
                    });
                }
            }
        }
    }catch(err){
        validateModule.handleErrorStatement({general_error:[err.message]}, '', 'on', 'no', 'no');
        getAllPriviledgeFailure(err.message);
    }
}
}


//..............................................alter user previledge........................................................//
const alterPreviledgeAction = () => {
    return {
        type: ALTER_PRIVILEDGE,
        message:''
    };
};

const alterPriviledgeActionSuccess = ({message, priviledge_array}) => {
    return {
        type:ALTER_PRIVILEDGE_SUCCESS,
        message:message,
        payload:priviledge_array
    }
}

const alterPriviledgeActionFailure = (message, old_priviledge_array) => {
    return {
        type:ALTER_PRIVILEDGE_FAIL,
        message:message,
        payload:old_priviledge_array
    }
}


export const alterPreviledgePost = ({loginData, priviledgeArray, old_priviledge_array}) => async (dispatch)=>{
    
    validateModule.ClearErrorFields();
    dispatch(alterPreviledgeAction());

    try {
        if(loginData.isLogged === true){
                                 
            let formBody = 'roles_management='+JSON.stringify(priviledgeArray);

            let handleAlterPriviledge = await postRequest(BACKEND_BASE_URL+"roles_management/save_privileges", formBody,  headerIncluder(loginData.user_data.token));
            let returnedObject = handleAlterPriviledge.data;

            let {status, message, data} = returnedObject;
            if (status === true) {
                let {all_privileges} = data;

                dispatch(alterPriviledgeActionSuccess({message, priviledge_array:all_privileges}));
            } else {
                validateModule.handleErrorStatement(
                    message, "", "on", "no", "no"
                );
                dispatch(alterPriviledgeActionFailure("An Error Occurred", old_priviledge_array));
            }
        }
    } catch (err) {
        validateModule.handleErrorStatement({general_error:[err.message]}, '', 'on', 'no', 'no');
        dispatch(alterPriviledgeActionFailure(err.message, old_priviledge_array));
    }
}


export const resetPriviledgeState = () => async (dispatch) => {
    dispatch({
        type:RESET_PRIVILEDGES_STATE,
    });
}