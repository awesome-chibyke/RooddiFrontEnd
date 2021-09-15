/* eslint-disable no-unused-vars */
import{
    GET_ALL_USERS,
    GET_ALL_USERS_SUCCESS,
    GET_ALL_USERS_FAIL,
    SELECT_ONE_USER,
    SELECT_ONE_USER_SUCCESS,
    SELECT_ONE_USER_FAIL,
    DELETE_USER,
    DELETE_USER_SUCCESS,
    DELETE_USER_FAIL,
    RESET_USERS_STATE,
    EDIT_USER,
    EDIT_USER_SUCCESS,
    EDIT_USER_FAIL
} from './UserTypes'

import { BACKEND_BASE_URL, headerIncluder, NO_OF_TRIAL_COUNTER } from "../../../common_variables";
import * as Validator from 'validatorjs';
import validateModule from "../../../validation/validate_module";
import { postRequest, getRequest } from "../../axios_call";
import {CHANGE_USER_OBJECT} from "../Login/LoginActionTypes";
//............................................ Get all users ..........................................................//
const getAllUsersAction = () => {
    return {
        type: GET_ALL_USERS,
        message:'Loading...'
    };
};

const getAllUsersActionSuccess = ({data, message }) => {
    return {
        type:GET_ALL_USERS_SUCCESS,
        payload:data,
        message:message,
    }
}

const getAllUsersActionFailure = (message) => {
    return {
        type:GET_ALL_USERS_FAIL,
        message:message
    }
}

export const getUsersAction = (loginData, allUsers, counter = 0) => {

    return async (dispatch) => {

    try{
        counter++;
        dispatch(getAllUsersAction());

        if(loginData.isLogged === true){

            if(allUsers.length > 0){
                dispatch(getAllUsersActionSuccess({data:allUsers, message:'' }));
            }else{
                let handleagetUsersAction = await getRequest(`${BACKEND_BASE_URL}users/all_users/user`, headerIncluder(loginData.user_data.token) );
                let returnedObject = handleagetUsersAction.data;
                // console.log(handleagetUsersAction)
                let {status, message, data} = returnedObject;
                let {all_users} = data;
                if(status === true){
                    dispatch(getAllUsersActionSuccess({data:all_users, message:'' }));
                }else{
                    validateModule.handleErrorStatement(message, '', 'on', 'no', 'no');
                    dispatch({
                        type:GET_ALL_USERS_FAIL,
                        message:message
                    });
                }
            }
        }
    }catch(err){
        validateModule.handleErrorStatement({general_error:[err.message]}, '', 'on', 'no', 'no');
        dispatch(getAllUsersActionFailure(err.message));
    }
}
}

//............................................ Get single user ..........................................................//
const getSingleUserAction = () => {
    return {
        type: SELECT_ONE_USER,
        message:''
    };
};

const getSingleUserActionSuccess = ({message, user_object }) => {
    return {
        type:SELECT_ONE_USER_SUCCESS,
        payload:user_object,
        message:message,
    }
}

const getSingleUserActionFailure = (message) => {
    return {
        type:SELECT_ONE_USER_FAIL,
        message:message
    }
}

export const selectOneUserAction = ({ userUniqueId, loginData, allUsers }) => async (dispatch) => {
    dispatch(getSingleUserAction());
    try{

        if(loginData.isLogged === true){

            let selectedUserObject = {};
            if(allUsers.length > 0){

                for(let i in allUsers){
                    if(allUsers[i].unique_id === userUniqueId){
                        selectedUserObject = allUsers[i];
                    }
                }
                dispatch(getSingleUserActionSuccess({message:'', user_object:selectedUserObject }));

            }else{

                let handleSelectOneUserAction = await getRequest(`${BACKEND_BASE_URL}users/single_user/${userUniqueId}`, headerIncluder(loginData.user_data.token) );
                let returnedObject = handleSelectOneUserAction.data;

                let {status, message, data} = returnedObject;
                let {single_user} = data;

                if(status === true){
                    dispatch(getSingleUserActionSuccess({message, user_object:single_user }));
                }else{
                    validateModule.handleErrorStatement(message, '', 'on', 'no', 'no');
                    dispatch({
                        type:SELECT_ONE_USER_FAIL,
                        message:message
                    });
                }

            }


        }
    }catch(err){
        validateModule.handleErrorStatement({general_error:[err.message]}, '', 'on', 'no', 'no');
        dispatch(getSingleUserActionFailure(err.message));
        console.log(err.message, 'error')
    }
}

