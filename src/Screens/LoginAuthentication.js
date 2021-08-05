/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/heading-has-content */
/* eslint-disable no-script-url */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from "react";
import {
  ResendAuthenticationPost,
  AuthenticationPost,
} from "../redux";
import { connect, useSelector, useDispatch } from "react-redux";
import { Route, Redirect, useParams } from "react-router-dom";
import DelayedRedirect from "../components/Includes/DelayedRedirect";
import {
  browserName,
  browserVersion,
  osName,
  osVersion,
} from "react-device-detect";
import ErrorSuccessHook from "../redux/ErrorSuccessHook";

const LoginAuthentication = () => {

  const [token, setToken] = useState("");
  let deviceDetails = `${browserName} V${browserVersion} (${osName} ${osVersion})`;
  let { email } = useParams(); //get the email parameter from the url

  let passwordObject = { type: "password", class_name: "fa-eye-slash" };
  const [inputType, changePaswordInputType] = useState(passwordObject);

  let allStateObject = useSelector((state) => state);
  let { login: loginData, authentication: authenticationData } = allStateObject;// all the available states

  const dispatch = useDispatch(); //for action dispatch

  //check errors
  const {error:errorMessage, success:successMessage} = ErrorSuccessHook(loginData.success_message, loginData.error_message, loginData.message, loginData);

  if(loginData.isLogged === true){
    setTimeout(() => {
      window.location.href = '/dashboard';
    }, 2000);
  }

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
                    <h2 className="text-primary">Welcome</h2>
                    <p className="mb-0">Lets Get Your Logged In</p>
                    <center>
                      <small className="text-success">
                        <i className="fa fa-warning" /> Please provide the 4
                        digit code sent to your email
                      </small>
                    </center>
                    <p />
                  </div>
                  <div>
                    <form action method="post">
                      <div className="form-group">
                        {successMessage && (
                          <p className="alert alert-success text-center">
                            {successMessage}
                          </p>
                        )}

                        {errorMessage && (
                          <p className="alert alert-danger">
                            {errorMessage}
                          </p>)
                        }

                        {/*{loginData.isLogged === true ? (
                          <DelayedRedirect to={`/dashboard`} delay={1500} />
                        ) : (
                          ""
                        )}*/}

                      </div>
                      <div className="form-group">
                        <div className="input-group mb-15">
                          <span className="input-group-text bg-transparent">
                            <i className="fa fa-asterisk" />
                          </span>
                          <input type="hidden" id="email" />
                          <input
                            type={inputType.type}
                            id="token"
                            className="form-control ps-15 bg-transparent"
                            placeholder="Enter Token"
                            value={token}
                            onChange={(e) => setToken(e.target.value)}
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
                          <input type="hidden" value={email} />

                          <small
                            onClick={async () =>
                              dispatch(await ResendAuthenticationPost(email))
                            }
                            style={{
                              width: "100%",
                              color: "green",
                              textAlign: "right",
                              cursor: "pointer",
                            }}
                            className="text-right"
                          >
                            {loginData.resend_code_loading === true
                              ? loginData.message
                              : "Resend Token"}
                          </small>
                        </div>
                        <span className="error_displayer err_token"></span>
                        <span className="error_displayer err_email"></span>
                      </div>
                      <div className="row">
                        {/* /.col */}
                        <div className="col-12 text-center">
                          <button
                            type="button"
                            disabled={
                              loginData.loading === true
                                ? true
                                : false
                            }
                            onClick={async () =>
                              dispatch(
                                await AuthenticationPost({
                                  token: token,
                                  email: email,
                                  device_name: deviceDetails,
                                })
                              )
                            }
                            className="btn btn-primary w-p100 mt-15"
                          >
                            {loginData.loading === true
                              ? loginData.message
                              : "Login Authentication"}
                          </button>
                        </div>
                        {/* /.col */}
                      </div>
                    </form>
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

export default LoginAuthentication;
