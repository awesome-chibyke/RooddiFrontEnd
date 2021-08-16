import React, { useState } from 'react';
import { useSelector, useDispatch  } from "react-redux";
import DelayedRedirect from "../components/Includes/DelayedRedirect";
import DynamiicModal from "../components/DynamiicModal";
import Try from "../components/Try";
import Try_ from "../components/Try_";


const ForgetPasswordOptions = () => {

    let dispatch = useDispatch();

    return (
        <>
            <div className="col-sm-12">

                <div className="text-center"  style={{fontSize:"15px", cursor:"pointer", fontWeight:"bold", marginBottom:"20px"}}>  <a href="/forgotpassword"><i className="fa fa-asterisk" aria-hidden="true"></i> Use Email Authentication?</a></div>

                <div className="text-center " style={{fontSize:"15px", cursor:"pointer", fontWeight:"bold", marginBottom:"20px"}}><a href="/forgotpassword_two_factor"> <i className="fa fa-asterisk" aria-hidden="true"></i> Use Two Factor Authentication</a></div>

            </div>
        </>
    );
};

export default ForgetPasswordOptions;