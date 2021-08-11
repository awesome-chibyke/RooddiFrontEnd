import {OPEN_MODAL, CLOSE_MODAL} from "./ModalTypes";

const initialState = {
    display: 'none'
}


const ModalReducer = (state = initialState, action) => {
    switch (action.type) {
        case OPEN_MODAL:
            return {
                ...state,
                display: 'block'
            };
        case CLOSE_MODAL:
            return {
                ...state,
                display: 'none'
            };
        default:
            return state;
    }
};

export default ModalReducer;