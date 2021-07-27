import { REGISTER, REGISTER_FAILURE, REGISTER_SUCCESS, USER_LOGOUT} from "./RegisterActionTypes";
import { BACKEND_BASE_URL } from "../../../common_variables";
import * as Validator from 'validatorjs';
import validateModule from "../../../validation/validate_module";
import { getRequest, postRequest } from "../../axios_call";


const registerUserAction = () => {//for user registration
    return {
        type: REGISTER,
        payload: {},
        message:'Loading.....'
    };
};

const registerUserSuccess = (data) => {
    return {
        type:REGISTER_SUCCESS,
        payload:data.data,
        message:data.message
    }
}

const registerUserFailure = (message) => {
    return {
        type:REGISTER_FAILURE,
        message:message
    }
}

export const logout = () => (dispatch) => {
    localStorage.removeItem('userData')
    dispatch({ type: USER_LOGOUT })
    document.location.href = '/login'
  }

export const RegisterPost = async (userData) => {
    return  async (dispatch) => {

        validateModule.ClearErrorFields();//clear error fields

        dispatch(registerUserAction());

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
            dispatch(registerUserFailure('A Validation Error Occurred'));
            return validateModule.handleErrorStatement(validation.errors.errors, '', 'on', 'no', 'no');
        }

        if(userData.confirmation === false){
            dispatch(registerUserFailure('A Validation Error Occurred'));
            return validateModule.handleErrorStatement({basic_checkbox_1:['please thick to continue']}, '', 'on', 'no', 'no');
        }

        try{
            let formBody = 'email='+userData.email+'&password='+userData.password+'&referral_id='+userData.referral_id;
            let handleRegistration = await postRequest(BACKEND_BASE_URL+"register", formBody, {headers: {'Content-Type': 'application/x-www-form-urlencoded'} });
            let data = handleRegistration.data;
            setTimeout(() => {
                if(data.status === true){
                    dispatch(registerUserSuccess(data));
                }else{
                    validateModule.handleErrorStatement(data.message, '', 'on', 'no', 'no');
                    dispatch(registerUserFailure('A Error Occurred'));
                }

            }, 3000);
        }catch(e){
            dispatch(registerUserFailure(e.message));
        }


    }
}
