import {
  AUTHENTICATION,
  AUTHENTICATION_FAILURE,
  AUTHENTICATION_SUCCESS,
  RESEND_AUTHENTICATION_AUTHENTICATION_CODE_SUCCESS,
  RESEND_AUTHENTICATION_CODE,
  RESEND_AUTHENTICATION_CODE_FAILURE,
  LOGOUT_AUTH_DISABLE
} from "./AuthActionTypes";
import { LOGIN_SUCCESS } from "../Login/LoginActionTypes";
import * as Validator from "validatorjs";
import { BACKEND_BASE_URL } from "../../../common_variables";
import validateModule from "../../../validation/validate_module";
import { getRequest, postRequest } from "../../axios_call";

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

/*export*/ const AuthenticationPost = async (AuthenticationData) => {
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
    } catch (e) {
      validateModule.handleErrorStatement({general_error:[e.message]}, '', 'on', 'no', 'no');
      dispatch(authenticationUserFailure(e.message));
    }
  };
};