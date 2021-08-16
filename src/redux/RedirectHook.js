/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";

const RedirectHook = (RedirectState, stateToWatch) => {

    const [redirect, setRedirect] = useState(false);

    useEffect(() => {
        if(RedirectState === true){
            setRedirect(true);
        }else{
            setRedirect(false);
        }
    }, [stateToWatch]);

    return redirect;

}

export default RedirectHook;
