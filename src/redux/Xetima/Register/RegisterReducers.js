import { REGISTER, REGISTER_SUCCESS, REGISTER_FAILURE, USER_LOGOUT } from "./RegisterActionTypes";

const initialState = {
    user_data: [],
    message:'',
    loading:false,
    error_message:false,
    success_message:false,
    isLogged:false
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
                loading:false
            };
        case REGISTER_FAILURE:
            return {
                ...state,
                loading:false,
                error_message:true,
                success_message:false,
                message:action.message
            };
            case USER_LOGOUT:
                return {}
        default:
            return state;
    }
};

export default UserRegistrationReducer;