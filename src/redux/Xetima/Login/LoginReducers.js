import { LOGIN, LOGIN_SUCCESS, LOGIN_FAILURE, USER_LOGOUT } from "./LoginActionTypes";

const initialState = {
    user_data: [],
    message:'',
    loading:false,
    error_message:false,
    success_message:false,
    isLogged:false
};

const UserLoginReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN:
            return {
                ...state,
                loading:true,
                success_message:false,
                error_message:false,
                message:action.message
            };
        case LOGIN_SUCCESS:
            return {
                ...state,
                user_data: action.payload,
                success_message:true,
                message:action.message,
                error_message:false,
                loading:false
            };
        case LOGIN_FAILURE:
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

export default UserLoginReducer;