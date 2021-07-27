import React from "react";
import { BASE_URL } from "../common_variables";
const Wallet = () => {
  return (
    <>
      <div>
        <section className="bg-dark-body bg-food-white pt-150 pb-20">
          <div className="container">
            <div className="row">
              <div className="col-12 bg-food-white">
                <div className="text-center">
                  <h2 className="page-title text-white">Buy and Sell Crypto</h2>
                  <ol className="breadcrumb bg-transparent justify-content-center">
                    <li className="breadcrumb-item">
                      <a href="./" className="text-white-50">
                        <i className="mdi mdi-home-outline" />
                      </a>
                    </li>
                    <li
                      className="breadcrumb-item text-white active"
                      aria-current="page"
                    >
                      Coin Wallet
                    </li>
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
        <section className="py-30 bg-white">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="box bg-transparent no-shadow">
                  <div className="box-body">
                    <h4 className="subtitle text-center">
                      Start buying/selling crypto on the world's leading
                      exchange platform.
                    </h4>
                    <div className="row pt-50">
                      <div className="col-xl-8 col-12 offset-lg-2">
                        <div className="box shadow-b line-bord graf-bg">
                          <div className="box-body">
                            <div className="d-flex align-items-center">
                              <img src={`${BASE_URL}/rooddi/images/img/bitcoin-icon.jpg`}  alt="Bitcoin"
                                className="rounded-circle max-w-50" />
                              <div className="ms-10">
                                <h4 className="text-dark fs-14">Bitcoin</h4>
                                <h3 className="text-dark mb-0 fs-12">
                                  $34,908.67{" "}
                                  <i className="fa fa-caret-down text-primary" />
                                  -9.43%
                                </h3>
                              </div>
                            </div>
                            <small
                              style={{
                                marginTop: "-40px",
                                marginRight: "-20px",
                              }}
                              className="fs-14 pull-right"
                            >
                              <a
                                style={{ padding: "4px" }}
                                className="shift-right10 btn btn-primary btn-sm btn-smaller"
                                href="buy"
                              >
                                Buy/Sell
                              </a>{" "}
                            </small>
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-8 col-12 offset-lg-2">
                        <div className="box shadow-b line-bord graf-bg">
                          <div className="box-body">
                            <div className="d-flex align-items-center">
                              {/* <img
                                src="../images/img/etherum-icon.jpg"
                                alt="Ethereum"
                                className="rounded-circle max-w-50"
                              /> */}
                              <img src={`${BASE_URL}/rooddi/images/img/etherum-icon.jpg`}  alt="Ethereum"
                                className="rounded-circle max-w-50" />
                              <div className="ms-10">
                                <h4 className="text-dark fs-14">Ethereum</h4>
                                <h3 className="text-dark mb-0 fs-12">
                                  $1,823,908.67{" "}
                                  <i className="fa fa-caret-down text-primary" />
                                  -9.43%
                                </h3>
                              </div>
                            </div>
                            <small
                              style={{
                                marginTop: "-40px",
                                marginRight: "-20px",
                              }}
                              className="fs-14 pull-right"
                            >
                              <a
                                style={{ padding: "4px" }}
                                className="shift-right10 btn btn-primary btn-sm btn-smaller"
                                href="buy"
                              >
                                Buy/Sell
                              </a>{" "}
                            </small>
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-8 col-12 offset-lg-2">
                        <div className="box shadow-b line-bord graf-bg">
                          <div className="box-body">
                            <div className="d-flex align-items-center">
                              {/* <img
                                src="../images/img/bitcoin-cash-icon.jpg"
                                alt="Bitcoin Cash"
                                className="rounded-circle max-w-50"
                              /> */}
                              <img src={`${BASE_URL}/rooddi/images/img/bitcoin-cash-icon.jpg`} alt="Bitcoin Cash"
                                className="rounded-circle max-w-50" />
                              <div className="ms-10">
                                <h4 className="text-dark fs-14">
                                  Bitcoin Cash
                                </h4>
                                <h3 className="text-dark mb-0 fs-12">
                                  $908.67{" "}
                                  <i className="fa fa-caret-down text-primary" />
                                  -9.43%
                                </h3>
                              </div>
                            </div>
                            <small
                              style={{
                                marginTop: "-40px",
                                marginRight: "-20px",
                              }}
                              className="fs-14 pull-right"
                            >
                              <a
                                style={{ padding: "4px" }}
                                className="shift-right10 btn btn-primary btn-sm btn-smaller"
                                href="buy"
                              >
                                Buy/Sell
                              </a>{" "}
                            </small>
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-8 col-12 offset-lg-2">
                        <div className="box shadow-b line-bord graf-bg">
                          <div className="box-body">
                            <div className="d-flex align-items-center">
                              {/* <img
                                src="../images/img/litcoin-icon.jpg"
                                alt="litcoin"
                                className="rounded-circle max-w-50"
                              /> */}
                              <img src={`${BASE_URL}/rooddi/images/img/litcoin-icon.jpg`} alt="litcoin"
                                className="rounded-circle max-w-50" />
                              <div className="ms-10">
                                <h4 className="text-dark fs-14">Litcoin</h4>
                                <h3 className="text-dark mb-0 fs-12">
                                  $28.67{" "}
                                  <i className="fa fa-caret-down text-primary" />
                                  -9.43%
                                </h3>
                              </div>
                            </div>
                            <small
                              style={{
                                marginTop: "-40px",
                                marginRight: "-20px",
                              }}
                              className="fs-14 pull-right"
                            >
                              <a
                                style={{ padding: "4px" }}
                                className="shift-right10 btn btn-primary btn-sm btn-smaller"
                                href="buy"
                              >
                                Buy/Sell
                              </a>{" "}
                            </small>
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
        <section className="py-50 bg-white-ash">
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
                      <img src={`${BASE_URL}/rooddi/images/img/signup-icon.png`} alt="Register an account"
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
                        src="../images/img/deposit.png"
                        alt="deposit with card"
                        className="rounded-circle max-w-50"
                      /> */}
                      <img src={`${BASE_URL}/rooddi/images/img/deposit.png`} alt="deposit with card"
                                className="rounded-circle max-w-50" />
                    </span>
                    <div className="fw-600 fs-18 mb-2 mt-15">Deposit money</div>
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
                      {/* <img
                        src="../images/img/buy-sell-cryptocurrency.png"
                        alt="buy-sell-cryptocurrency"
                        className="rounded-circle max-w-50"
                      /> */}
                      <img src={`${BASE_URL}/rooddi/images/img/buy-sell-cryptocurrency.png`} alt="buy-sell-cryptocurrency"
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

export default Wallet;
