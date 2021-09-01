/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/heading-has-content */
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  ResendVerificationCodePost,
  ValidatePhonePost,
  resetPhoneState,
} from "../redux";
import DelayedRedirect from "../components/Includes/DelayedRedirect";
import ErrorSuccessHook from "../redux/ErrorSuccessHook";
import Stepper from "../components/Includes/Stepper";

const ValidatePhone = () => {
  const dispatch = useDispatch();
  const allStateObject = useSelector((state) => state);
  let { login: loginData, PhoneVerify } = allStateObject;
  const { user: userData } = loginData.user_data;

  let userPhone =  userData.phone
  let countryCode = userData.country_code;
  

//   const [phone, setPhone] = useState("");
//   const [country_code, setCountryCode] = useState("");
  const [token, setToken] = useState("");

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
  }, []);

  let validtionArray = userData.verifiation_details_object.verification_steps

  let accountVericationStep = userData.account_verification_step

  let Account_Activation, Phone_Number_Activation, Edit_Profile, Upload_Face, Upload_ID, Completed;

  [Account_Activation, Phone_Number_Activation, Edit_Profile, Upload_Face, Upload_ID, Completed] = validtionArray;
  let step;
  
  step = validtionArray.indexOf(accountVericationStep);
  //Stepper setup
  const [selectedStepper, setSelectedStepper] = useState(step+1);
  const stepperArray = [0, 1, 2, 3, 4, 5];
  const titleArray = [Account_Activation, Phone_Number_Activation, Edit_Profile, Upload_Face, Upload_ID, Completed ];
  const linkArray = ['/activation/:email', '/phone_verify', '/profile', '/upload_face', '/upload_id', '/completed'];

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

      {/* Validate phone section */}
      <div className="row">
        <div className='col-12 col-sm-12'>
            <Stepper selectedStepper={selectedStepper} setSelectedStepper={setSelectedStepper} stepperArray={stepperArray} titleArray={titleArray} linkArray={linkArray} />
        </div>
      </div>
      {PhoneVerify.success === true ||
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
                      {/* <div className="form-group">
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
                      </div> */}
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

                          <small
                            onClick={() =>
                              dispatch(
                                ResendVerificationCodePost({loginData, userPhone, countryCode})
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
                           Resend Token
                          </small>
                        </div>
                        <span className="error_displayer err_token"></span>
                      </div>
                      <div className="row">
                        <div className="col-12 text-center">
                          <button
                            type="button"
                            onClick={async () =>
                              dispatch(
                                await ValidatePhonePost({loginData, token, userPhone, countryCode})
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
      )}
    </>
  );
};

export default ValidatePhone;
