/* eslint-disable react-hooks/exhaustive-deps */

/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/heading-has-content */
/* eslint-disable no-script-url */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from "react";
import { sendEmailPost, verifyTokenPost, changePasswordPost, resetPasswordChangeKey } from "../redux";
import { connect, useSelector, useDispatch } from "react-redux";
import { Route, Redirect, Switch, Link } from "react-router-dom";
import DelayedRedirect from "../components/Includes/DelayedRedirect";
import ErrorSuccessHook from "../redux/ErrorSuccessHook";

const ChangePassword = () => {

    const [password, setPassword] = useState("");

    const [redirect, setRedirect] = useState(false);//redirect state

    let passwordObject = { type: "password", class_name: "fa-eye-slash" };
    const [inputType, changePaswordInputType] = useState(passwordObject);

    let allStateObject = useSelector((state) => state);
    let { login, forgotpassword:forgotPasswordState } = allStateObject;

    const dispatch = useDispatch(); //for action dispatch

    const {error:errorMessage, success:successMessage} = ErrorSuccessHook(forgotPasswordState.success, forgotPasswordState.error, forgotPasswordState.message, forgotPasswordState);

    useEffect(() =>{//use this the use effect to chenge component state
        if(forgotPasswordState.change_password_status === true){
            setRedirect(true);
            dispatch(resetPasswordChangeKey());
        }
    }, [forgotPasswordState])

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
                                        <h2 className="text-primary">Change Password</h2>
                                        {/*<p className="mb-0">
                                            Forgot Password
                                        </p>*/}
                                        <center>
                                            <small className="text-success">
                                                <i className="fa fa-warning" />
                                                Please provide your new password below
                                            </small>
                                        </center>
                                        <p />
                                    </div>
                                    <div>
                                        <form action method="post">

                                            <div className="form-group">
                                                <div className="form-group">


                                                    {successMessage && (
                                                        <p className="alert alert-success  text-center">
                                                            {successMessage}
                                                        </p>
                                                    )}

                                                    {errorMessage && (
                                                        <p className="alert alert-danger  text-center">
                                                            {errorMessage}
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
                                                <div className="input-group mb-15">
                                              <span className="input-group-text  bg-transparent">
                                                <i className="ti-lock" />
                                              </span>
                                                    <input
                                                        id="password"
                                                        className="form-control ps-15 bg-transparent"
                                                        placeholder="Password"
                                                        value={password}
                                                        onChange={(e) => setPassword(e.target.value)}
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
                                                <span className="error_displayer err_password"></span>
                                            </div>

                                            <div className="row">

                                                <div className="col-12 text-center">
                                                    <button
                                                        type="button"
                                                        disabled={forgotPasswordState.verify_token_loading === true ? true : false}
                                                        onClick={async (e) => {
                                                            dispatch(
                                                                await changePasswordPost({email:forgotPasswordState.user_data.email,token:forgotPasswordState.user_data.token,password,password_confirmation:password})
                                                            );
                                                        }}
                                                        className="btn btn-info w-p100 mt-15"
                                                    >
                                                        {forgotPasswordState.change_password_loading === true
                                                            ? forgotPasswordState.message
                                                            : "Submit"}
                                                    </button>

                                                </div>
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
            </div>

        </>
    );
};

export default ChangePassword;
