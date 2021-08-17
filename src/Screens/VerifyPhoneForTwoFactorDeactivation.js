import React, { useState, useEffect } from "react";
import {
    sendPhoneForTwoFactorDeactivationPost,
    sendPhoneTokenForTwoFactorDeactivationPost
} from "../redux";

import { useSelector, useDispatch } from "react-redux";
import DelayedRedirect from "../components/Includes/DelayedRedirect";
import ErrorSuccessHook from "../redux/ErrorSuccessHook";
import RedirectHook from "../redux/RedirectHook";
import TwoFactorAuthForPasswordChange from "./TwoFactorAuthForPasswordChange";
import CoutryCode from "../components/Includes/CountryCode";
import {allCountryCode} from "../components/Includes/AllCountryCodeArray";

const  VerifyPhoneForTwoFactorDeactivation = () => {

    const allState = useSelector(state => state);
    let {TwoFactorDeactivationState, getCurrency} = allState;

    const [phone, setPhone] = useState('');
    const [token, setToken] = useState('');


    let defaultCountryCode = {"value": "+234",  "label": "Nigeria"};
    for(let i in allCountryCode){
        if(allCountryCode[i].label.toLowerCase() === getCurrency.default_currency.country_name.toLowerCase()){
            defaultCountryCode = allCountryCode[i];
        }
    }
    const [country_code, setCountryCode] = useState(defaultCountryCode);

    const dispatch = useDispatch();

    let passwordObject = { type: "password", class_name: "fa-eye-slash" }; //password display controller
    const [inputType, changePaswordInputType] = useState(passwordObject);

    //check errors
    let loadingStatus = false;
    if(TwoFactorDeactivationState.verify_email_loading === true || TwoFactorDeactivationState.verify_phone_loading === true){
        loadingStatus = true;
    }
    const {error:errorMessage, success:successMessage} = ErrorSuccessHook(TwoFactorDeactivationState.success, TwoFactorDeactivationState.error, TwoFactorDeactivationState.message, TwoFactorDeactivationState, loadingStatus);

    const redirect = RedirectHook(TwoFactorDeactivationState.verify_phone_token_status, TwoFactorDeactivationState);

    return (
        <>
            <section
                className="bg-dark-body bg-food-white pt-80 pb-20"
                data-overlay={7}
            >
                <div className="container">
                    <div className="row">
                        <div className="col-12 bg-food-white">
                            <div className="text-center">
                                <h2 className="page-title text-white" />
                                <ol className="breadcrumb bg-transparent justify-content-center">
                                    <li
                                        className="breadcrumb-item text-white active"
                                        aria-current="page"
                                    />
                                </ol>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-50" style={{ backgroundColor: "#fafbfd" }}>
                <div className="container">
                    <div className="row justify-content-center g-0">
                        <div className="col-lg-5 col-md-5 col-12">
                            <div className="box box-body">
                                <div className="content-top-agile pb-0 pt-20">
                                    <h2 className="text-primary">Verify Email Address for Two Factor Deactivation</h2>
                                    {/*<p className="mb-0">
                                            Forgot Password
                                        </p>*/}
                                    <center>
                                        {TwoFactorDeactivationState.verify_phone_status === false ? (
                                            <small className="text-success">
                                                <i className="fa fa-warning" />
                                                Please provide Your email address attached to your account
                                            </small>
                                            ) : ('')}

                                        {TwoFactorDeactivationState.verify_phone_status === true ? (
                                            <small className="text-success">
                                            <i className="fa fa-warning" />
                                            Please provide the phone number attached to your account
                                            </small>
                                            ) : ('')}
                                    </center>
                                    <p />
                                </div>

                                <div>
                                    <form action method="post">

                                        <div className="form-group">
                                            <div className="form-group">


                                                {errorMessage && (
                                                    <p className="alert alert-danger  text-center">
                                                        {errorMessage}
                                                    </p>
                                                )}

                                                {successMessage && (
                                                    <p className="alert alert-success  text-center">
                                                        {successMessage}
                                                    </p>
                                                )}

                                                {redirect === true ? (
                                                    <DelayedRedirect
                                                        to={`/login`}
                                                        delay={4000}
                                                    />
                                                ) : (
                                                    ""
                                                )}

                                            </div>

                                        </div>

                                        <div className="form-group">

                                            {TwoFactorDeactivationState.verify_phone_status === false ? (
                                                <>
                                                <div className="col-4 col-sm-4" style={{display:"inline-block"}}>
                                                    <CoutryCode selectedCountry={country_code}  setCountry={setCountryCode} />
                                                </div>
                                                <div className="col-8 col-sm-8" style={{display:"inline-block"}}>

                                                    <input

                                                        type="text"
                                                        id="phone"
                                                        className="form-control ps-15 bg-transparent"
                                                        placeholder="Phone"
                                                        value={phone}
                                                        onChange={(e) => setPhone(e.target.value)}
                                                    />

                                                </div>
                                                <div className="col-12 col-sm-12" >
                                                    <div className="err_country_code error_displayer"></div>
                                                    <div className="error_displayer err_phone"></div>
                                                </div>
                                                </>
                                            ) : ('')}

                                            {TwoFactorDeactivationState.verify_phone_status === true ? (
                                                <>
                                                    <div className="form-group">
                                                        <div className="input-group mb-15">
                                                              <span className="input-group-text  bg-transparent">
                                                                <i className="ti-lock" />
                                                              </span>
                                                            <input
                                                                id="token"
                                                                className="form-control ps-15 bg-transparent"
                                                                placeholder="Token"
                                                                value={token}
                                                                onChange={(e) => setToken(e.target.value)}
                                                                type={inputType.type}
                                                            />
                                                            <span
                                                                onClick={(e) =>
                                                                    changePaswordInputType({
                                                                        type:
                                                                            inputType.type === "text"
                                                                                ? "password"
                                                                                : "text",
                                                                        class_name:
                                                                            inputType.class_name === "fa-eye"
                                                                                ? "fa-eye-slash"
                                                                                : "fa-eye",
                                                                    })
                                                                }
                                                                className="passwordChanger"
                                                            >
                                                                    <i className={`fa ${inputType.class_name}`}> </i>
                                                                  </span>
                                                            <span className="passwordChanger"></span>
                                                        </div>
                                                        <span className="error_displayer err_phone"></span>
                                                    </div>
                                                </>
                                            ) : ('')}



                                        </div>

                                        <div className="row">
                                            {TwoFactorDeactivationState.verify_phone_status === false ? (
                                                <div className="col-12 text-center">
                                                    <button
                                                        type="button"
                                                        disabled={TwoFactorDeactivationState.verify_phone_loading === true ? true : false}
                                                        onClick={() => {
                                                            dispatch(
                                                                sendPhoneForTwoFactorDeactivationPost({phone, token, country_code, email:TwoFactorDeactivationState.email})
                                                            );
                                                        }}
                                                        className="btn btn-info w-p100 mt-15"
                                                    >
                                                        {TwoFactorDeactivationState.verify_phone_loading === true
                                                            ? TwoFactorDeactivationState.message
                                                            : "Verify Phone Number"}
                                                    </button>
                                                </div>
                                            ) : ('')}


                                            {TwoFactorDeactivationState.verify_phone_status === true ? (
                                                <div className="col-12 text-center">
                                                    <button
                                                        type="button"
                                                        disabled={TwoFactorDeactivationState.verify_phone_token_loading === true ? true : false}
                                                        onClick={async () => {
                                                            dispatch(
                                                                sendPhoneTokenForTwoFactorDeactivationPost({phone, token, country_code, email:TwoFactorDeactivationState.email})
                                                            );
                                                        }}
                                                        className="btn btn-info w-p100 mt-15"
                                                    >
                                                        {TwoFactorDeactivationState.verify_phone_token_loading === true
                                                            ? TwoFactorDeactivationState.message
                                                            : "Verify Token"}
                                                    </button>
                                                </div>
                                            ) : ('')}



                                        </div>

                                    </form>

                                    <div className="text-center">
                                        <p className="mt-15 mb-0">
                                            <a href="/login" className="text-warning ms-5">
                                                Login
                                            </a>
                                        </p>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
        </>
    )

}

export default VerifyPhoneForTwoFactorDeactivation;