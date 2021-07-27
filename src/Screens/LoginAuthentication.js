
import React, { useState } from "react";
import {
  ResendAuthenticationPost,
  AuthenticationPost,
} from "../redux/Xetima/LoginAuth/AuthActionCreator";
import { connect, useSelector, useDispatch  } from "react-redux";
import { Route, Redirect, useParams } from "react-router-dom";
import DelayedRedirect from "../components/Includes/DelayedRedirect";
import {
  browserName,
  browserVersion,
  osName,
  osVersion,
} from "react-device-detect";

const AcccountAuthentication = ({
  submitAuthenticationToken,
  authenticationData,
  loginData,
  resendAuthenticationToken,
}) => {
  const [token, setToken] = useState("");
  let deviceDetails = `${browserName} V${browserVersion} (${osName} ${osVersion})`;
  let { email } = useParams(); //get the email parameter from the url

  let passwordObject = { type: "password", class_name: "fa-eye-slash" };
  const [inputType, changePaswordInputType] = useState(passwordObject);

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
                        {loginData.success_message === true ? (
                          <p className="alert alert-success text-center">
                            {loginData.message}
                          </p>
                        ) : (
                          ""
                        )}

                        {/*{email === null ? <DelayedRedirect to={`/login`} delay={1000} />  :'' }*/}

                        {loginData.error === true ? (
                          <p className="alert alert-danger">
                            {loginData.message}
                          </p>
                        ) : (
                          ""
                        )}
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
                            onClick={() => resendAuthenticationToken(email)}
                            style={{
                              width: "100%",
                              color: "green",
                              textAlign: "right",
                              cursor: "pointer",
                            }}
                            className="text-right"
                          >
                            {loginData.loading === true
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
                            onClick={() =>
                              submitAuthenticationToken({
                                token: token,
                                email: email,
                                device_name: deviceDetails,
                              })
                            }
                            className="btn btn-primary w-p100 mt-15"
                          >
                            {authenticationData.authenticate_loading === true
                              ? authenticationData.message
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

const mapStateToProps = (state) => {
  return {
    loginData: state.login,
    authenticationData: state.authentication,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    submitAuthenticationToken: async (obj) =>
      dispatch(await AuthenticationPost(obj)),
    resendAuthenticationToken: async (email) =>
      dispatch(await ResendAuthenticationPost(email)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AcccountAuthentication);
