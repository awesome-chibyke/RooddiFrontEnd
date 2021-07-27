/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/heading-has-content */
/* eslint-disable no-script-url */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import { ResendActivationPost, ActivationPost } from "../redux";
import { connect, useSelector, useDispatch  } from "react-redux";
import { Route, Redirect, useParams } from "react-router-dom";
import DelayedRedirect from "../components/Includes/DelayedRedirect";
import {
  browserName,
  browserVersion,
  osName,
  osVersion,
} from "react-device-detect";

const AcccountActivation = () => {

  const [token, setToken] = useState("");
  let deviceDetails = `${browserName} V${browserVersion} (${osName} ${osVersion})`;
  let { email } = useParams(); //get the email parameter from the url

  let passwordObject = { type: "password", class_name: "fa-eye-slash" };
  const [inputType, changePaswordInputType] = useState(passwordObject);

  let allStateObject = useSelector(state => state);
  let {registration:registrationData, activation:activationData} = allStateObject;

  const dispatch = useDispatch();//for action dispatch


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
                    <p className="mb-0">Lets Get Your Account Activated</p>
                    <center>
                      <small className="text-success">
                        <i className="fa fa-warning" /> Please provide the 4
                        digit code sent to your email
                      </small>
                    </center>
                    <p />
                  </div>
                  <div className="p-20">
                    <form action method="post">
                      <div className="form-group">

                        {registrationData.success_message === true && activationData.success === false ? (
                            <p className="alert alert-success text-center">
                              {registrationData.message}
                            </p>
                        ) : (
                            ""
                        )}

                        {activationData.success === true ? (
                          <p className="alert alert-success text-center">
                            {activationData.message}
                          </p>
                        ) : (
                          ""
                        )}

                        {activationData.error === true ? (
                          <p className="alert alert-danger">
                            {activationData.message}
                          </p>
                        ) : (
                          ""
                        )}

                        {activationData.success === true ? <DelayedRedirect to={`/authenticate`} delay={500} />  :'' }

                      </div>
                      <div className="form-group">
                        <div className="input-group mb-15">
                          <span className="input-group-text bg-transparent">
                            <i className="fa fa-asterisk" />
                          </span>
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
                            onClick={async () => dispatch( await ResendActivationPost(email))}
                            style={{
                              width: "100%",
                              color: "green",
                              textAlign: "right",
                              cursor: "pointer",
                            }}
                            className="text-right"
                          >
                            {activationData.loading === true
                              ? activationData.message
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
                            disabled={activationData.activation_loading === true
                                ? true
                                : false}
                            onClick={async () =>
                                dispatch( await ActivationPost({
                                token: token,
                                email: email,
                                device_name: deviceDetails,
                              }) )
                            }
                            className="btn btn-primary w-p100 mt-15"
                          >
                            {activationData.activation_loading === true
                              ? activationData.message
                              : "Activate Account"}
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

export default AcccountActivation;
