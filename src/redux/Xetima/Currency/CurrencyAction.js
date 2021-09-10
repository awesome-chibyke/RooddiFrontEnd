/* eslint-disable no-unused-vars */
import {
  GET_CURRENCY,
  GET_CURRENCY_SUCCESS,
  GET_CURRENCY_FAILURE,
  CHANGE_SELECTED_CURRENCY
} from "./CurrencyTypes";

import {
    CHANGE_USER_OBJECT
  } from "../Login/LoginActionTypes";


import { BACKEND_BASE_URL, headerIncluder } from "../../../common_variables";
import * as Validator from 'validatorjs';
import validateModule from "../../../validation/validate_module";
import { getRequest, postRequest, putRequest } from "../../axios_call";
import { CHANGE_PASSWORD_FAILURE } from "../ForgotPassword/ForgotPasswordActionTypes";

//Get all currency action
const getAllCurrency = () => {
    return {
        type: GET_CURRENCY,
        message:'Loading.....'
    };
};

const getAllCurrencySuccess = (data, message) => {
    return {
        type:GET_CURRENCY_SUCCESS,
        payload:data,
        message:message
    }
}

const getAllCurrencyFailure = (message) => {
    return {
        type:GET_CURRENCY_FAILURE,
        message:message
    }
}

const choseCurrencySuccess = (data, message) =>{
    return{
        type: CHANGE_SELECTED_CURRENCY,
        payload:data
    };
};


export const getAllCurrencyPost = (currencyArray, default_currency, loginData) => {return  async (dispatch) => {
        dispatch(getAllCurrency());
        try{
            if(currencyArray.length > 0){
                dispatch(getAllCurrencySuccess({currency_array:currencyArray, default_currency:default_currency}, ''));
            }else{
                let getCurrency = await getRequest(BACKEND_BASE_URL+"edit/get_all_currency", {headers: {'Content-Type': 'application/x-www-form-urlencoded'} });
                let returnedData = getCurrency.data;
                let {status, message_type, message, data} = returnedData;
            
                if(status === true){
                    if(loginData.isLogged === false){
                        /*if(message_type === 'logout'){
                            window.location.href = '/login';
                            return;
                        }*/
                        dispatch(getAllCurrencySuccess(data, message));
                    }else if(loginData.isLogged === true) {
                        dispatch(getAllCurrencySuccess({currency_array:data.currency_array, default_currency:loginData.user_data.user.currency_details}, message));
                    }
                    
                }else{
                    validateModule.handleErrorStatement(data.message, '', 'on', 'no', 'no');
                    dispatch(getAllCurrencyFailure('A Error Occurred'));
                }
            }    
        }catch(e){
            dispatch(getAllCurrencyFailure(e.message));
        }


    }
}

export const chosePreferredCurrency = ( currencyArray, preferred_currency,  loginData) => {
    return async (dispatch) => {
        let selectedCurrency = {};
        for(let i in currencyArray){
            if(currencyArray[i].unique_id === preferred_currency){
                selectedCurrency = currencyArray[i];
            }
        }
        try{
            if(loginData.isLogged === true){
                let preferredCurrencyPost = 'preferred_currency='+selectedCurrency.unique_id;
                let preferredCurrency = await putRequest(BACKEND_BASE_URL+"edit/update_currency", preferredCurrencyPost, headerIncluder(loginData.user_data.token));
                let returnedCurrency = preferredCurrency.data;
                let {status, message_type, message, data} = returnedCurrency;
                if(status === true){
                    let userData = loginData.user_data;
                    userData.user = data.user;
                    //change the user object
                    dispatch({
                        type:CHANGE_USER_OBJECT,
                        payload:userData
                    })
                }else{
                }
            }
            dispatch(getAllCurrencySuccess({currency_array:currencyArray, default_currency:selectedCurrency}, ''));

        }catch(e){
        }
    }
}