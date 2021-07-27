/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/heading-has-content */
/* eslint-disable no-script-url */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from "react";
import { LoginPost } from "../redux/Xetima/Login/LoginActionCreator";
import { connect } from "react-redux";
// import { Route, Redirect } from "react-router-dom";
import DelayedRedirect from "../components/Includes/DelayedRedirect";
const Login = ({ userData, submitUser, location, history }) => {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [confirmation, setConfirmation] = useState(false);
  let passwordObject = { type: "password", class_name: "fa-eye-slash" };
  const [inputType, changePaswordInputType] = useState(passwordObject);

  // const redirect = location.search ? location.search.split("=")[1] : "/";

  // useEffect(() => {
  //   if (userData) {
  //     history.push(redirect);
  //   }
  // }, [history, userData, redirect]);

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
                    <h2 className="text-primary">Let's Get Started</h2>
                    <p className="mb-0">
                      Sign in to continue to CryptoCurrency.
                    </p>
                    <center>
                      <small className="text-success">
                        <i className="fa fa-warning" /> Please check that you
                        are visiting the correct URL
                      </small>
                    </center>
                    <p />
                  </div>
                  <div className="p-40">
                    <form action method="post">
                      <div className="form-group">
                        {userData.success_message === true ? (
                          <p className="alert alert-success text-center">
                            {userData.message}
                          </p>
                        ) : (
                          ""
                        )}

                        {userData.success_message === true ? (
                          <DelayedRedirect
                            to={`/authentication/${userData.user_data.email}`}
                            delay={5000}
                          />
                        ) : (
                          ""
                        )}

                        {userData.error_message === true ? (
                          <p className="alert alert-danger  text-center">
                            {userData.message}
                          </p>
                        ) : (
                          ""
                        )}
                        <div className="input-group mb-15">
                          <span className="input-group-text bg-transparent">
                            <i className="ti-email" />
                          </span>
                          <input
                            type="email"
                            className="form-control ps-15 bg-transparent"
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                          />
                        </div>
                      </div>
                      <div className="form-group">
                        <div className="input-group mb-15">
                          <span className="input-group-text  bg-transparent">
                            <i className="ti-lock" />
                          </span>
                          <input
                            type="password"
                            className="form-control ps-15 bg-transparent"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
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
                        </div>
                        <span className="error_displayer err_password"></span>
                      </div>
                      <div className="row">
                        <div className="col-6">
                          <div className="checkbox ms-5">
                            <input
                              type="checkbox"
                              id="basic_checkbox_1"
                              onClick={(e) => {
                                setConfirmation(
                                  e.target.checked === true ? true : false
                                );
                              }}
                            />
                            <label
                              htmlFor="basic_checkbox_1"
                              className="form-label"
                            >
                              Remember Me
                            </label>
                            <span className="error_displayer err_basic_checkbox_1"></span>
                          </div>
                        </div>
                        {/* /.col */}
                        <div className="col-6">
                          <div className="fog-pwd text-end">
                            <a
                              href="javascript:void(0)"
                              className="hover-warning"
                            >
                              <i className="ion ion-locked" /> Forgot password?
                            </a>
                            <br />
                          </div>
                        </div>
                        {/* /.col */}
                        <div className="col-12 text-center">
                          <button
                            type="button"
                            onClick={() =>
                              submitUser({
                                email: email,
                                password: password,
                                confirmation: confirmation,
                              })
                            }
                            className="btn btn-info w-p100 mt-15"
                          >
                            {userData.loading === true
                              ? userData.message
                              : "Sign In"}
                          </button>
                        </div>
                        {/* /.col */}
                      </div>
                    </form>
                    <div className="text-center">
                      <p className="mt-15 mb-0">
                        Don't have an account?{" "}
                        <a href="register" className="text-warning ms-5">
                          Register
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="text-center">
                  <p className="mt-20">- Login With -</p>
                  <p className="d-flex gap-items-2 mb-0 justify-content-center">
                    <a
                      className="btn btn-social-icon btn-round btn-facebook"
                      href="#"
                    >
                      <i className="fa fa-facebook" />
                    </a>
                    <a
                      className="btn btn-social-icon btn-round btn-twitter"
                      href="#"
                    >
                      <i className="fa fa-twitter" />
                    </a>
                    <a
                      className="btn btn-social-icon btn-round btn-instagram"
                      href="#"
                    >
                      <i className="fa fa-instagram" />
                    </a>
                  </p>
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
    userData: state.login,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    submitUser: async (obj) => dispatch(await LoginPost(obj)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
