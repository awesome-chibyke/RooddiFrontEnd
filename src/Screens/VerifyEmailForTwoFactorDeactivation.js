import React, { useState, useEffect } from "react";
import {
    sendEmailForTwoFactorDeactivationPost,
    verifyTokenSentToEmailForTwoFactorDeactivation,
    resetTwoFactorDeactivationState,
    ResendAuthenticationPost, resendEmailForTwoFactorDeactivationPost
} from "../redux";
import { useSelector, useDispatch } from "react-redux";
import DelayedRedirect from "../components/Includes/DelayedRedirect";
import ErrorSuccessHook from "../redux/ErrorSuccessHook";
import RedirectHook from "../redux/RedirectHook";
import VerifyPhoneForTwoFactorDeactivation from "./VerifyPhoneForTwoFactorDeactivation";

const  VerifyEmailForTwoFactorDeactivation = () => {

    const [email, setEmail] = useState('');
    const [token, setToken] = useState('');

    const dispatch = useDispatch();

    let passwordObject = { type: "password", class_name: "fa-eye-slash" }; //password display controller
    const [inputType, changePaswordInputType] = useState(passwordObject);

    const allState = useSelector(state => state);
    let {TwoFactorDeactivationState} = allState;

    //check errors
    let loadingStatus = false;
    if(TwoFactorDeactivationState.verify_email_loading === true || TwoFactorDeactivationState.verify_email_token_loading === true){
        loadingStatus = true;
    }
    const {error:errorMessage, success:successMessage} = ErrorSuccessHook(TwoFactorDeactivationState.success, TwoFactorDeactivationState.error, TwoFactorDeactivationState.message, TwoFactorDeactivationState, loadingStatus);

    const redirect = RedirectHook(TwoFactorDeactivationState.verify_email_token_status, TwoFactorDeactivationState);

    useEffect(() => {
        dispatch(resetTwoFactorDeactivationState());
    }, []);

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
                                        {TwoFactorDeactivationState.verify_email_status === false ? (
                                            <small className="text-success">
                                                <i className="fa fa-warning" />
                                                Please provide Your email address attached to your account
                                            </small>
                                            ) : ('')}

                                        {TwoFactorDeactivationState.verify_email_status === true ? (
                                            <small className="text-success">
                                            <i className="fa fa-warning" />
                                            Please provide the token sent to your email address
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
                                                        to={`/deactivate_two_factor_phone/${email}`}
                                                        delay={4000}
                                                    />
                                                ) : (
                                                    ""
                                                )}

                                            </div>

                                        </div>



                                            {TwoFactorDeactivationState.verify_email_status === false ? (
                                                <>
                                                <div className="form-group">
                                                    <div className="input-group mb-15">
                                                          <span className="input-group-text bg-transparent">
                                                            <i className="ti-email" />
                                                          </span>
                                                        <input
                                                            type="email"
                                                            id="email"
                                                            className="form-control ps-15 bg-transparent"
                                                            placeholder="Email"
                                                            value={email}
                                                            onChange={(e) => setEmail(e.target.value)}
                                                        />
                                                    </div>

                                                    <span className="error_displayer err_email"></span>
                                                </div>
                                                </>
                                            ) : ('')}

                                            {TwoFactorDeactivationState.verify_email_status === true ? (
                                                <>
                                                    <div className="form-group">
                                                        <div className="input-group mb-15">
                                                          <span className="input-group-text  bg-transparent">
                                                            <i className="fa fa-asterisk" />
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
                                                            <small
                                                                onClick={async () =>
                                                                    dispatch(await resendEmailForTwoFactorDeactivationPost(email))
                                                                }
                                                                style={{
                                                                    width: "100%",
                                                                    color: "green",
                                                                    textAlign: "right",
                                                                    cursor: "pointer",
                                                                }}
                                                                className="text-right"
                                                            >
                                                                {TwoFactorDeactivationState.resend_email_token_loading === true
                                                                    ? TwoFactorDeactivationState.message
                                                                    : "Resend Token"}
                                                            </small>

                                                        </div>
                                                        <span className="error_displayer err_token"></span>
                                                    </div>
                                                </>
                                            ) : ('')}

                                        <div className="row">
                                            {TwoFactorDeactivationState.verify_email_status === false ? (
                                                <div className="col-12 text-center">
                                                    <button
                                                        type="button"
                                                        disabled={TwoFactorDeactivationState.verify_email_loading === true ? true : false}
                                                        onClick={() => {
                                                            dispatch(
                                                                sendEmailForTwoFactorDeactivationPost(email)
                                                            );
                                                        }}
                                                        className="btn btn-info w-p100 mt-15"
                                                    >
                                                        {TwoFactorDeactivationState.verify_email_loading === true
                                                            ? TwoFactorDeactivationState.message
                                                            : "Verify Email"}
                                                    </button>
                                                </div>
                                            ) : ('')}

                                            {TwoFactorDeactivationState.verify_email_status === true ? (
                                                <div className="col-12 text-center">
                                                    <button
                                                        type="button"
                                                        disabled={TwoFactorDeactivationState.verify_email_token_loading === true ? true : false}
                                                        onClick={() => {
                                                            dispatch(
                                                                verifyTokenSentToEmailForTwoFactorDeactivation({email:TwoFactorDeactivationState.email, token})
                                                            );
                                                        }}
                                                        className="btn btn-info w-p100 mt-15"
                                                    >
                                                        {TwoFactorDeactivationState.verify_email_token_loading === true
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

export default VerifyEmailForTwoFactorDeactivation;