/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/heading-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import { RegisterPost } from "../redux";
import { connect, useSelector, useDispatch } from "react-redux";
import { Route, Redirect, Switch, Link  } from "react-router-dom";
import DelayedRedirect from "../components/Includes/DelayedRedirect";
import ErrorSuccessHook from "../redux/ErrorSuccessHook";

const Register = () => {

  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [disabled, setDisabled] = useState(false);
  const [confirmation, setConfirmation] = useState(false);
  let passwordObject = { type: "password", class_name: "fa-eye-slash" };
  const [inputType, changePaswordInputType] = useState(passwordObject);


  let allStateObject = useSelector(state => state);
  let {registration} = allStateObject;

  const dispatch = useDispatch();//for action dispatch

  const {error:errorMessage, success:successMessage} = ErrorSuccessHook(registration.success_message, registration.error_message, registration.message, registration);

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
                    <h2 className="text-primary">Get started with Us</h2>
                    <p className="mb-0">Register a New Membership</p>
                  </div>
                  <div>
                    <form action method="post">
                      <div className="form-group">

                        {successMessage && (
                            <p style={{marginTop:"10px"}} className="alert alert-success text-center">
                              {successMessage}
                            </p>
                        )}

                        {errorMessage && (
                            <p style={{marginTop:"10px"}} className="alert alert-danger text-center">
                              {errorMessage}
                            </p>
                        )}
                        {registration.register_status === true ? <DelayedRedirect to={`/activation/${registration.user_data.email}`} delay={500} />  :'' }
                      </div>
                      <div className="form-group">
                        <div className="input-group mb-15">
                          <span className="input-group-text bg-transparent">
                            <i className="ti-email" />
                          </span>
                          <input
                            type="email"
                            id="email"
                            className="form-control ps-15 bg-transparent"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Email"
                          />
                        </div>
                        <span className="error_displayer err_email"></span>
                      </div>
                      <div className="form-group">
                        <div className="input-group mb-15">
                          <span className="input-group-text bg-transparent">
                            <i className="ti-lock" />
                          </span>
                          <input
                            type={inputType.type}
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="form-control ps-15 bg-transparent"
                            placeholder="Password"
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
                      {/*<div className="form-group">
                        <div className="input-group mb-15">
                          <span className="input-group-text bg-transparent">
                            <i className="ti-lock" />
                          </span>
                          <input
                            type="password"
                            id="password_confirmation"
                            value={password_confirmation}
                            onChange={(e) => setPasswordConfirmation(e.target.value)}
                            className="form-control ps-15 bg-transparent"
                            placeholder="Retype Password"

                          />
                        </div>
                        <span className="error_displayer err_password_confirmation"></span>
                      </div>*/}
                      <div className="row">
                        <div className="col-12">
                          <div className="checkbox ms-5">
                            {/*(e) => e.target.getAttribute("checked").checked ? false:true*/}
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
                              I agree to the{" "}
                              <a href="terms" className="text-warning">
                                <b>Terms</b>
                              </a>
                            </label>
                            <span className="error_displayer err_basic_checkbox_1"></span>
                          </div>
                        </div>
                        {/* /.col */}
                        <div className="col-12 text-center">
                          <button
                            type="button"
                            disabled={registration.loading === true
                                ? true
                                : false}
                            onClick={async (e) =>{
                              /*setDisabled(e.target.setAttribute("disabled", e.target.getAttribute("disabled") === false ? true:false ) )*/
                              dispatch(await RegisterPost({
                                email: email,
                                password: password,
                                referral_id: "",
                                confirmation: confirmation,
                              }) )
                            }

                            }
                            className="btn btn-info w-p100 mt-15"
                          >
                            {registration.loading === true
                              ? registration.message
                              : "Register"}
                          </button>
                        </div>
                        {/* /.col */}
                      </div>
                    </form>
                    <div className="text-center">
                      <p className="mt-15 mb-0">
                        Already have an account?
                        <Link to="/login" className="text-danger ms-5">
                          {" "}
                          <span>Login</span>
                        </Link>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="text-center">
                  <p className="mt-20">- Register With -</p>
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

export default Register;
