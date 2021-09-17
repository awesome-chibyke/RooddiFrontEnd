import{
    GET_ALL_PRIVILEDGES,
    GET_ALL_PRIVILEDGES_SUCCESS,
    GET_ALL_PRIVILEDGES_FAIL,
    UPDATE_PRIVILEDGES,
    UPDATE_PRIVILEDGES_SUCCESS,
    UPDATE_PRIVILEDGES_FAIL,
    RESET_PRIVILEDGES_STATE
}from './PriviledgesTypes'

import { BACKEND_BASE_URL, headerIncluder, NO_OF_TRIAL_COUNTER } from "../../../common_variables";
import * as Validator from 'validatorjs';
import validateModule from "../../../validation/validate_module";
import { postRequest, getRequest } from "../../axios_call";
//............................................Get all priviledges..........................................................//
const getAllPriviledgeAction = () => {
    return {
        type: GET_ALL_PRIVILEDGES,
        message:'Loading...'
    };
};

const getAllPriviledgeSuccess = ({data, message }) => {
    return {
        type:GET_ALL_PRIVILEDGES_SUCCESS,
        payload:data,
        message:message,
    }
}

const getAllPriviledgeFailure = (message) => {
    return {
        type:GET_ALL_PRIVILEDGES_FAIL,
        message:message
    }
}

export const getAllPriviledgeActionPost = (loginData, allPriviledges, counter = 0) => {
    return async (dispatch) => {
    try{
        counter++;
        dispatch(getAllPriviledgeAction());

        if(loginData.isLogged === true){

            if(allPriviledges.length > 0){
                dispatch(getAllPriviledgeSuccess({data:allPriviledges, message:'' }));
            }else{
                let handleGetPriviledgeAction = await getRequest(`${BACKEND_BASE_URL}roles_management/display_privileges`, headerIncluder(loginData.user_data.token) );
                let returnedObject = handleGetPriviledgeAction.data;
                console.log(handleGetPriviledgeAction)
                let {status, message, data} = returnedObject;
                let {roles} = data;
                if(status === true){
                    dispatch(getAllPriviledgeSuccess({data:roles, message:'' }));
                }else{
                    validateModule.handleErrorStatement(message, '', 'on', 'no', 'no');
                    dispatch({
                        type:GET_ALL_PRIVILEDGES_FAIL,
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


export const resetPriviledgeState = () => async (dispatch) => {
    dispatch({
        type:RESET_PRIVILEDGES_STATE,
    });
}