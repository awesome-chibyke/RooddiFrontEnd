/* eslint-disable no-unused-vars */
import { LOGIN, LOGIN_FAILURE, LOGIN_SUCCESS,UPDATE_LOGIN_SUCCESS, USER_LOGOUT, USER_LOGOUT_SUCCESS,USER_LOGOUT_FAILURE, CHANGE_AUTHENTICATION_STATUS, AUTHENTICATION,
    AUTHENTICATION_SUCCESS,
    AUTHENTICATION_FAILURE,
    RESEND_AUTHENTICATION_CODE_FAILURE,
    RESEND_AUTHENTICATION_CODE,
    RESEND_AUTHENTICATION_AUTHENTICATION_CODE_SUCCESS,
    ACCOUNT_ACTIVATION_SWITCH,
    LOGOUT_AUTH_DISABLE } from "./LoginActionTypes";
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

const loginUserSuccess = ({data, message_type, message}) => {
    return {
        type:LOGIN_SUCCESS,
        payload:data,
        message:message,
        message_type:message_type
    }
}

const loginUserFailure = (message) => {
    return {
        type:LOGIN_FAILURE,
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
        validateModule.handleErrorStatement({general_error:[err.message]}, '', 'on', 'no', 'no');
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
            let returnedData = handleLogin.data;
            let {message, status, message_type, data} = returnedData;
            
            if(status === true){
                dispatch(loginUserSuccess({data, message_type, message}));
            }else{
                if(message_type === 'activate_account'){
                    //validateModule.handleErrorStatement(message, '', 'on', 'no', 'no');
                    dispatch({
                        type:ACCOUNT_ACTIVATION_SWITCH,
                        message:message.general_error[0],
                        message_type:message_type,
                        payload:data
                    });
                }else{
                    validateModule.handleErrorStatement(message, '', 'on', 'no', 'no');
                    dispatch(loginUserFailure('A Error Occurred'));
                }
                
            }
        }catch(e){
            validateModule.handleErrorStatement({general_error:[e.message]}, '', 'on', 'no', 'no');
            dispatch(loginUserFailure(e.message));
        }


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


export const updateLogin = async (userData, message) => {
    return  async (dispatch) => {
        //validateModule.ClearErrorFields();//clear error fields
        dispatch(updateloginSuccess(userData, message));
    }
}

export const changeAuthenticationStatus = () => {
    return  async (dispatch) => {
        dispatch({type:CHANGE_AUTHENTICATION_STATUS});
    }
}

//...........................................authenticate the login.........................................//
const authenticationUserAction = () => {
    //for user registration
    return {
        type: AUTHENTICATION,
        payload: {},
        message: "Loading.....",
    };
};

const authenticationUserSuccess = (data) => {
    return {
        type: AUTHENTICATION_SUCCESS,
        payload: data.data,
        message: data.message,
    };
};

const authenticationUserFailure = (message) => {
    return {
        type: AUTHENTICATION_FAILURE,
        message: message,
    };
};

export const AuthenticationPost = async (AuthenticationData) => {
    return async (dispatch) => {
        validateModule.ClearErrorFields(); //clear error fields

        dispatch(authenticationUserAction());

        let data = {
            token: AuthenticationData.token,
        };

        let rules = {
            token: "required|numeric",
        };

        let validation = new Validator(data, rules);

        if (validation.fails()) {
            dispatch(authenticationUserFailure("A Validation Error Occurred"));
            return validateModule.handleErrorStatement(
                validation.errors.errors,
                "",
                "on",
                "no",
                "no"
            );
        }

        try {
            let formBody =
                "email=" + AuthenticationData.email + "&token=" + AuthenticationData.token+ "&device_name=" + AuthenticationData.device_name;
            let handleAuthentication = await postRequest(
                BACKEND_BASE_URL + "login/authenticate",
                formBody,
                { headers: { "Content-Type": "application/x-www-form-urlencoded" } }
            );
            let data = handleAuthentication.data;
            if (data.status === true) {
                dispatch(authenticationUserSuccess(data));
            } else {
                validateModule.handleErrorStatement(
                    data.message,
                    "",
                    "on",
                    "no",
                    "no"
                );
                dispatch(authenticationUserFailure("A Error Occurred"));
            }
        } catch (e) {
            validateModule.handleErrorStatement({general_error:[e.message]}, '', 'on', 'no', 'no');
            dispatch(authenticationUserFailure(e.message));
        }
    };
};

//this function will change the islogged to false
export const destroyUserAuthislogged = async (email) => {
    return async (dispatch) => {

        dispatch({
            type:LOGOUT_AUTH_DISABLE
        });

    };
};



export const GoogleAuthPost = async (GoogleAuthData) => {
    return async (dispatch) => {
        validateModule.ClearErrorFields(); //clear error fields

        dispatch(authenticationUserAction());

        let data = {
            token: GoogleAuthData.token,
        };

        let rules = {
            token: "required|numeric",
        };

        let validation = new Validator(data, rules);

        if (validation.fails()) {
            dispatch(authenticationUserFailure("A Validation Error Occurred"));
            return validateModule.handleErrorStatement(
                validation.errors.errors,
                "",
                "on",
                "no",
                "no"
            );
        }

        try {
            let formBody =
                "email=" + GoogleAuthData.email + "&token=" + GoogleAuthData.token+ "&device_name=" + GoogleAuthData.device_name;
            let handleGoogleAuth = await postRequest(
                BACKEND_BASE_URL + "login/authenticate_login_with_two_factor",
                formBody,
                { headers: { "Content-Type": "application/x-www-form-urlencoded" } }
            );
            let data = handleGoogleAuth.data;
            setTimeout(() => {
                if (data.status === true) {
                    dispatch(authenticationUserSuccess(data));
                } else {
                    console.log(data.message)
                    validateModule.handleErrorStatement(
                        data.message,
                        "",
                        "on",
                        "no",
                        "no"
                    );
                    dispatch(authenticationUserFailure("A Error Occurred"));
                }
            }, 3000);
        } catch (e) {
            dispatch(authenticationUserFailure(e.message));
        }
    };
};


//..............................................resend authentication code..................................//////////////////

const resendAuthenticationCodeAction = () => {
    //for user registration
    return {
        type: RESEND_AUTHENTICATION_CODE,
        payload: {},
        message: "Loading.....",
    };
};

const resendAuthenticationCodeSuccess = (data) => {
    return {
        type: RESEND_AUTHENTICATION_AUTHENTICATION_CODE_SUCCESS,
        payload: data.data,
        message: data.message,
    };
};

const resendAuthenticationCodeFailure = (message) => {
    return {
        type: RESEND_AUTHENTICATION_CODE_FAILURE,
        message: message,
    };
};

export const ResendAuthenticationPost = async (email) => {
    return async (dispatch) => {
        validateModule.ClearErrorFields(); //clear error fields

        dispatch(resendAuthenticationCodeAction());

        let data = {
            email: email,
        };

        let rules = {
            email: "required|email",
        };

        let validation = new Validator(data, rules);

        if (validation.fails()) {
            dispatch(resendAuthenticationCodeFailure("A Validation Error Occurred"));
            return validateModule.handleErrorStatement(
                validation.errors.errors,
                "",
                "on",
                "no",
                "no"
            );
        }
        //resendAuthenticationCodeAction resendAuthenticationCodeSuccess resendAuthenticationCodeFailure
        try {
            let formBody = "email=" + email;
            let handleTokenResend = await postRequest(
                BACKEND_BASE_URL + "activation/resend-login-auth-code",
                formBody,
                { headers: { "Content-Type": "application/x-www-form-urlencoded" } }
            );
            let data = handleTokenResend.data;
            setTimeout(() => {
                if (data.status === true) {
                    dispatch(resendAuthenticationCodeSuccess(data));
                } else {
                    validateModule.handleErrorStatement(
                        data.message,
                        "",
                        "on",
                        "no",
                        "no"
                    );
                    dispatch(resendAuthenticationCodeFailure("A Error Occurred"));
                }
            }, 3000);
        } catch (e) {
            dispatch(resendAuthenticationCodeFailure(e.message));
        }
    };
};

