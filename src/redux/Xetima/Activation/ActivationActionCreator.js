import {
  ACTIVATION,
  ACTIVATION_FAILURE,
  ACTIVATION_SUCCESS,
  RESEND_ACTIVATION_ACTIVATION_CODE_SUCCESS,
  RESEND_ACTIVATION_CODE,
  RESEND_ACTIVATION_CODE_FAILURE,
} from "./ActivationActionTypes";
import { REGISTER_SUCCESS } from "../Register/RegisterActionTypes";
import * as Validator from "validatorjs";
import { BACKEND_BASE_URL } from "../../../common_variables";
import validateModule from "../../../validation/validate_module";
import { getRequest, postRequest } from "../../axios_call";

const activationUserAction = () => {
  //for user registration
  return {
    type: ACTIVATION,
    payload: {},
    message: "Loading.....",
  };
};

const activationUserSuccess = (data) => {
  return {
    type: ACTIVATION_SUCCESS,
    payload: data.data,
    message: data.message,
  };
};

const activationUserFailure = (message) => {
  return {
    type: ACTIVATION_FAILURE,
    message: message,
  };
};

export const ActivationPost = async (ActivationData) => {
  return async (dispatch) => {
    validateModule.ClearErrorFields(); //clear error fields

    dispatch(activationUserAction());

    let data = {
      token: ActivationData.token,
    };

    let rules = {
      token: "required|numeric",
    };

    let validation = new Validator(data, rules);

    if (validation.fails()) {
      dispatch(activationUserFailure("A Validation Error Occurred"));
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
        "email=" + ActivationData.email + "&token=" + ActivationData.token;
      let handleActivation = await postRequest(
        BACKEND_BASE_URL + "edit/activate_account",
        formBody,
        { headers: { "Content-Type": "application/x-www-form-urlencoded" } }
      );
      let data = handleActivation.data;
      setTimeout(() => {
        if (data.status === true) {
          dispatch(activationUserSuccess(data));
        } else {
          validateModule.handleErrorStatement(
            data.message,
            "",
            "on",
            "no",
            "no"
          );
          dispatch(activationUserFailure("A Error Occurred"));
        }
      }, 3000);
    } catch (e) {
      dispatch(activationUserFailure(e.message));
    }
  };
};

//..............................................rsend activation code..................................//////////////////

const resendActivationCodeAction = () => {
  //for user registration
  return {
    type: RESEND_ACTIVATION_CODE,
    payload: {},
    message: "Loading.....",
  };
};

const resendActivationCodeSuccess = (data) => {
  return {
    type: RESEND_ACTIVATION_ACTIVATION_CODE_SUCCESS,
    payload: data.data,
    message: data.message,
  };
};

const resendActivationCodeFailure = (message) => {
  return {
    type: RESEND_ACTIVATION_CODE_FAILURE,
    message: message,
  };
};

export const ResendActivationPost = async (email) => {
  return async (dispatch) => {
    validateModule.ClearErrorFields(); //clear error fields

    dispatch(resendActivationCodeAction());

    let data = {
      email: email,
    };

    let rules = {
      email: "required|email",
    };

    let validation = new Validator(data, rules);

    if (validation.fails()) {
      dispatch(resendActivationCodeFailure("A Validation Error Occurred"));
      return validateModule.handleErrorStatement(
        validation.errors.errors,
        "",
        "on",
        "no",
        "no"
      );
    }
    //resendActivationCodeAction resendActivationCodeSuccess resendActivationCodeFailure
    try {
      let formBody = "email=" + email;
      let handleTokenResend = await postRequest(
        BACKEND_BASE_URL + "activation/resend-activation-email",
        formBody,
        { headers: { "Content-Type": "application/x-www-form-urlencoded" } }
      );
      let data = handleTokenResend.data;
      setTimeout(() => {
        if (data.status === true) {
          dispatch(resendActivationCodeSuccess(data));
        } else {
          validateModule.handleErrorStatement(
            data.message,
            "",
            "on",
            "no",
            "no"
          );
          dispatch(resendActivationCodeFailure("A Error Occurred"));
        }
      }, 3000);
    } catch (e) {
      dispatch(resendActivationCodeFailure(e.message));
    }
  };
};
