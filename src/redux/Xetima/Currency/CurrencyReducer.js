import {
    GET_CURRENCY,
    GET_CURRENCY_SUCCESS,
    GET_CURRENCY_FAILURE,
    CHOOSE_CURRENCY,
    CHOOSE_CURRENCY_SUCCESS,
    CHOOSE_CURRENCY_FAILURE,
  } from "./CurrencyTypes";

const initialState = {
    user_data: [],
    message:null,
    get_currency:false,
    currencys:[],
    error:false,
    success:false,
    default_currency:{},
    preferred_currency:{}
};

const GetCurrencyReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_CURRENCY:
            return {
                ...state,
                user_data: [],
                message:action.message,
                get_currency:true,
                currencys:[],
                error:false,
                success:false,
            };
        case GET_CURRENCY_SUCCESS:
            return {
                ...state,
                message:action.message,
                get_currency:true,
                currencys:action.payload.currency_array,
                default_currency:action.payload.default_currency,
                error:false,
                success:true,
            };
        case GET_CURRENCY_FAILURE:
            return {
                ...state,
                message:action.message,
                get_currency:false,
                currencys:[],
                error:true,
                success:false,
            };
        default:
            return state;
    }
};

export default GetCurrencyReducer;