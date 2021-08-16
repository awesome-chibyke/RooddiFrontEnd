
/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/heading-has-content */
/* eslint-disable no-script-url */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from "react";
import { sendEmailPost, verifyTokenPost } from "../redux";
import { connect, useSelector, useDispatch } from "react-redux";
import { Route, Redirect, Switch, Link } from "react-router-dom";
import DelayedRedirect from "../components/Includes/DelayedRedirect";
import ErrorSuccessHook from "../redux/ErrorSuccessHook";
import RedirectHook from "../redux/RedirectHook";

const ForgotPassword = () => {

    const [token, setToken] = useState("");
    const [email, setEmail] = useState("");
    const [disabled, setDisabled] = useState(false);

    let passwordObject = { type: "password", class_name: "fa-eye-slash" };
    const [inputType, changePaswordInputType] = useState(passwordObject);

    let allStateObject = useSelector((state) => state);
    let { login, forgotpassword:forgotPasswordState } = allStateObject;

    //check errors
    let loadingStatus = false;
    if(forgotPasswordState.send_forgot_email_loading === true || forgotPasswordState.verify_token_loading === true || forgotPasswordState.change_password_loading === true){
        loadingStatus = true;
    }
    const {error:errorMessage, success:successMessage} = ErrorSuccessHook(forgotPasswordState.success, forgotPasswordState.error, forgotPasswordState.message, forgotPasswordState, loadingStatus);

    const dispatch = useDispatch(); //for action dispatch

    const redirect = RedirectHook(forgotPasswordState.verify_token_success, forgotPasswordState);

    return (

        <>
            <div>
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
                                        <h2 className="text-primary">Forgot Password</h2>
                                        {/*<p className="mb-0">
                                            Forgot Password
                                        </p>*/}
                                        <center>
                                            <small className="text-success">
                                                <i className="fa fa-warning" />
                                                Please provide your email address below to continue
                                            </small>
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
                                                            to={`/change_password}`}
                                                            delay={4000}
                                                        />
                                                    ) : (
                                                        ""
                                                    )}

                                                </div>

                                                {forgotPasswordState.initial_send_mail_status === false ? (
                                                    <>
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
                                                    </>
                                                ):''}

                                            </div>

                                            {forgotPasswordState.initial_send_mail_status === true ? (
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
                                                    <span className="error_displayer err_token"></span>
                                                </div>
                                                <small
                                                onClick={async () =>
                                                    dispatch(await sendEmailPost(forgotPasswordState.user_data.email))
                                                }
                                                style={{
                                                width: "100%",
                                                color: "green",
                                                textAlign: "right",
                                                cursor: "pointer",
                                            }}
                                                className="text-right"
                                                >
                                            {forgotPasswordState.send_forgot_email_loading === true
                                                ? forgotPasswordState.message
                                                : "Resend Mail"}
                                                </small>
                                                </>

                                            ) : ''}

                                            {forgotPasswordState.initial_send_mail_status === false ? (
                                                <div className="row">

                                                    <div className="col-12 text-center">
                                                        <button
                                                            type="button"
                                                            disabled={login.loading === true ? true : false}
                                                            onClick={async (e) => {
                                                                dispatch(
                                                                    await sendEmailPost(email)
                                                                );
                                                            }}
                                                            className="btn btn-info w-p100 mt-15"
                                                        >
                                                            {forgotPasswordState.send_forgot_email_loading === true
                                                                ? forgotPasswordState.message
                                                                : "Send Mail"}
                                                        </button>
                                                    </div>
                                                </div>
                                            ) : ''}

                                            {forgotPasswordState.initial_send_mail_status === true ? (
                                                <div className="row">

                                                    <div className="col-12 text-center">
                                                        <button
                                                            type="button"
                                                            disabled={forgotPasswordState.verify_token_loading === true ? true : false}
                                                            onClick={async (e) => {
                                                                dispatch(
                                                                    await verifyTokenPost(forgotPasswordState.user_data.email, token, forgotPasswordState.message_type)
                                                                );
                                                            }}
                                                            className="btn btn-info w-p100 mt-15"
                                                        >
                                                            {forgotPasswordState.verify_token_loading === true
                                                                ? forgotPasswordState.message
                                                                : "Verify Token"}
                                                        </button>

                                                    </div>
                                                </div>
                                            ) : ''}



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
            </div>

        </>
    );
};

export default ForgotPassword;
