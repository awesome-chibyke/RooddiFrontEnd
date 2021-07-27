/* eslint-disable jsx-a11y/heading-has-content */
import React from "react";
import { BASE_URL } from "../common_variables";
const BuyCrptoCard = () => {
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
        <section className="bg-white bg-food-white">
          <div className="col-12">
            <div className="col-xl-12 col-md-12">
              <div className="card shadow-b rad0">
                <div className="card-body fix-styler">
                  <div className="buy-sell-widget px-2">
                    <div className="offset-lg-1 col-lg-10">
                      <ul className="stle-ul">
                        <li>
                          <a href="buy-sell-p2p">P2P</a>
                        </li>
                        <li>
                          <a href="nft">NFT</a>
                        </li>
                        <li>
                          <a href="swap">Swap</a>
                        </li>
                        <li>
                          <a href="markets">Market</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="col-xl-10 col-12 offset-lg-1 bg-success-light p-10">
          <span className="fs-30 fw-700 text-dark"> </span>
          <span className="btn btn-def btn-smaller">
            <a href="order-history">
              Order History{" "}
              <i className="fa fa-long-arrow-right text-primary" />
            </a>
          </span>{" "}
          |
          <span className="btn btn-def btn-smaller" >
            <a href="faqs">
              FAQs <i className="fa fa-long-arrow-right text-primary" />
            </a>
          </span>
          <span className="btn btn-def btn-smaller pull-right">
            <a href="sell-crypto">
              Sell <i className="fa fa-long-arrow-right text-primary" />
            </a>
          </span>
        </div>
        <section className="py-30 bg-white">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="box bg-transparent no-shadow">
                  <div className="box-body">
                    <h4 className="subtitle text-center">
                      Buy with Your Credit/Debit Card.
                    </h4>
                    <div className="row pt-50">
                      <div className="col-xl-6 col-12 offset-lg-3">
                        <div className="box shadow-b line-bord">
                          <div className="box-body">
                            <label className="full-left">Spend</label>
                            <label className="pull-right">
                              Available limit: $50,000
                            </label>
                            <div className="row mt-15">
                              <div className="col-lg-8 col-xs-8 col-sm-8">
                                <input
                                  type="text"
                                  placeholder="15.00 - 15000.00"
                                  className="styl-amnt form-control fw-500 fs-24"
                                />
                              </div>
                              <div className="col-lg-4 col-xs-4 col-sm-4">
                                <select
                                  name="currency"
                                  className="sty-selll form-control fw-600 fs-16"
                                >
                                  {/*coins-exchange*/}
                                  <option value="usd"> USD </option>
                                  <option value="eur"> EUR </option>
                                  <option value="ngn"> NGN </option>
                                </select>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-6 col-12 offset-lg-3">
                        <div className="box shadow-b line-bord">
                          <div className="box-body">
                            <label>Receive</label>
                            <div className="row mt-15">
                              <div className="col-lg-8 col-xs-8 col-sm-8">
                                <input
                                  type="text"
                                  placeholder={0.0}
                                  className="styl-amnt form-control fw-500 fs-24"
                                />
                              </div>
                              <div className="col-lg-4 col-xs-4 col-sm-4">
                                <select
                                  name="currency"
                                  className="sty-selll form-control fw-600 fs-16"
                                >
                                  {/*coins-exchange*/}
                                  <option value="bitcoin">
                                    {" "}
                                    BTC(Bitcoin){" "}
                                  </option>
                                  <option value="litecoin">
                                    {" "}
                                    LTC(Litcoin){" "}
                                  </option>
                                  <option value="Ethereum">
                                    {" "}
                                    ETH(Ethereum){" "}
                                  </option>
                                </select>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-6 col-12 offset-lg-3">
                        <div className="row mt-10">
                          <div className="col-lg-6">&nbsp;&nbsp; Price</div>
                          <div className="col-lg-6 text-rit">
                            {" "}
                            1 BTC ≈ 33,692.72 USD
                            <span>
                              <i className="fa fa-toggle-off text-primary" />
                            </span>{" "}
                            &nbsp;&nbsp;
                          </div>
                        </div>
                        <button className="mt-20 form-control btn btn-primary btn-block p-20 btn-lg btn-large">
                          Continue
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="py-50 bg-white-ash" style={{ backgroundColor: "#fafbfd" }}>
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-12 col-12 text-center">
                <h1 className="mb-15">
                  Buy &amp; Sell Crypto in 3 simple step
                </h1>
                <hr className="w-100 bg-primary" />
              </div>
            </div>
            <div className="row mt-30">
              <div className="col-xl-4 col-md-4 col-12">
                <div className="box no-shadow">
                  <div className="box-body text-center">
                    <span className="text-primary fs-50">
                      {/* <img
                        src="../images/img/signup-icon.png"
                        alt="Register an account"
                        className="rounded-circle max-w-50"
                      /> */}
                      <img src={`${BASE_URL}/rooddi/images/img/signup-icon.png`}  alt="Register an account"
                        className="rounded-circle max-w-50" />
                    </span>
                    <div className="fw-600 fs-18 mb-2 mt-15">Sign up</div>
                    <div className="fs-16">
                      Sign up for free on web, iOS or Android and follow our
                      easy process to set up your profile.
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-md-4 col-12">
                <div className="box no-shadow">
                  <div className="box-body text-center">
                    <span className="text-primary fs-50">
                      {/* <img
                        src="../images/img/verify-identity.png"
                        alt="deposit with card"
                        className="rounded-circle max-w-50"
                      /> */}
                       <img src={`${BASE_URL}/rooddi/images/img/verify-identity.png`}  alt="deposit with card"
                        className="rounded-circle max-w-50" />
                    </span>
                    <div className="fw-600 fs-18 mb-2 mt-15">
                      Verify Identity
                    </div>
                    <div className="fs-16">
                      Choose your preferred payment method like bank transfer,
                      credit card to add money to your account Wallet or you can
                      use the pair to pair method.
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-md-4 col-12">
                <div className="box no-shadow">
                  <div className="box-body text-center">
                    <span className="text-primary fs-50">
                      
                      <img src={`${BASE_URL}/rooddi/images/img/buy-sell-cryptocurrency.png`}  alt="buy-sell-cryptocurrency"
                        className="rounded-circle max-w-50" />
                    </span>
                    <div className="fw-600 fs-18 mb-2 mt-15">
                      Buy/Sell crypto
                    </div>
                    <div className="fs-16">
                      Buy Bitcoin, Ethereum, Litecoin, then securely store it in
                      your Wallet or send it on easily to friends.
                    </div>
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

export default BuyCrptoCard;
