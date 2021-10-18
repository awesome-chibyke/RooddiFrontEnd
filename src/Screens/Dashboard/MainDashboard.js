import React from "react";

const MainDashboard = () => {
  return (
      <>
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
        <section className="bg-white">
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-2 hidden-xs-down bg-white p-0">
                <div className="st-hit navaer">
                  <a href className="naveractive">
                    <div className="navatext p-1">
                      <div className="navertxt">
                        {" "}
                        <i className="fa fa-user-circle-o fapad" /> Dashboard{" "}
                      </div>
                    </div>
                  </a>
                  <a href className="naveritem">
                    <div className="navatext p-1">
                      <div className="navertxt">
                        {" "}
                        <i className="fa fa-lock fapad2" /> Security{" "}
                      </div>
                    </div>
                  </a>
                  <a href className="naveritem">
                    <div className="navatext p-1">
                      <div className="navertxt">
                        {" "}
                        <i className="fa fa-check-square-o fapad2" />{" "}
                        Identification{" "}
                      </div>
                    </div>
                  </a>
                  <a href className="naveritem">
                    <div className="navatext p-1">
                      <div className="navertxt">
                        {" "}
                        <i className="fa fa-check-square-o fapad2" />{" "}
                        Verification{" "}
                      </div>
                    </div>
                  </a>
                  <a href className="naveritem">
                    <div className="navatext p-1">
                      <div className="navertxt">
                        {" "}
                        <i className="fa fa-users fapad2" /> Referral{" "}
                      </div>
                    </div>
                  </a>
                  <div className="divider" />
                  <a href className="naveritem">
                    <div className="navatext p-1">
                      <div className="navertxt">
                        {" "}
                        <i className="fa fa-sign-out fapad2" /> Log Out{" "}
                      </div>
                    </div>
                  </a>
                </div>
              </div>
              <div className="col-lg-10">
                <div className="css-1e6doj4">
                  <div className="avat">ch</div>
                  <div className="css-1sgz1lk">
                    <div className="css-ize0sl">
                      <div className="css-1124n14">ch***@gmail.com</div>
                      <div className="css-1uoge8i">
                        <div className="css-180eiyx">
                          <div data-bn-type="text" className="css-1ap5wc6">
                            User ID: 108764746
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="css-1ry7rnu">
                      <div data-bn-type="text" className="css-9cwl6c">
                        Last login time 2021-07-28 14:25:42
                      </div>
                      <div data-bn-type="text" className="css-vurnku">
                        IP: 105.112.101.44
                      </div>
                    </div>
                  </div>
                </div>
                <div className="css-ei3nni p-0 mt-20">
                  <div className="css-1p01izn">
                    <div className="css-1q10v73">
                      <div className="css-hwv82q">
                        <div className="css-5x6ly7">
                          <div className="css-5x6ly7">
                            <a
                              data-bn-type="link"
                              href="/en/fee/schedule"
                              rel="noopener noreferrer"
                              className="css-181kvgz"
                            >
                              Your Trading Fee Level: VIP 0
                            </a>
                          </div>
                          <div className="css-10nf7hq">
                            <div className="css-4cffwv">
                              <a
                                data-bn-type="link"
                                href="/en/fee/schedule"
                                rel="noopener noreferrer"
                                id="click_dashboard_fee_schedule"
                                className="css-1myppeo"
                              >
                                Fee Structure
                              </a>
                            </div>
                            <a
                              data-bn-type="link"
                              href="/en/fee/schedule"
                              rel="noopener noreferrer"
                              className="css-1s6nhe2"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="css-vurnku">
                        <div className="css-1dcyq1r">
                          <div className="css-si1nfa">
                            <div className="css-1jezu59">
                              <div className="css-vurnku">
                                <div data-bn-type="text" className="css-mgzyjg">
                                  Maker
                                </div>
                                <div data-bn-type="text" className="css-u95vxr">
                                  0.075%
                                </div>
                              </div>
                            </div>
                            <div className="css-1adyq1q">
                              <div className="css-vurnku">
                                <div data-bn-type="text" className="css-mgzyjg">
                                  Taker
                                </div>
                                <div data-bn-type="text" className="css-u95vxr">
                                  0.075%
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
  );
};

export default MainDashboard;
