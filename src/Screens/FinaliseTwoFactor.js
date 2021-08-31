import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { finaliseTwoFactor, activateTwoFactorAction } from "../redux";
import DelayedRedirect from "../components/Includes/DelayedRedirect";
import ErrorSuccessHook from "../redux/ErrorSuccessHook";

const FinaliseTwoFactor = () => {
  const dispatch = useDispatch();

  const [token, setToken] = useState("");

  const allStateObject = useSelector((state) => state);
  let { login: loginData, twofactor } = allStateObject;
  const { barCode, otpauth_url } = twofactor;

  let splitted_otpauth_url = [];
  let secretCode = null;
  if (otpauth_url !== null) {
    splitted_otpauth_url = otpauth_url.split("=");
    secretCode = splitted_otpauth_url[1];
  }

  let loadingStatus = false;
  if(twofactor.loading === true){
    loadingStatus = true;
  }
  const { error: errorMessage, success: successMessage } = ErrorSuccessHook(
    twofactor.success,
    twofactor.error,
    twofactor,
    loadingStatus,
    loginData.message,
    loginData
  );

  useEffect(() => {
    dispatch(activateTwoFactorAction(loginData));
  }, []);

  return (
    <>
      {/*Redirect to login if isLogged is false  */}
      {loginData.isLogged === false ? (
        <DelayedRedirect to={`/login`} delay={500} />
      ) : (
        ""
      )}
      <div>
        <section
          className="bg-dark-body bg-food-white pt-120 pb-20"
          style={{ width: "100%", height: "auto", backgroundColor: "white" }}
        >
          <div className="text-center">
            <h3 className="text-white">Activate Two Factor</h3>
            <div className="row">
              <div className="col-1 col-sm-4"></div>
              <div className="col-10 col-sm-4">
                {loginData.user_data.user.auth_type === "email" ? (
                  <>
                  <img src={barCode} alt="" />
                  <p>{secretCode}</p>
                  </>
                ) : (
                  ""
                )}

                <form action method="post">
                  {successMessage && (
                    <p className="alert alert-success text-center">
                      {successMessage}
                    </p>
                  )}

                  {errorMessage && (
                    <p className="alert alert-danger">{errorMessage}</p>
                  )}

                  {loginData.user_data.user.auth_type === "email" ? (
                    <>
                      <div className="form-group">
                        <input
                          style={{ marginTop: "20px" }}
                          id="token"
                          className="form-control ps-15 bg-transparent"
                          placeholder="Enter Token"
                          value={token}
                          onChange={(e) => setToken(e.target.value)}
                        />

                        <div className="row">
                          <div className="col-12 text-center">
                            {loginData.isLogged === true ? (
                              <button
                                type="button"
                                onClick={async () =>
                                  dispatch(
                                    await finaliseTwoFactor({
                                      token,
                                      loginData,
                                    })
                                  )
                                }
                                className="btn btn-primary w-p100 mt-15"
                              >
                                Submit
                              </button>
                            ) : (
                              ""
                            )}
                          </div>
                        </div>
                      </div>
                    </>
                  ) : (
                    <>
                    <p className="alert alert-danger">Two Factor Succesfully Activated</p>
                    <DelayedRedirect to={`/dashboard`} delay={500} />
                    </>
                  )}
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default FinaliseTwoFactor;
