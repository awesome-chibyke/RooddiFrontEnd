import { LOGIN, LOGIN_FAILURE, LOGIN_SUCCESS, USER_LOGOUT } from "./LoginActionTypes";
import { BACKEND_BASE_URL } from "../../../common_variables";
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

export const logout = () => (dispatch) => {
    localStorage.removeItem('userData')
    dispatch({ type: USER_LOGOUT })
    document.location.href = '/login'
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
            dispatch(loginUserFailure('A Validation Error Occurred'));
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
            setTimeout(() => {
                if(data.status === true){
                    dispatch(loginUserSuccess(data));
                }else{
                    validateModule.handleErrorStatement(data.message, '', 'on', 'no', 'no');
                    dispatch(loginUserFailure('A Error Occurred'));
                }

            }, 3000);
        }catch(e){
            dispatch(loginUserFailure(e.message));
        }


    }
}
