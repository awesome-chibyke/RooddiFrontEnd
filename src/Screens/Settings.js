/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/heading-has-content */
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateSettingsActionPost, resetSettingsState, getSettingsActionPost } from "../redux";
import DelayedRedirect from "../components/Includes/DelayedRedirect";
import ErrorSuccessHook from "../redux/ErrorSuccessHook";

const Settings = () => {
  const dispatch = useDispatch();
  const allStateObject = useSelector((state) => state);
  let { login: loginData, settings } = allStateObject;
  const { allSettings } = settings

  const [preferred_currency, setPreferedCurrency] = useState(allSettings.preferred_currency);
  const [site_name, setSiteName] = useState(allSettings.site_name);
  const [address1, setAddress1] = useState(allSettings.address1);
  const [address2, setAddress2] = useState(allSettings.address2);
  const [address_3, setAddress3] = useState(allSettings.address_3);
  const [address4, setAddress4] = useState(allSettings.address4);
  const [email1, setEmail] = useState(allSettings.email1);
  const [email2, setEmail2] = useState(allSettings.email2);
  const [site_url, setSiteUrl] = useState(allSettings.site_url);
  const [logo_url, setLogoUrl] = useState(allSettings.logo_url);
  const [facebook, setFacebook] = useState(allSettings.facebook);
  const [instagram, setInstagram] = useState(allSettings.instagram);
  const [linkedin, setLinkedin] = useState(allSettings.linkedin);
  const [ios_url, setIosUrl] = useState(allSettings.ios_url);
  const [android_url, setAndroidUrl] = useState(allSettings.android_url);
  const [front_end_base_url, setFrontEndBaseUrl] = useState(allSettings.front_end_base_url);
  const [backend_base_url, setBackEndBaseUrl] = useState(allSettings.backend_base_url);
  const [ios_app_store_link, setIosAppStorLink] = useState(allSettings.ios_app_store_link);
  const [phone1, setPhone1] = useState(allSettings.phone1);
  const [phone2, setPhone2] = useState(allSettings.phone2);
  const [no_of_days_to_review, setNoOfDaysToReview] = useState(allSettings.no_of_days_to_review);
  const [total_projects, setTotalProjects] = useState(allSettings.total_projects);
  const [slogan, setSlogan] = useState(allSettings.slogan);
  const [least_withdrawable_amount, setLeastWithdrawableAmount] = useState(allSettings.least_withdrawable_amount);


  useEffect(() => {
    if (loginData.isLogged === true) {
      dispatch(getSettingsActionPost(loginData, allSettings));
    }
  }, []);

  console.log(allSettings, "All")

  let loadingStatus = false;
  if (settings.loading === true) {
    loadingStatus = true;
  }
  const { error: errorMessage, success: successMessage } = ErrorSuccessHook(
    settings.success,
    settings.error,
    settings.message,
    settings,
    loadingStatus
  );

  useEffect(() => {
    return () => {
      dispatch(resetSettingsState());
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
                    <h2 className="text-primary">Update Settings</h2>
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
                            <label>Prefered Currency</label>
                            <div className="input-group mb-15">
                              <input
                                id="preferred_currency"
                                className="form-control ps-15 bg-transparent"
                                value={preferred_currency}
                                onChange={(e) => setPreferedCurrency(e.target.value)}
                              />
                            </div>
                            <span className="error_displayer err_preferred_currency"></span>
                          </div>
                        </div>

                        <div className="col-sm-6 col-12">
                          <div className="form-group">
                            <label>Site Name</label>
                            <div className="input-group mb-15">
                              <input
                                id="site_name"
                                value={site_name}
                                onChange={(e) => setSiteName(e.target.value)}
                                className="form-control ps-15 bg-transparent"
                              />
                            </div>
                            <span className="error_displayer err_site_name"></span>
                          </div>
                        </div>
                        <div className="col-sm-6 col-12">
                          <div className="form-group">
                            <label>Address 1</label>
                            <div className="input-group mb-15">
                              <input
                                id="address1"
                                value={address1}
                                onChange={(e) => setAddress1(e.target.value)}
                                className="form-control ps-15 bg-transparent"
                              />
                            </div>
                            <span className="error_displayer err_address1"></span>
                          </div>
                        </div>

                        <div className="col-sm-6 col-12">
                          <div className="form-group">
                            <label>Address 2</label>
                            <div className="input-group mb-15">
                              <input
                                id="address2"
                                value={address2}
                                onChange={(e) => setAddress2(e.target.value)}
                                className="form-control ps-15 bg-transparent"
                              />
                            </div>
                            <span className="error_displayer err_address2"></span>
                          </div>
                        </div>

                        <div className="col-sm-6 col-12">
                          <div className="form-group">
                            <label>Address 3</label>
                            <div className="input-group mb-15">
                              <input
                                id="address_3"
                                value={address_3}
                                onChange={(e) => setAddress3(e.target.value)}
                                className="form-control ps-15 bg-transparent"
                              />
                            </div>
                            <span className="error_displayer err_address_3"></span>
                          </div>
                        </div>

                        <div className="col-sm-6 col-12">
                          <div className="form-group">
                            <label>Address 4</label>
                            <div className="input-group mb-15">
                              <input
                                id="address4"
                                value={address4}
                                onChange={(e) => setAddress4(e.target.value)}
                                className="form-control ps-15 bg-transparent"
                              />
                            </div>
                            <span className="error_displayer err_address4"></span>
                          </div>
                        </div>

                        <div className="col-sm-6 col-12">
                          <div className="form-group">
                            <label>Email</label>
                            <div className="input-group mb-15">
                              <input
                                id="email1"
                                value={email1}
                                onChange={(e) => setEmail(e.target.value)}
                                className="form-control ps-15 bg-transparent"
                              />
                            </div>
                            <span className="error_displayer err_email1"></span>
                          </div>
                        </div>

                        <div className="col-sm-6 col-12">
                          <div className="form-group">
                            <label>Email 2</label>
                            <div className="input-group mb-15">
                              <input
                                id="email2"
                                value={email2}
                                onChange={(e) => setEmail2(e.target.value)}
                                className="form-control ps-15 bg-transparent"
                              />
                            </div>
                            <span className="error_displayer err_email2"></span>
                          </div>
                        </div>
                        <div className="col-sm-6 col-12">
                          <div className="form-group">
                            <label>Site URL</label>
                            <div className="input-group mb-15">
                              <input
                                id="site_url"
                                value={site_url}
                                onChange={(e) => setSiteUrl(e.target.value)}
                                className="form-control ps-15 bg-transparent"
                              />
                            </div>
                            <span className="error_displayer err_site_url"></span>
                          </div>
                        </div>
                        <div className="col-sm-6 col-12">
                          <div className="form-group">
                            <label>Logo Url</label>
                            <div className="input-group mb-15">
                              <input
                                id="logo_url"
                                value={logo_url}
                                onChange={(e) => setLogoUrl(e.target.value)}
                                className="form-control ps-15 bg-transparent"
                              />
                            </div>
                            <span className="error_displayer err_logo_url"></span>
                          </div>
                        </div>
                        <div className="col-sm-6 col-12">
                          <div className="form-group">
                            <label>Facebook</label>
                            <div className="input-group mb-15">
                              <input
                                id="facebook"
                                value={facebook}
                                onChange={(e) => setFacebook(e.target.value)}
                                className="form-control ps-15 bg-transparent"
                              />
                            </div>
                            <span className="error_displayer err_facebook"></span>
                          </div>
                        </div>
                        <div className="col-sm-6 col-12">
                          <div className="form-group">
                            <label>Instagram</label>
                            <div className="input-group mb-15">
                              <input
                                id="instagram"
                                value={instagram}
                                onChange={(e) => setInstagram(e.target.value)}
                                className="form-control ps-15 bg-transparent"
                              />
                            </div>
                            <span className="error_displayer err_instagram"></span>
                          </div>
                        </div>
                        <div className="col-sm-6 col-12">
                          <div className="form-group">
                            <label>Linkedin</label>
                            <div className="input-group mb-15">
                              <input
                                id="linkedin"
                                value={linkedin}
                                onChange={(e) => setLinkedin(e.target.value)}
                                className="form-control ps-15 bg-transparent"
                              />
                            </div>
                            <span className="error_displayer err_linkedin"></span>
                          </div>
                        </div>
                        <div className="col-sm-6 col-12">
                          <div className="form-group">
                            <label>IOS URL</label>
                            <div className="input-group mb-15">
                              <input
                                id="ios_url"
                                value={ios_url}
                                onChange={(e) => setIosUrl(e.target.value)}
                                className="form-control ps-15 bg-transparent"
                              />
                            </div>
                            <span className="error_displayer err_ios_url"></span>
                          </div>
                        </div>
                        <div className="col-sm-6 col-12">
                          <div className="form-group">
                            <label>Android URL</label>
                            <div className="input-group mb-15">
                              <input
                                id="android_url"
                                value={android_url}
                                onChange={(e) => setAndroidUrl(e.target.value)}
                                className="form-control ps-15 bg-transparent"
                              />
                            </div>
                            <span className="error_displayer err_android_url"></span>
                          </div>
                        </div>
                        <div className="col-sm-6 col-12">
                          <div className="form-group">
                            <label>Front End Base URL</label>
                            <div className="input-group mb-15">
                              <input
                                id="front_end_base_url"
                                value={front_end_base_url}
                                onChange={(e) => setFrontEndBaseUrl(e.target.value)}
                                className="form-control ps-15 bg-transparent"
                              />
                            </div>
                            <span className="error_displayer err_front_end_base_url"></span>
                          </div>
                        </div>
                        <div className="col-sm-6 col-12">
                          <div className="form-group">
                            <label>Back End Base URL</label>
                            <div className="input-group mb-15">
                              <input
                                id="backend_base_url"
                                value={backend_base_url}
                                onChange={(e) => setBackEndBaseUrl(e.target.value)}
                                className="form-control ps-15 bg-transparent"
                              />
                            </div>
                            <span className="error_displayer err_backend_base_url"></span>
                          </div>
                        </div>
                        <div className="col-sm-6 col-12">
                          <div className="form-group">
                            <label>IOS App Link</label>
                            <div className="input-group mb-15">
                              <input
                                id="ios_app_store_link"
                                value={ios_app_store_link}
                                onChange={(e) => setIosAppStorLink(e.target.value)}
                                className="form-control ps-15 bg-transparent"
                              />
                            </div>
                            <span className="error_displayer err_ios_app_store_link"></span>
                          </div>
                        </div>
                        <div className="col-sm-6 col-12">
                          <div className="form-group">
                            <label>Phone 1</label>
                            <div className="input-group mb-15">
                              <input
                                id="phone1"
                                value={phone1}
                                onChange={(e) => setPhone1(e.target.value)}
                                className="form-control ps-15 bg-transparent"
                              />
                            </div>
                            <span className="error_displayer err_phone1"></span>
                          </div>
                        </div>
                        <div className="col-sm-6 col-12">
                          <div className="form-group">
                            <label>Phone 2</label>
                            <div className="input-group mb-15">
                              <input
                                id="phone2"
                                value={phone2}
                                onChange={(e) => setPhone2(e.target.value)}
                                className="form-control ps-15 bg-transparent"
                              />
                            </div>
                            <span className="error_displayer err_phone2"></span>
                          </div>
                        </div>
                        <div className="col-sm-6 col-12">
                          <div className="form-group">
                            <label>No Of Days To Review</label>
                            <div className="input-group mb-15">
                              <input
                                id="no_of_days_to_review"
                                value={no_of_days_to_review}
                                onChange={(e) => setNoOfDaysToReview(e.target.value)}
                                className="form-control ps-15 bg-transparent"
                              />
                            </div>
                            <span className="error_displayer err_no_of_days_to_review"></span>
                          </div>
                        </div>
                        <div className="col-sm-6 col-12">
                          <div className="form-group">
                            <label>Total Projects</label>
                            <div className="input-group mb-15">
                              <input
                                id="total_projects"
                                value={total_projects}
                                onChange={(e) => setTotalProjects(e.target.value)}
                                className="form-control ps-15 bg-transparent"
                              />
                            </div>
                            <span className="error_displayer err_total_projects"></span>
                          </div>
                        </div>
                        <div className="col-sm-6 col-12">
                          <div className="form-group">
                            <label>Slogan</label>
                            <div className="input-group mb-15">
                              <input
                                id="slogan"
                                value={slogan}
                                onChange={(e) => setSlogan(e.target.value)}
                                className="form-control ps-15 bg-transparent"
                              />
                            </div>
                            <span className="error_displayer err_slogan"></span>
                          </div>
                        </div>
                        <div className="col-sm-6 col-12">
                          <div className="form-group">
                            <label>Least Amount To Review</label>
                            <div className="input-group mb-15">
                              <input
                                id="least_withdrawable_amount"
                                value={least_withdrawable_amount}
                                onChange={(e) => setLeastWithdrawableAmount(e.target.value)}
                                className="form-control ps-15 bg-transparent"
                              />
                            </div>
                            <span className="error_displayer err_least_withdrawable_amount"></span>
                          </div>
                        </div>

                        <div className="col-sm-12 col-12">
                          <div className="row">
                            <div className="col-12 text-center">
                              {loginData.isLogged === true ? (
                                <button
                                  type="button"
                                  onClick={async () =>
                                    dispatch(
                                      await updateSettingsActionPost({
                                        loginData,
                                        preferred_currency,
                                        site_name,
                                        address1,
                                        address2,
                                        address_3,
                                        address4,
                                        email1,
                                        email2,
                                        site_url,
                                        logo_url,
                                        facebook,
                                        instagram,
                                        linkedin,
                                        ios_url,
                                        android_url,
                                        front_end_base_url,
                                        backend_base_url,
                                        ios_app_store_link,
                                        phone1,
                                        phone2,
                                        no_of_days_to_review,
                                        total_projects,
                                        slogan,
                                        least_withdrawable_amount,
                                      })
                                    )
                                  }
                                  className="btn btn-primary btn-block w-p100 mt-15"
                                >
                                  {settings.loading === true
                                    ? "Updating Settings....."
                                    : "Update"}
                                </button>
                              ) : (
                                ""
                              )}
                            </div>
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

export default Settings;
