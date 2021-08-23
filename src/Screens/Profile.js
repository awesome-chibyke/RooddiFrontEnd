/* eslint-disable jsx-a11y/heading-has-content */
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getUserProfileAction, editUserProfileAction } from "../redux";
import DelayedRedirect from "../components/Includes/DelayedRedirect";
import ErrorSuccessHook from "../redux/ErrorSuccessHook";

const Profile = ({ history }) => {
  const [email, setEmail] = useState("");
  const [first_name, setFirstname] = useState("");
  const [description, setDescription] = useState("");
  const [middle_name, setMiddlename] = useState("");
  const [country_code, setCountryCode] = useState("");
  const [passport, setPassport] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [state, setState] = useState("");
  const [country, setCountry] = useState("");
  const [preferred_currency, setPreferredCurrency] = useState("");

  const dispatch = useDispatch();
  const allStateObject = useSelector((state) => state);
  let { login: loginData, profile } = allStateObject;
  const { userData } = profile;

  let loadingStatus = false;
  if (profile.loading === true) {
    loadingStatus = true;
  }
  const { error: errorMessage, success: successMessage } = ErrorSuccessHook(
    profile.success,
    profile.error,
    profile,
    loadingStatus,
    loginData.message,
    loginData
  );

  useEffect(() => {
    if (loginData.isLogged === false) {
      history.push("/login");
    } else {
      if (!userData || !userData.email) {
        dispatch(getUserProfileAction(loginData));
      } else {
        setEmail(userData.email);
        setFirstname(userData.first_name);
        setDescription(userData.description);
        setMiddlename(userData.middle_name);
        setCountryCode(userData.country_code);
        setPassport(userData.passport);
        setPhone(userData.phone);
        setAddress(userData.address);
        setState(userData.state);
        setCountry(userData.country);
        setPreferredCurrency(userData.preferred_currency);
      }
    }
  }, []);

  // const submitHandler = (e) => {
  //   e.preventDefault();
  //   if (loginData.isLogged === false) {
  //     history.push("/login");
  //   } else {
  //     dispatch(
  //       editUserProfileAction({
  //         email,
  //         first_name,
  //         description,
  //         middle_name,
  //         country_code,
  //         passport,
  //         phone,
  //         address,
  //         state,
  //         country,
  //         preferred_currency,
  //       })
  //     );
  //   }
  // };
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
                    <h2 className="text-primary">Update Your Profile</h2>
                  </div>
                  <div>
                    <form>
                      <div className="form-group">
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
                        <label>Email</label>
                        <div className="input-group mb-15">
                          <input
                            type="email"
                            className="form-control ps-15 bg-transparent"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                          />
                        </div>
                        <span className="error_displayer err_email"></span>
                      </div>
                      <div className="form-group">
                        <label>first Name</label>
                        <div className="input-group mb-15">
                          <input
                            value={first_name}
                            onChange={(e) => setFirstname(e.target.value)}
                            className="form-control ps-15 bg-transparent"
                          />
                        </div>
                        <span className="error_displayer err_password"></span>
                      </div>
                      <div className="form-group">
                        <label>Description</label>
                        <div className="input-group mb-15">
                          <input
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            className="form-control ps-15 bg-transparent"
                          />
                        </div>
                        <span className="error_displayer err_password"></span>
                      </div>
                      <div className="form-group">
                        <label>Middle Name</label>
                        <div className="input-group mb-15">
                          <input
                            value={middle_name}
                            onChange={(e) => setMiddlename(e.target.value)}
                            className="form-control ps-15 bg-transparent"
                          />
                        </div>
                        <span className="error_displayer err_password"></span>
                      </div>
                      <div className="form-group">
                        <label>Country Code</label>
                        <div className="input-group mb-15">
                          <input
                            value={country_code}
                            onChange={(e) => setCountryCode(e.target.value)}
                            className="form-control ps-15 bg-transparent"
                          />
                        </div>
                        <span className="error_displayer err_password"></span>
                      </div>
                      <div className="form-group">
                        <label>Passport</label>
                        <div className="input-group mb-15">
                          <input
                            value={passport}
                            onChange={(e) => setPassport(e.target.value)}
                            className="form-control ps-15 bg-transparent"
                          />
                        </div>
                        <span className="error_displayer err_password"></span>
                      </div>
                      <div className="form-group">
                        <label>Phone</label>
                        <div className="input-group mb-15">
                          <input
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            className="form-control ps-15 bg-transparent"
                          />
                        </div>
                        <span className="error_displayer err_password"></span>
                      </div>
                      <div className="form-group">
                        <label>Address</label>
                        <div className="input-group mb-15">
                          <input
                            value={address}
                            onChange={(e) => setAddress(e.target.value)}
                            className="form-control ps-15 bg-transparent"
                          />
                        </div>
                        <span className="error_displayer err_password"></span>
                      </div>
                      <div className="form-group">
                        <label>State</label>
                        <div className="input-group mb-15">
                          <input
                            value={state}
                            onChange={(e) => setState(e.target.value)}
                            className="form-control ps-15 bg-transparent"
                          />
                        </div>
                        <span className="error_displayer err_password"></span>
                      </div>
                      <div className="form-group">
                        <label>Country</label>
                        <div className="input-group mb-15">
                          <input
                            value={country}
                            onChange={(e) => setCountry(e.target.value)}
                            className="form-control ps-15 bg-transparent"
                          />
                        </div>
                        <span className="error_displayer err_password"></span>
                      </div>
                      <div className="form-group">
                        <label>Preferred Currency</label>
                        <div className="input-group mb-15">
                          <input
                            value={preferred_currency}
                            onChange={(e) =>
                              setPreferredCurrency(e.target.value)
                            }
                            className="form-control ps-15 bg-transparent"
                          />
                        </div>
                        <span className="error_displayer err_password"></span>
                      </div>
                      <div className="row">
                        <div className="col-12 text-center">
                          {loginData.isLogged === true ? (
                            <button
                              type="button"
                              onClick={async () =>
                                dispatch(
                                  await editUserProfileAction({
                                    first_name, description, middle_name, country_code, passport, phone, address, state, country,preferred_currency,
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

export default Profile;
