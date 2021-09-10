import{
    GET_ALL_USERS,
    GET_ALL_USERS_SUCCESS,
    GET_ALL_USERS_FAIL,
    SELECT_ONE_USER,
    SELECT_ONE_USER_SUCCESS,
    SELECT_ONE_USER_FAIL,
    DELETE_USER,
    DELETE_USER_SUCCESS,
    DELETE_USER_FAIL
} from './UserTypes'

import { BACKEND_BASE_URL, headerIncluder } from "../../../common_variables";
import * as Validator from 'validatorjs';
import validateModule from "../../../validation/validate_module";
import { postRequest, getRequest } from "../../axios_call";
import {CHANGE_USER_OBJECT} from "../Login/LoginActionTypes";
//............................................ Get all users ..........................................................//
const getAllUsersAction = () => {
    return {
        type: GET_ALL_USERS,
        message:''
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

export const getUsersAction = (loginData, allUsers) => async (dispatch) => {

    dispatch(getAllUsersAction());
    try{
        if(loginData.isLogged === true){

            if(allUsers.length > 0){
                dispatch(getAllUsersActionSuccess({data:allUsers, message:'' }));
            }else{
                let handleagetUsersAction = await getRequest(BACKEND_BASE_URL+"users/all_users/user", headerIncluder(loginData.user_data.token) );
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
        dispatch(getAllUsersActionFailure(err.message));
    }
}

//............................................ Get single user ..........................................................//
const getSingleUserAction = () => {
    return {
        type: SELECT_ONE_USER,
        message:''
    };
};

const getSingleUserActionSuccess = ({data, message }) => {
    return {
        type:SELECT_ONE_USER_SUCCESS,
        payload:data,
        message:message,
    }
}

const getSingleUserActionFailure = (message) => {
    return {
        type:SELECT_ONE_USER_FAIL,
        message:message
    }
}

export const selectOneUserAction = (loginData, unique_id) => async (dispatch) => {

    dispatch(getSingleUserAction());
    try{
        if(loginData.isLogged === true){
            let handleSelectOneUserAction = await getRequest(BACKEND_BASE_URL+`users/single_user/${unique_id}`, headerIncluder(loginData.user_data.token) );
            let returnedObject = handleSelectOneUserAction.data;
            // console.log(handleSelectOneUserAction)
            let {status, message, data} = returnedObject;
            let {single_user} = data;
            if(status === true){
                dispatch({type:SELECT_ONE_USER_SUCCESS, payload:single_user});
            }else{
                validateModule.handleErrorStatement(message, '', 'on', 'no', 'no');
                dispatch({
                    type:SELECT_ONE_USER_FAIL,
                    message:message
                });
            }
        }
    }catch(err){
        dispatch(getSingleUserActionFailure(err.message));
    }
}

//............................................ Delete user ..........................................................//
const deleteUserAction = () => {
    return {
        type: DELETE_USER,
        message:''
    };
};

const deleteUserActionSuccess = ({data, message }) => {
    return {
        type:DELETE_USER_SUCCESS,
        payload:data,
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
                // let {all_users} = data;
                if(status === true){
                    dispatch(deleteUserActionSuccess(message, data));
                }else{
                    validateModule.handleErrorStatement(message, '', 'on', 'no', 'no');
                    dispatch({
                        type:DELETE_USER_FAIL,
                        message:message
                    });
                }
            }
        }catch(err){
            dispatch(deleteUserActionFailure(err.message));
        }
    }
}