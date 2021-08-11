import { REGISTER, REGISTER_SUCCESS, REGISTER_FAILURE, USER_LOGOUT,
    ACTIVATION,
    ACTIVATION_FAILURE,
    ACTIVATION_SUCCESS,
    RESEND_ACTIVATION_ACTIVATION_CODE_SUCCESS,
    RESEND_ACTIVATION_CODE,
    RESEND_ACTIVATION_CODE_FAILURE,
    DISABLE_ACTIVATION_STATUS
} from "./RegisterActionTypes";

const initialState = {
    user_data: [],
    message:'',
    loading:false,
    error_message:false,
    success_message:false,

    isLogged:false,
    register_status:false,
    activation_status:false
};

const UserRegistrationReducer = (state = initialState, action) => {
    switch (action.type) {
        case REGISTER:
            return {
                ...state,
                loading:true,
                success_message:false,
                error_message:false,
                message:action.message
            };
        case REGISTER_SUCCESS:
            return {
                ...state,
                user_data: action.payload,
                success_message:true,
                message:action.message,
                error_message:false,
                loading:false,

                register_status:true,
            };
        case REGISTER_FAILURE:
            return {
                ...state,
                loading:false,
                error_message:true,
                success_message:false,
                message:action.message
            };
        case ACTIVATION:
            return {
                ...state,
                loading:true,
                error_message:false,
                success_message:false,
                message:action.message
            };

        case ACTIVATION_FAILURE:
            return {
                ...state,
                loading:false,
                error_message:true,
                success_message:false,
                message:action.message
            };
        case ACTIVATION_SUCCESS:
            return {
                ...state,
                user_data:action.payload,
                loading:false,
                error_message:false,
                success_message:true,
                message:action.message,
                activation_status:true
            };
        case DISABLE_ACTIVATION_STATUS:
            return {
                ...state,
                user_data:action.payload,
                loading:false,
                error_message:false,
                success_message:true,
                message:action.message,
                activation_status:false
            };
        case RESEND_ACTIVATION_CODE:
            return {
                ...state,
                loading:false,
                resend_loading:true,
                error_message:false,
                success_message:false,
                message:action.message,
            };
        case RESEND_ACTIVATION_ACTIVATION_CODE_SUCCESS:
            return {
                ...state,
                user_data:action.payload,
                loading:false,
                resend_loading:false,
                error_message:false,
                success_message:true,
                message:action.message,
            };
        case RESEND_ACTIVATION_CODE_FAILURE:
            return {
                ...state,
                user_data:action.payload,
                resend_loading:false,
                loading:false,
                error_message:true,
                success_message:false,
                message:action.message,
            };
            case USER_LOGOUT:
                return {}
        default:
            return state;
    }
};

export default UserRegistrationReducer;