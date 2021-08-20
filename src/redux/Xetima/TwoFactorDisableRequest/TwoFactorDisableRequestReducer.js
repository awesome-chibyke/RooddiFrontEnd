import {
  TWO_FACTOR_DISABLE_REQUEST,
  TWO_FACTOR_DISABLE_REQUEST_SUCESS,
  TWO_FACTOR_DISABLE_REQUEST_FAILURE,

  FINALISE_TWO_FACTOR_DISABLE_REQUEST,
  FINALISE_TWO_FACTOR_DISABLE_REQUEST_SUCESS,
  FINALISE_TWO_FACTOR_DISABLE_REQUEST_FAILURE,
} from "./TwoFactorDisableRequestTypes";

const initialState = {
    user_data: [],
    message:'',
    disable_twofactor:false,
    datas:null,
    loading:false,
    error:false,
    success:false,
};

const DisableTwoFactorReducer = (state = initialState, action) => {
    switch (action.type) {
        case TWO_FACTOR_DISABLE_REQUEST:
            return {
                ...state,
                user_data: [],
                message:action.message,
                disable_twofactor:false,
                datas:null,
                loading:true,
                error:false,
                success:false,
            };
        case TWO_FACTOR_DISABLE_REQUEST_SUCESS:
            return {
                ...state,
                user_data: [],
                message:action.message,
                disable_twofactor:false,
                datas:action.payload,
                loading:true,
                error:false,
                success:true,
            };
        case TWO_FACTOR_DISABLE_REQUEST_FAILURE:
            return {
                ...state,
                message:action.message,
                disable_twofactor:false,
                loading:false,
                error:true,
                success:false,
            };
            case FINALISE_TWO_FACTOR_DISABLE_REQUEST:
                return {
                    ...state,
                    user_data: [],
                    message:action.message,
                    disable_twofactor:false,
                    datas:null,
                    loading:true,
                    error:false,
                    success:false,
                };
                case FINALISE_TWO_FACTOR_DISABLE_REQUEST_SUCESS:
            return {
                ...state,
                user_data: [],
                message:action.message,
                disable_twofactor:false,
                datas:action.payload,
                loading:true,
                error:false,
                success:true,
            };
            case FINALISE_TWO_FACTOR_DISABLE_REQUEST_FAILURE:
                return {
                    ...state,
                    message:action.message,
                    disable_twofactor:false,
                    loading:false,
                    error:true,
                    success:false,
                };
        default:
            return state;
    }
};

export default DisableTwoFactorReducer;