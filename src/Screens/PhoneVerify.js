/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/heading-has-content */
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  savePhonePost,
  // ResendVerificationCodePost,
  // ValidatePhonePost,
  resetPhoneState,
} from "../redux";
import DelayedRedirect from "../components/Includes/DelayedRedirect";
import ErrorSuccessHook from "../redux/ErrorSuccessHook";
import Stepper from "../components/Includes/Stepper";
import StepperHook from "../redux/StepperHook";
import { allCountryCode } from "../components/Includes/AllCountryCodeArray";
import CoutryCode from "../components/Includes/CountryCode";

const PhoneVerify = () => {
  const dispatch = useDispatch();
  const allStateObject = useSelector((state) => state);
  let { login: loginData, PhoneVerify, getCurrency } = allStateObject;
  const { user: userData } = loginData.user_data;

  let defaultCountryCode = { value: "+234", label: "Nigeria" };
  for (let i in allCountryCode) {
    if (
      allCountryCode[i].label.toLowerCase() ===
      getCurrency.default_currency.country_name.toLowerCase()
    ) {
      defaultCountryCode = allCountryCode[i];
    }
  }

  const [phone, setPhone] = useState("");
  const [country_code, setCountryCode] = useState(defaultCountryCode);
  // const [token, setToken] = useState("");

  let loadingStatus = false;
  if (PhoneVerify.loading === true) {
    loadingStatus = true;
  }

  const { error: errorMessage, success: successMessage } = ErrorSuccessHook(
    PhoneVerify.success,
    PhoneVerify.error,
    PhoneVerify.message,
    PhoneVerify,
    loadingStatus
  );

  useEffect(() => {
    return () => {
      dispatch(resetPhoneState());
    };
  }, []);//userData

  //Stepper setup
  const {step, stepperArray, validationArray, titleArray, linkArray} = StepperHook(userData);

  const [selectedStepper, setSelectedStepper] = useState(step);


  return (
    <>
      {/*Redirect to login if isLogged is false  */}
      {loginData.isLogged === false ? (
        <DelayedRedirect to={`/login`} delay={500} />
      ) : (
        ""
      )}

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
      {/* Save Phone section start */}
      {/* {loginData.user_data.user.phone !== null ? (
        ""
      ) : ( */}
      <div className="row" style={{marginTop:"50px"}}>
        <div className="col-12 col-sm-3"></div>
        <div className="col-12 col-sm-6">
          <Stepper
            selectedStepper={selectedStepper}
            setSelectedStepper={setSelectedStepper}
            stepperArray={stepperArray}
            titleArray={titleArray}
            linkArray={linkArray}
          />
        </div>
      </div>
      <section className="py-50" style={{ backgroundColor: "#fafbfd" }}>
        <div className="container">
          <div className="row justify-content-center g-0">
            <div className="col-lg-5 col-md-5 col-12">
              <div className="box box-body">
                <div className="content-top-agile pb-0 pt-20">
                  <h2 className="text-primary">Verify Your Phone</h2>
                </div>
                <div>
                  <form action method="post">
                    <div className="form-group">
                      {PhoneVerify.success === true ||
                      loginData.user_data.user.phone !== null ? (
                        <DelayedRedirect
                          to={`/validate_phone`}
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
                    <div className="form-group">

                      <div className="col-4 col-sm-4" style={{display:"inline-block"}}>
                        {/*<label>Country Code</label>*/}
                        <CoutryCode
                            selectedCountry={country_code}
                            setCountry={setCountryCode}
                        />
                      </div>
                      <div className="col-8 col-sm-8" style={{display:"inline-block"}}>
                        <div className="input-group mb-15">
                          {/*<label for="phone">Phone Number</label>*/}
                          <input
                              id="phone"
                              className="form-control ps-15 bg-transparent"
                              value={phone}
                              placeholder="Phone Number"
                              onChange={(e) => setPhone(e.target.value)}
                          />
                        </div>
                      </div>
                      <div className="col-12 col-sm-12" >
                        <div className="err_country_code error_displayer"></div>
                        <div className="error_displayer err_phone"></div>
                      </div>
                    </div>

                    <div className="form-group">
                      <div
                        className="col-4 col-sm-4"
                        style={{ display: "inline-block" }}
                      >

                      </div>
                      <span className="error_displayer err_country_code"></span>
                    </div>

                    <div className="row">
                      <div className="col-12 text-center">
                        <button
                          type="button"
                          className="btn btn-info w-p100 mt-15"
                          onClick={async (e) => {
                            dispatch(
                              await savePhonePost({
                                loginData,
                                phone: phone,
                                country_code: country_code,
                              })
                            );
                          }}
                        >
                          {PhoneVerify.loading === true
                            ? "Verifying Phone....."
                            : "Submit"}
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* )} */}

      {/* Validate phone section */}

      {/* {PhoneVerify.success === true ||
      loginData.user_data.user.phone !== null ? (
        <section className="py-50" style={{ backgroundColor: "#fafbfd" }}>
          <div className="container">
            <div className="row justify-content-center g-0">
              <div className="col-lg-5 col-md-5 col-12">
                <div className="box box-body">
                  <div className="content-top-agile pb-0 pt-20">
                    <h2 className="text-primary">Vaidate Your Phone</h2>
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
                          <p className="alert alert-danger">{errorMessage}</p>
                        )}
                      </div>
                      <div className="form-group">
                        <label>Phone</label>
                        <div className="input-group mb-15">
                          <input
                            id="phone"
                            className="form-control ps-15 bg-transparent"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                          />
                        </div>
                        <span className="error_displayer err_phone"></span>
                      </div>

                      <div className="form-group">
                        <label>Country Code</label>
                        <div className="input-group mb-15">
                          <input
                            id="country_code"
                            className="form-control ps-15 bg-transparent"
                            value={country_code}
                            onChange={(e) => setCountryCode(e.target.value)}
                          />
                        </div>
                        <span className="error_displayer err_country_code"></span>
                      </div>
                      <div className="form-group">
                        <div className="input-group mb-15">
                          <span className="input-group-text bg-transparent">
                            <i className="fa fa-asterisk" />
                          </span>
                          <input type="hidden" id="phone" />
                          <input
                            id="token"
                            className="form-control ps-15 bg-transparent"
                            placeholder="Enter Token"
                            value={token}
                            onChange={(e) => setToken(e.target.value)}
                          />

                          <input type="hidden" value={phone} />

                          <small
                            onClick={async () =>
                              dispatch(
                                await ResendVerificationCodePost({
                                  loginData,
                                  phone,
                                })
                              )
                            }
                            style={{
                              width: "100%",
                              color: "green",
                              textAlign: "right",
                              cursor: "pointer",
                            }}
                            className="text-right"
                          >
                            {PhoneVerify.resend_code_loading === true
                              ? PhoneVerify.message
                              : "Resend Token"}
                          </small>
                        </div>
                        <span className="error_displayer err_token"></span>
                        <span className="error_displayer err_phone"></span>
                      </div>
                      <div className="row">
                        <div className="col-12 text-center">
                          <button
                            type="button"
                            disabled={loginData.loading === true ? true : false}
                            onClick={async () =>
                              dispatch(
                                await ValidatePhonePost({
                                  loginData,
                                  token: token,
                                  phone: phone,
                                  country_code: country_code,
                                })
                              )
                            }
                            className="btn btn-primary w-p100 mt-15"
                          >
                            Validate Phone
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      ) : (
        ""
      )} */}
    </>
  );
};

export default PhoneVerify;
