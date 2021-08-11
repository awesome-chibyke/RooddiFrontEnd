/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/heading-has-content */
/* eslint-disable no-script-url */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from "react";
import { LoginPost } from "../redux";
import { connect, useSelector, useDispatch } from "react-redux";
import { Route, Redirect, Switch, Link } from "react-router-dom";
import DelayedRedirect from "../components/Includes/DelayedRedirect";
import {getQueryParams} from "../UrlQueryString";
import ErrorSuccessHook from "../redux/ErrorSuccessHook";
const Login = () => {

  const [password, setPassword] = useState("");

  const [email, setEmail] = useState("");

  let passwordObject = { type: "password", class_name: "fa-eye-slash" }; //password display controller
  const [inputType, changePaswordInputType] = useState(passwordObject);

  let allStateObject = useSelector((state) => state); //get all the available states
  let { login } = allStateObject;

  const dispatch = useDispatch(); //for action dispatch

  const [mainForgotpasswordModalDiplay, setMainForgotpasswordModalDiplay] = useState("none");
  const [changePasswordModal, setChangePasswordModal] = useState("none");

  const toggleModal = (ModalToDisplay) => {
    //for modal toggling

    if(mainForgotpasswordModalDiplay === 'block'){setMainForgotpasswordModalDiplay('none')}

    if(ModalToDisplay === 'changePasswordModal'){
      setChangePasswordModal(changePasswordModal === 'none' ? 'block' :'none')
    }

  }

    //check errors
  const {error:errorMessage, success:successMessage} = ErrorSuccessHook(login.logout_success, login.error_message, login.message, login);
  // login.user_data.email_verification === null
  if(login.message_type === 'activate_account'){
    setTimeout(() => {
      window.location.href = `/activation/${login.user_data.email}`;
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
                    <h2 className="text-primary">Let's Get Started</h2>
                    <p className="mb-0">
                      Sign in to continue to CryptoCurrency.
                    </p>
                    <center>
                      <small className="text-success">
                        <i className="fa fa-warning" />
                        Please check that you are visiting the correct URL
                      </small>
                    </center>
                    <p />
                  </div>
                  <div>
                    <form action method="post">
                      <div className="form-group">
                        <div className="form-group">
                          {login.success_message === true && login.message_type === 'login_auth_email_phone' ? (
                            <DelayedRedirect
                              to={`/authentication/${login.user_data.email}`}
                              delay={500}
                            />
                          ) : (
                            ""
                          )}

                          {login.success_message === true && login.message_type === 'login_auth_app' ? (
                              <DelayedRedirect
                                  to={`/two_factor_authentication/${login.user_data.email}`}
                                  delay={500}
                              />
                          ) : (
                              ""
                          )}

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
                        </div>

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
                        <div className="col-6">
                          <div className="checkbox ms-5">
                            <input type="checkbox" id="basic_checkbox_1" />
                            <label
                              htmlFor="basic_checkbox_1"
                              className="form-label"
                            >
                              Remember Me
                            </label>
                            <span className="error_displayer err_basic_checkbox_1"></span>
                          </div>
                        </div>
                        <div className="col-6">
                          <div className="fog-pwd text-end">
                            <a
                              href="javascript:void(0)"
                              className="hover-warning"
                              onClick={() => setMainForgotpasswordModalDiplay(mainForgotpasswordModalDiplay === 'none' ? 'block' :'none')}
                            >
                              <i className="ion ion-locked" /> Forgot password?
                            </a>
                            <br />
                          </div>
                        </div>

                        <div className="col-12 text-center">
                          <button
                            type="button"
                            disabled={login.loading === true ? true : false}
                            onClick={async (e) => {
                              dispatch(
                                await LoginPost({
                                  email: email,
                                  password: password,
                                })
                              );
                            }}
                            className="btn btn-info w-p100 mt-15"
                          >
                            {login.loading === true
                              ? login.message
                              : "Login"}
                          </button>
                        </div>
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
                {/*<div className="text-center">
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
                </div>*/}
              </div>
            </div>
          </div>
        </section>
        {/* main Modal  */}
        <div style={{display:mainForgotpasswordModalDiplay}} class="modal">

          {/* Modal content*/}
          <div class="modal-content modal-width-control">
            <div class="modal-header">
              <span onClick={() => setMainForgotpasswordModalDiplay(mainForgotpasswordModalDiplay === 'none' ? 'block' :'none')} class="close">&times;</span>
              <h2></h2>
            </div>
            <div class="modal-body">
              <div className="text-center" onClick={() => {  toggleModal('changePasswordModal') }}  style={{fontSize:"20px", cursor:"pointer", fontWeight:"bold", marginBottom:"20px"}}> <i className="fa fa-asterisk" aria-hidden="true"></i> Forgot Password? </div>

              <div className="text-center " style={{fontSize:"20px", cursor:"pointer", fontWeight:"bold", marginBottom:"20px"}}><a href="/disable_two_factor"><i className="fa fa-asterisk" aria-hidden="true"></i>  Disable Two Factor</a></div>
            </div>
            <div class="modal-footer">
              <h3>Modal Footer</h3>
            </div>
          </div>

        </div>

         {/* Modal */}
        <div style={{display:changePasswordModal}} class="modal">
           Modal content
          <div class="modal-content modal-width-control">

            <div class="modal-header">
              <span onClick={() => setChangePasswordModal(changePasswordModal === 'none' ? 'block' :'none')} class="close">&times;</span>
              <h2></h2>
            </div>

            <div class="modal-body">
              <div className="col-sm-12">

                <div className="text-center"  style={{fontSize:"20px", cursor:"pointer", fontWeight:"bold", marginBottom:"20px"}}>  <a href="/forgotpassword"><i className="fa fa-asterisk" aria-hidden="true"></i> Email Authentication?</a></div>

                <div className="text-center " style={{fontSize:"20px", cursor:"pointer", fontWeight:"bold", marginBottom:"20px"}}><a href="/forgotpassword_two_factor"><i className="fa fa-asterisk" aria-hidden="true"></i> Two Factor Authentication</a></div>

              </div>
            </div>
            <div class="modal-footer">
              <h3>Modal Footer</h3>
            </div>
          </div>

        </div>

      </div>
    </>
  );
};

export default Login;