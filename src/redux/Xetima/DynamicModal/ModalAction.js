import {OPEN_MODAL, CLOSE_MODAL} from "./ModalTypes";


export const openModal = () => {
    return (dispatch) => {
        dispatch({
            type:OPEN_MODAL
        })
    }
}

export const closeModal = () => {
    return (dispatch) => {
        dispatch({
            type:CLOSE_MODAL
        })
    }
}