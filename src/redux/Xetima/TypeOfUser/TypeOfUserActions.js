import {
    GET_ALL_TYPE_OF_USER,
    GET_ALL_TYPE_OF_USER_SUCCESS,
    GET_ALL_TYPE_OF_USER_FAIL,
    ADD_NEW_TYPE_OF_USER,
    ADD_NEW_TYPE_OF_USER_SUCCESS,
    ADD_NEW_TYPE_OF_USER_FAIL,
    RESET_TYPE_OF_USER_STATE
} from "./TypeOfUserTypes"

import { BACKEND_BASE_URL, headerIncluder, NO_OF_TRIAL_COUNTER } from "../../../common_variables";
import * as Validator from 'validatorjs';
import validateModule from "../../../validation/validate_module";
import { postRequest, getRequest } from "../../axios_call";
//............................................Get all type of user..........................................................//
const getAllTypeOfUserAction = () => {
    return {
        type: GET_ALL_TYPE_OF_USER,
        message:'Loading...'
    };
};

const getAllTypeOfUserSuccess = ({data, message }) => {
    return {
        type:GET_ALL_TYPE_OF_USER_SUCCESS,
        payload:data,
        message:message,
    }
}

const getAllTypeOfUserFailure = (message) => {
    return {
        type:GET_ALL_TYPE_OF_USER_FAIL,
        message:message
    }
}

export const getallTypeOfUserActionPost = (loginData, allTypeOfUser, counter = 0) => {

    return async (dispatch) => {

    try{
        counter++;
        dispatch(getAllTypeOfUserAction());

        if(loginData.isLogged === true){

            if(allTypeOfUser.length > 0){
                dispatch(getAllTypeOfUserSuccess({data:allTypeOfUser, message:'' }));
            }else{
                let handlegetAllTypeOfUserAction = await getRequest(`${BACKEND_BASE_URL}roles_management/get_type_of_users`, headerIncluder(loginData.user_data.token) );
                let returnedObject = handlegetAllTypeOfUserAction.data;
                console.log(handlegetAllTypeOfUserAction)
                let {status, message, data} = returnedObject;
                let {type_of_users} = data;
                if(status === true){
                    dispatch(getAllTypeOfUserSuccess({data:type_of_users, message:'' }));
                }else{
                    validateModule.handleErrorStatement(message, '', 'on', 'no', 'no');
                    dispatch({
                        type:GET_ALL_TYPE_OF_USER_FAIL,
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


//............................................Add New Type Of User..........................................................//
const addTypeOfUserAction = () => {
    return {
        type: ADD_NEW_TYPE_OF_USER,
        message:''
    };
};

const addTypeOfUserActionSuccess = ({message, type_of_users}) => {
    return {
        type:ADD_NEW_TYPE_OF_USER_SUCCESS,
        message:message,
        payload:type_of_users
    }
}

const addTypeOfUserActionFailure = (message) => {
    return {
        type:ADD_NEW_TYPE_OF_USER_FAIL,
        message:message
    }
}

export const addTypeOfUserActionPost = ({loginData, type_of_user, description}) => async (dispatch)=>{
    validateModule.ClearErrorFields();
    dispatch(addTypeOfUserAction());

    let data = {
        type_of_user:type_of_user,
        description:description
    };
    let rules = {
        type_of_user:"required|string",
        description:"required|string"
    };

    let validation = new Validator(data, rules);

    if (validation.fails()) {
        dispatch(addTypeOfUserActionFailure("Validation Error Occured"));
        return validateModule.handleErrorStatement( validation.errors.errors, "", "on", "no", "no" );
    }
    try {
        if(loginData.isLogged === true){

        let formBody = 'type_of_user='+type_of_user+'&description='+description

        let handleAddTypeOfUser = await postRequest(BACKEND_BASE_URL+"roles_management/add_new_type_of_user", formBody,  headerIncluder(loginData.user_data.token));
        let returnedObject = handleAddTypeOfUser.data;
        console.log(handleAddTypeOfUser)
        let {status, message, data} = returnedObject;
        if (status === true) {
            let {roles} = data;
            dispatch(addTypeOfUserActionSuccess({message, roles}));
        } else {
            validateModule.handleErrorStatement(
                message, "", "on", "no", "no"
            );
            dispatch(addTypeOfUserActionFailure("An Error Occurred"));
        }
        }
    } catch (err) {
        validateModule.handleErrorStatement({general_error:[err.message]}, '', 'on', 'no', 'no');
        
    }
}

export const resetTypeOfUserState = () => async (dispatch) => {
    dispatch({
        type:RESET_TYPE_OF_USER_STATE,
    });
}