//............................................ Delete user ..........................................................//
const deleteUserAction = () => {
    return {
        type: DELETE_USER,
        message:'Loading....'
    };
};

const deleteUserActionSuccess = ({message, all_users}) => {
    return {
        type:DELETE_USER_SUCCESS,
        payload:all_users,
        message:message,
    }
}

const deleteUserActionFailure = (message) => {
    return {
        type:DELETE_USER_FAIL,
        message:message
    }
}

export const deleteUsersAction = ({unique_id, type_of_user, loginData}) => async (dispatch) => {
    let reVal = window.confirm('Do you really want to delete user ?');
    if(reVal === true){
        dispatch(deleteUserAction());
        try{

            if(loginData.isLogged === true){
                let handleDeleteUserAction = await getRequest(`${BACKEND_BASE_URL}users/delete_user/${unique_id}/${type_of_user}`, headerIncluder(loginData.user_data.token) );
                let returnedObject = handleDeleteUserAction.data;
                let {status, message, message_type, data} = returnedObject;
                if(status === true){
                    let {all_users} = data;
                    dispatch(deleteUserActionSuccess({message, all_users}));
                }else{
                    validateModule.handleErrorStatement(message, '', 'on', 'no', 'no');
                    dispatch({
                        type:DELETE_USER_FAIL,
                        message:message
                    });
                }
            }
        }catch(err){
            validateModule.handleErrorStatement({general_error:[err.message]}, '', 'on', 'no', 'no');
            dispatch(deleteUserActionFailure(err.message));
        }
    }
}


//.............................................User Edit details.......................................//

const editUserAction = () => {
    return {
        type: EDIT_USER,
        message:''
    };
};

const editUserActionSuccess = ({message, all_users}) => {
    return {
        type:EDIT_USER_SUCCESS,
        message:message,
        payload:all_users
    }
}

const editUserActionFailure = (message) => {
    return {
        type:EDIT_USER_FAIL,
        message:message
    }
}


export const adminEditUserAction = ({loginData, singleUserObject, userUniqueId}) => async (dispatch)=>{
    validateModule.ClearErrorFields();
    dispatch(editUserAction());

    let data = {
        first_name:singleUserObject.first_name,
        last_name:singleUserObject.last_name,
        country:singleUserObject.country,
        state:singleUserObject.state,
        city:singleUserObject.city,
        address:singleUserObject.address,
        zip_code:singleUserObject.zip_code
    };
    let rules = {
        first_name:"required|string",
        last_name:"required|string",
        country:"required|string",
        state:"required|string",
        city:"required|string",
        address:"required|string",
        zip_code:"required|numeric"
    };

    let validation = new Validator(data, rules);

    if (validation.fails()) {
        dispatch(editUserActionFailure("Validation Error Occured"));
        return validateModule.handleErrorStatement( validation.errors.errors, "", "on", "no", "no" );
    }
    try {
        if(loginData.isLogged === true){

        let formBody = 'first_name='+singleUserObject.first_name+'&last_name='+singleUserObject.last_name+'&country='+singleUserObject.country+'&state='+singleUserObject.state+'&city='+singleUserObject.city+'&address='+singleUserObject.address+'&zip_code='+singleUserObject.zip_code+'&unique_id='+userUniqueId;

        let handleEditAdminUser = await postRequest(BACKEND_BASE_URL+"users/edit_user", formBody,  headerIncluder(loginData.user_data.token));
        let returnedObject = handleEditAdminUser.data;

        let {status, message, data} = returnedObject;
        if (status === true) {
            let {all_users} = data;
            dispatch(editUserActionSuccess({message, all_users}));
        } else {
            validateModule.handleErrorStatement(
                message, "", "on", "no", "no"
            );
            dispatch(editUserActionFailure("An Error Occurred"));
        }
        }
    } catch (err) {
        dispatch(editUserActionFailure(err.message));
        validateModule.handleErrorStatement({general_error:[err.message]}, '', 'on', 'no', 'no');
        
    }
}




export const resetUserState = () => async (dispatch) => {
    dispatch({
        type:RESET_USERS_STATE,
    });
}