/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/heading-has-content */
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { editUserProfileAction, resetProfileState } from "../redux";
import DelayedRedirect from "../components/Includes/DelayedRedirect";
import ErrorSuccessHook from "../redux/ErrorSuccessHook";

const Profile = () => {
  const dispatch = useDispatch();
  const allStateObject = useSelector((state) => state);
  let { login: loginData, profile } = allStateObject;
  const { user: userData } = loginData.user_data;

  const [email, setEmail] = useState(userData.email);
  const [first_name, setFirstname] = useState(userData.first_name);
  const [last_name, setLastName] = useState(userData.last_name);
  const [country, setCountry] = useState(userData.country);
  const [state, setState] = useState(userData.state);
  const [city, setCity] = useState(userData.city);
  const [address, setAddress] = useState(userData.state);
  const [zip_code, setZipCode] = useState(userData.zip_code);

  let loadingStatus = false;
  if (profile.loading === true) {
    loadingStatus = true;
  }
  const { error: errorMessage, success: successMessage } = ErrorSuccessHook(
    profile.success,
    profile.error,
    profile.message,
    profile,
    loadingStatus
  );

  useEffect(() => {
    return () => {
      dispatch(resetProfileState());
    };
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
              <div className="col-sm-8 col-12">
                <div className="box box-body">
                  <div className="content-top-agile pb-0 pt-20">
                    <h2 className="text-primary">Update Your Profile</h2>
                  </div>
                  <div>
                    <form>
                      <div className="row">
                        <div className="col-sm-2 col-2"></div>
                        <div className="col-sm-8 col-8">
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
                        </div>

                        <div className="col-sm-6 col-12">
                          <div className="form-group">
                            <label>Email</label>
                            <div className="input-group mb-15">
                              <input
                                id="email"
                                type="email"
                                className="form-control ps-15 bg-transparent"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                              />
                            </div>
                            <span className="error_displayer err_email"></span>
                          </div>
                        </div>

                        <div className="col-sm-6 col-12">
                          <div className="form-group">
                            <label>first Name</label>
                            <div className="input-group mb-15">
                              <input
                                id="first_name"
                                value={first_name}
                                onChange={(e) => setFirstname(e.target.value)}
                                className="form-control ps-15 bg-transparent"
                              />
                            </div>
                            <span className="error_displayer err_first_name"></span>
                          </div>
                        </div>
                        <div className="col-sm-6 col-12">
                          <div className="form-group">
                            <label>Last Name</label>
                            <div className="input-group mb-15">
                              <input
                                id="last_name"
                                value={last_name}
                                onChange={(e) => setLastName(e.target.value)}
                                className="form-control ps-15 bg-transparent"
                              />
                            </div>
                            <span className="error_displayer err_last_name"></span>
                          </div>
                        </div>

                        <div className="col-sm-6 col-12">
                          <div className="form-group">
                            <label>Country</label>
                            <div className="input-group mb-15">
                              <input
                                id="country"
                                value={country}
                                onChange={(e) => setCountry(e.target.value)}
                                className="form-control ps-15 bg-transparent"
                              />
                            </div>
                            <span className="error_displayer err_country"></span>
                          </div>
                        </div>

                        <div className="col-sm-6 col-12">
                          <div className="form-group">
                            <label>State</label>
                            <div className="input-group mb-15">
                              <input
                                id="state"
                                value={state}
                                onChange={(e) => setState(e.target.value)}
                                className="form-control ps-15 bg-transparent"
                              />
                            </div>
                            <span className="error_displayer err_state"></span>
                          </div>
                        </div>

                        <div className="col-sm-6 col-12">
                          <div className="form-group">
                            <label>City</label>
                            <div className="input-group mb-15">
                              <input
                                id="city"
                                value={city}
                                onChange={(e) => setCity(e.target.value)}
                                className="form-control ps-15 bg-transparent"
                              />
                            </div>
                            <span className="error_displayer err_city"></span>
                          </div>
                        </div>

                        <div className="col-sm-6 col-12">
                          <div className="form-group">
                            <label>Address</label>
                            <div className="input-group mb-15">
                              <input
                                id="address"
                                value={address}
                                onChange={(e) => setAddress(e.target.value)}
                                className="form-control ps-15 bg-transparent"
                              />
                            </div>
                            <span className="error_displayer err_address"></span>
                          </div>
                        </div>

                        <div className="col-sm-6 col-12">
                          <div className="form-group">
                            <label>Zip Code</label>
                            <div className="input-group mb-15">
                              <input
                                id="zip_code"
                                value={zip_code}
                                onChange={(e) => setZipCode(e.target.value)}
                                className="form-control ps-15 bg-transparent"
                              />
                            </div>
                            <span className="error_displayer err_zip_code"></span>
                          </div>
                        </div>

                        <div className="col-sm-12 col-12">
                          <div className="row">
                            {loginData.user_data.user.profile_update_watch ===
                            "none" ? (
                              <div className="col-12 text-center">
                                {loginData.isLogged === true ? (
                                  <button
                                    type="button"
                                    onClick={async () =>
                                      dispatch(
                                        await editUserProfileAction({
                                          loginData,
                                          first_name,
                                          last_name,
                                          country,
                                          state,
                                          city,
                                          address,
                                          zip_code,
                                        })
                                      )
                                    }
                                    className="btn btn-primary btn-block w-p100 mt-15"
                                  >
                                    {profile.loading === true ? ('Updating Profile.....') : ('Submit')}
                                  </button>
                                ) : (
                                  ""
                                )}
                              </div>
                            ) : (
                              ""
                            )}
                          </div>
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
