import{
    GET_ALL_ROLES,
    GET_ALL_ROLES_SUCCESS,
    GET_ALL_ROLES_FAIL,
    ADD_NEW_ROLES,
    ADD_NEW_ROLES_SUCCESS,
    ADD_NEW_ROLES_FAIL
}from "./RolesType"

import { BACKEND_BASE_URL, headerIncluder, NO_OF_TRIAL_COUNTER } from "../../../common_variables";
import * as Validator from 'validatorjs';
import validateModule from "../../../validation/validate_module";
import { postRequest, getRequest } from "../../axios_call";
//............................................Get all roles..........................................................//
const getAllRolesAction = () => {
    return {
        type: GET_ALL_ROLES,
        message:'Loading...'
    };
};

const getAllRolesActionSuccess = ({data, message }) => {
    return {
        type:GET_ALL_ROLES_SUCCESS,
        payload:data,
        message:message,
    }
}

const getAllRolesActionFailure = (message) => {
    return {
        type:GET_ALL_ROLES_FAIL,
        message:message
    }
}

export const getallRolesActionPost = (loginData, allRoles, counter = 0) => {

    return async (dispatch) => {

    try{
        counter++;
        dispatch(getAllRolesAction());

        if(loginData.isLogged === true){

            if(allRoles.length > 0){
                dispatch(getAllRolesActionSuccess({data:allRoles, message:'' }));
            }else{
                let handlegetrolesAction = await getRequest(`${BACKEND_BASE_URL}roles_management/get_roles`, headerIncluder(loginData.user_data.token) );
                let returnedObject = handlegetrolesAction.data;
                // console.log(handlegetrolesAction)
                let {status, message, data} = returnedObject;
                let {roles} = data;
                if(status === true){
                    dispatch(getAllRolesActionSuccess({data:roles, message:'' }));
                }else{
                    validateModule.handleErrorStatement(message, '', 'on', 'no', 'no');
                    dispatch({
                        type:GET_ALL_ROLES_FAIL,
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


//............................................Add New roles..........................................................//
const addRolesAction = () => {
    return {
        type: ADD_NEW_ROLES,
        message:''
    };
};

const addRolesActionSuccess = ({message, roles}) => {
    return {
        type:ADD_NEW_ROLES_SUCCESS,
        message:message,
        payload:roles
    }
}

const addRolesActionFailure = (message) => {
    return {
        type:ADD_NEW_ROLES_FAIL,
        message:message
    }
}

export const addRolesActionPost = ({loginData, role, description}) => async (dispatch)=>{
    validateModule.ClearErrorFields();
    dispatch(addRolesAction());

    let data = {
        role:role,
        description:description
    };
    let rules = {
        role:"required|string",
        description:"required|string"
    };

    let validation = new Validator(data, rules);

    if (validation.fails()) {
        dispatch(addRolesActionFailure("Validation Error Occured"));
        return validateModule.handleErrorStatement( validation.errors.errors, "", "on", "no", "no" );
    }
    try {
        if(loginData.isLogged === true){

        let formBody = 'role='+role+'&description='+description

        let handleAddRoles = await postRequest(BACKEND_BASE_URL+"users/edit_user", formBody,  headerIncluder(loginData.user_data.token));
        let returnedObject = handleAddRoles.data;

        let {status, message, data} = returnedObject;
        if (status === true) {
            let {roles} = data;
            dispatch(addRolesActionSuccess({message, roles}));
        } else {
            validateModule.handleErrorStatement(
                message, "", "on", "no", "no"
            );
            dispatch(addRolesActionFailure("An Error Occurred"));
        }
        }
    } catch (err) {
        validateModule.handleErrorStatement({general_error:[err.message]}, '', 'on', 'no', 'no');
        
    }
}