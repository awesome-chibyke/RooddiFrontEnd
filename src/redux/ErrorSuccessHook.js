/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";

const ErrorSuccessHook = (SuccessState, ErrorState, Message, stateToWatch, loading = false) => {

    const [error, setErrorMessage] = useState(null);
    const [success, setSuccessMessage] = useState(null);

    useEffect(() => {
        if(loading === false){
            if(SuccessState === true){
                setErrorMessage(null)
                setSuccessMessage(Message);
            }
            if(ErrorState === true){
                setErrorMessage(Message)
                setSuccessMessage(null);
            }
        }else{
            setErrorMessage(null)
            setSuccessMessage(null);
        }

    }, [stateToWatch]);

    return {error, success};

}

export default ErrorSuccessHook;