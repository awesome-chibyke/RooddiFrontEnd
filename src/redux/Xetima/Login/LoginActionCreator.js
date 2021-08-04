import { LOGIN, LOGIN_FAILURE, LOGIN_SUCCESS,UPDATE_LOGIN_SUCCESS, USER_LOGOUT, USER_LOGOUT_SUCCESS,USER_LOGOUT_FAILURE } from "./LoginActionTypes";
import { BACKEND_BASE_URL, headerIncluder } from "../../../common_variables";
import * as Validator from 'validatorjs';
import validateModule from "../../../validation/validate_module";
import { getRequest, postRequest } from "../../axios_call";

const loginUserAction = () => {//for user login
    return {
        type: LOGIN,
        payload: {},
        message:'Loading.....'
    };
};

const loginUserSuccess = (data) => {
    return {
        type:LOGIN_SUCCESS,
        payload:data.data,
        message:data.message
    }
}

const loginUserFailure = (message) => {
    return {
        type:LOGIN_FAILURE,
        message:message
    }
}

const updateloginSuccess = (data, message) => {
    return {
        type:UPDATE_LOGIN_SUCCESS,
        payload:data,
        isLogged:true,
        message:message
    }
}

//USER_LOGOUT, USER_LOGOUT_SUCCESS,USER_LOGOUT_FAILURE
export const logoutAction = (token) => async (dispatch) => {
    try{

        dispatch({ type: USER_LOGOUT });

        //call the api
        let handleLogout = await getRequest(BACKEND_BASE_URL+'logout', headerIncluder(token));
        let returnedObject = handleLogout.data;
        let {message, status, message_type, data} = returnedObject
        if(status === true){
            localStorage.removeItem('persist:root');
            dispatch({
                type:USER_LOGOUT_SUCCESS,
                message:message
            });
            window.location.reload();
        }else{
            validateModule.handleErrorStatement(message, '', 'on', 'no', 'no');
            dispatch({
                type:USER_LOGOUT_FAILURE,
                message:message
            });
        }
    }catch(err){
        dispatch({
            type:USER_LOGOUT_FAILURE,
            message:err.message
        });
    }
}

export const LoginPost = async (userData) => {
    return  async (dispatch) => {

        validateModule.ClearErrorFields();//clear error fields

        dispatch(loginUserAction());

        let data = {
            email: userData.email,
            password: userData.password
        };

        let rules = {
            email: 'required|email',
            password: 'required',
        };

        let validation = new Validator(data, rules);

        if(validation.fails()){
            dispatch(loginUserFailure('A Validation Error Occurred')); console.log(validation.errors.errors)
            return validateModule.handleErrorStatement(validation.errors.errors, '', 'on', 'no', 'no');
        }

        if(userData.confirmation === false){
            dispatch(loginUserFailure('A Validation Error Occurred'));
            return validateModule.handleErrorStatement({basic_checkbox_1:['please thick to continue']}, '', 'on', 'no', 'no');
        }

        try{
            let formBody = 'email='+userData.email+'&password='+userData.password;
            let handleLogin = await postRequest(BACKEND_BASE_URL+"login", formBody, {headers: {'Content-Type': 'application/x-www-form-urlencoded'} });
            let data = handleLogin.data;
            if(data.status === true){
                dispatch(loginUserSuccess(data));
            }else{
                validateModule.handleErrorStatement(data.message, '', 'on', 'no', 'no');
                dispatch(loginUserFailure('A Error Occurred'));
            }
        }catch(e){
            validateModule.handleErrorStatement({general_error:[e.message]}, '', 'on', 'no', 'no');
            dispatch(loginUserFailure(e.message));
        }


    }
}


export const updateLogin = async (userData, message) => {
    return  async (dispatch) => {

        validateModule.ClearErrorFields();//clear error fields

        dispatch(updateloginSuccess(userData, message));

    }
}
