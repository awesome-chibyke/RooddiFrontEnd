import{
    ID_UPLOAD,
    ID_UPLOAD_SUCCESS,
    ID_UPLOAD_FAIL,
    RESET_ID_UPLOAD_STATE
}from './IdentityUploadTypes'

const initialState = {
    message: "",
    loading: false,
    error: false,
    success: false,
  };

  const IdUploadReducer = (state = initialState, action) => {
    switch (action.type) {
      case ID_UPLOAD:
        return {
          ...state,
          message: action.message,
          loading: true,
          error: false,
          success: false,
        };
      case ID_UPLOAD_SUCCESS:
        return {
          ...state,
          message: action.message,
          loading: false,
          error: false,
          success: true,
        };
      case ID_UPLOAD_FAIL:
        return {
          ...state,
          message: action.message,
          loading: false,
          error: true,
          success: false,
        };
  
      case RESET_ID_UPLOAD_STATE:
        return {
          ...state,
          message: "",
          loading: false,
          error: false,
          success: false
        }
  
      default:
        return state;
    }
  };

  export default IdUploadReducer;