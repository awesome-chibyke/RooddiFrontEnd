import React, { useState, useEffect } from "react";

const ErrorSuccessHook = (SuccessState, ErrorState, Message, stateToWatch) => {

    const [error, setErrorMessage] = useState(null);
    const [success, setSuccessMessage] = useState(null);

    useEffect(() => {
        if(SuccessState === true){
            setErrorMessage(null)
            setSuccessMessage(Message);
        }
        if(ErrorState === true){
            setErrorMessage(Message)
            setSuccessMessage(null);
        }
    }, [stateToWatch]);

    return {error, success};

}

export default ErrorSuccessHook;