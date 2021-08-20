import{
    ACTIVATE_TWOFACTOR,
    ACTIVATE_TWOFACTOR_SUCCESS,
    ACTIVATE_TWOFACTOR_FAILURE,
    FINALISE_TWOFACTOR,
    FINALISE_TWOFACTOR_SUCCESS,
    FINALISE_TWOFACTOR_FAILURE,
    DEACTIVATE_TWOFACTOR,
    DEACTIVATE_TWOFACTOR_SUCCESS,
    DEACTIVATE_TWOFACTOR_FAILURE
}from"./TwoFactorTypes"

const initialState = {
    user_data: [],
    message:'',
    activate_twofactor:false,
    finalise_twofactor:false,
    disable_twofactor:false,
    loading:false,
    barCode:null,
    otpauth_url:null,
    error:false,
    success:false,
};

const ActivtateTwoFactorReducer = (state = initialState, action) => {
    switch (action.type) {
        case ACTIVATE_TWOFACTOR:
            return {
                ...state,
                user_data: [],
                message:action.message,
                activate_twofactor:true,
                finalise_twofactor:false,
                disable_twofactor:false,
                loading:true,
                barCode:null,
                otpauth_url:null,
                error:false,
                success:false,
            };
        case ACTIVATE_TWOFACTOR_SUCCESS:
            return {
                ...state,
                user_data: [],
                message:action.message,
                activate_twofactor:true,
                finalise_twofactor:false,
                disable_twofactor:false,
                loading:true,
                barCode:action.payload,
                otpauth_url:action.otpauth_url,
                error:false,
                success:true,
            };
        case ACTIVATE_TWOFACTOR_FAILURE:
            return {
                ...state,
                message:action.message,
                activate_twofactor:false,
                finalise_twofactor:false,
                disable_twofactor:false,
                loading:false,
                error:true,
                success:false,
            };
            case FINALISE_TWOFACTOR:
                return {
                    ...state,
                    user_data: [],
                    message:action.message,
                    activate_twofactor:true,
                    finalise_twofactor:true,
                    disable_twofactor:false,
                    loading:true,
                    barCode:null,
                    otpauth_url:null,
                    error:false,
                    success:false,
                };
                case FINALISE_TWOFACTOR_SUCCESS:
            return {
                ...state,
                user_data: [],
                message:action.message,
                activate_twofactor:true,
                finalise_twofactor:true,
                disable_twofactor:false,
                loading:true,
                barCode:null,
                error:false,
                success:true,
            };
            case FINALISE_TWOFACTOR_FAILURE:
                return {
                    ...state,
                    message:action.message,
                    activate_twofactor:false,
                    finalise_twofactor:false,
                    disable_twofactor:false,
                    loading:false,
                    error:true,
                    success:false,
                };
                case DEACTIVATE_TWOFACTOR:
                    return {
                        ...state,
                        user_data: [],
                        message:action.message,
                        activate_twofactor:true,
                        finalise_twofactor:true,
                        disable_twofactor:true,
                        loading:true,
                        barCode:null,
                        otpauth_url:null,
                        error:false,
                        success:false,
                    };
                    case DEACTIVATE_TWOFACTOR_SUCCESS:
                return {
                    ...state,
                    user_data: [],
                    message:action.message,
                    activate_twofactor:true,
                    finalise_twofactor:true,
                    disable_twofactor:true,
                    loading:true,
                    barCode:null,
                    error:false,
                    success:true,
                };
                case DEACTIVATE_TWOFACTOR_FAILURE:
                    return {
                        ...state,
                        message:action.message,
                        activate_twofactor:false,
                        finalise_twofactor:false,
                        disable_twofactor:false,
                        loading:false,
                        error:true,
                        success:false,
                    };
    
        default:
            return state;
    }
};

export default ActivtateTwoFactorReducer;