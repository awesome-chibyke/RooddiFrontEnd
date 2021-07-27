/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import { BASE_URL } from "../common_variables";

const Section = () => {
  return (
    <>
      <div>
        <section className="pt-130 pb-50 bg-dark-body">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div
                  className="bg-dot2 owl-carousel owl-theme owl-btn-1 banner-slide"
                  data-nav-arrow="false"
                  data-nav-dots="false"
                  data-items={1}
                  data-md-items={1}
                  data-sm-items={1}
                  data-xs-items={1}
                  data-xx-items={1}
                >
                  <div className="item">
                    <div className="row align-items-center">
                      <div className="col-lg-6 col-12">
                        <div className="mt-80">
                          <h1 className="box-title text-white mb-20">
                            Buy, Sell, Receive and Stock Cryptocurrency any time
                          </h1>
                          <h4 className="text-white-80 fw-300 mb-30">
                            Your fast, popular, and secure way to purchase or
                            exchange cryptocurrency. Get access to more coins as
                            you register to use our secured platform.
                          </h4>
                          <div className="row">
                            <div
                              href="#"
                              className="col-lg-3 col-6 col-xs-6 pt-1"
                            >
                              <img
                                src={`${BASE_URL}/rooddi/images/img/Google-PlayStore.png`}
                                className="img-fluid"
                                alt="img"
                                style={{ width: "135px", height: "40px" }}
                              />
                            </div>
                            <div
                              href="#"
                              className="col-lg-3 col-6 col-xs-6 pt-1"
                            >
                              <img
                                src={`${BASE_URL}/rooddi/images/img/apple-store.png`}
                                className="img-fluid"
                                alt="img"
                                style={{ width: "135px", height: "40px" }}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6 col-12 hidden-sm-down">
                        <div className="text-center">
                          <img
                            src={`${BASE_URL}/rooddi/images/img/cryptos.png`}
                            className="img-fluid"
                            alt="Buy and Sell Cryptocurrency"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="item">
                    <div className="row align-items-center">
                      <div className="col-lg-6 col-12">
                        <div className="mt-80">
                          <h1 className="box-title text-white mb-20">
                            Join the world's largest Crypto exchange.
                          </h1>
                          <h4 className="text-white-80 fw-300 mb-30">
                            Buy &amp; sell Crypto in a more faster and secured
                            way.
                          </h4>
                        </div>
                        <div>
                          <a href="register" className="btn btn-primary">
                            Get started
                          </a>
                        </div>
                      </div>
                      <div className="col-lg-6 col-12 hidden-sm-down">
                        <div className="text-center">
                          <img
                            src={`${BASE_URL}/rooddi/images/img/bitcoin-buy-and-sell-crypto-faster-and-secured.png`}
                            className="img-fluid"
                            alt="img"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="item">
                    <div className="row align-items-center">
                      <div className="col-lg-6 col-12">
                        <div className="mt-80">
                          <h1 className="box-title text-white mb-20">
                            Want Bitcoin, Ethereum, Dodge, Litcoin? You got it.
                          </h1>
                          <h4 className="text-white-80 fw-300 mb-30">
                            Instantly buy or sell Cryptocurrency with the click
                            of a button.
                          </h4>
                        </div>
                        <div>
                          <a
                            href="buy_sell_crypto?type=p2p"
                            className="btn btn-primary"
                          >
                            Buy Now
                          </a>
                        </div>
                      </div>
                      <div className="col-lg-6 col-12 hidden-sm-down">
                        <div className="text-center">
                         
                          <img
                            src={`${BASE_URL}/rooddi/images/front-end-img/banners/graphic_carousel_instant.png`}
                            className="img-fluid"
                            alt="buy and sell crypto faster and secured"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="container mt-60 ">
            <div className="row">
              <div className="col-12 col-md-6 col-xl-3">
                <div className="box bg-dark box-body pull-up">
                  <div className="tradingview-widget-container">
                    <div className="tradingview-widget-container__widget" />
                    <div className="tradingview-widget-copyright">
                      <a
                        href="https://in.tradingview.com/symbols/BTCUSD/?exchange=BITSTAMP"
                        rel="noopener"
                        target="_blank"
                      >
                        <span className="blue-text">BTCUSD Rates</span>
                      </a>{" "}
                      by TradingView
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-6 col-xl-3">
                <div className="box bg-dark box-body pull-up">
                  <div className="tradingview-widget-container">
                    <div className="tradingview-widget-container__widget" />
                    <div className="tradingview-widget-copyright">
                      <a
                        href="https://in.tradingview.com/symbols/ETHUSD/?exchange=BITSTAMP"
                        rel="noopener"
                        target="_blank"
                      >
                        <span className="blue-text">ETHUSD Rates</span>
                      </a>{" "}
                      by TradingView
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-6 col-xl-3">
                <div className="box bg-dark box-body pull-up">
                  <div className="tradingview-widget-container">
                    <div className="tradingview-widget-container__widget" />
                    <div className="tradingview-widget-copyright">
                      <a
                        href="https://in.tradingview.com/symbols/LTCUSDT/?exchange=BINANCE"
                        rel="noopener"
                        target="_blank"
                      >
                        <span className="blue-text">LTCUSDT Rates</span>
                      </a>{" "}
                      by TradingView
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-6 col-xl-3">
                <div className="box bg-dark box-body pull-up">
                  <div className="tradingview-widget-container">
                    <div className="tradingview-widget-container__widget" />
                    <div className="tradingview-widget-copyright">
                      <a
                        href="https://in.tradingview.com/symbols/XRPUSDT/?exchange=BINANCE"
                        rel="noopener"
                        target="_blank"
                      >
                        <span className="blue-text">XRPUSDT Rates</span>
                      </a>{" "}
                      by TradingView
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="py-50 bg-dark-body">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-md-7 col-12">
                <h1 className="mb-25 text-white text-center">
                  Why Rooddi is trusted by users and businesses.
                  <br />
                  <span className="text-success text-center">
                    {" "}
                    - Fast and Secured Wallet -{" "}
                  </span>
                </h1>
                <div className="row mb-4">
                  <div className="col-lg-4 text-center">
                    <img
                      src={`${BASE_URL}/rooddi/images/img/safety-icon-bitoin-sell-buy.png`}
                      alt="img"
                    />
                    <h3 className="text-primary">Safe</h3>
                    <p className="text-white">
                      People love our easy-to-use products. From local payment
                      methods to customer support in many different languages,
                      we make your Bitcoin experience the best one.
                    </p>
                  </div>
                  <div className="col-lg-4 text-center">
                    <img
                      src={`${BASE_URL}/rooddi/images/img/faster-icon-bitcoin-buy-sell.png`}
                    />
                    <h3 className="text-primary">Fast</h3>
                    <p className="text-white">
                      People love our easy-to-use products. From local payment
                      methods to customer support in many different languages,
                      we make your Bitcoin experience the best one.
                    </p>
                  </div>
                  <div className="col-lg-4 text-center">
                    <img
                      src={`${BASE_URL}/rooddi/images/img/reliable-bitcoin-buy-and-sell.png`}
                    />
                    <h3 className="text-primary">Reliable</h3>
                    <p className="text-white">
                      People love our easy-to-use products. From local payment
                      methods to customer support in many different languages,
                      we make your Bitcoin experience the best one.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-5 col-12">
                <div className="text-center">
                  <img
                    src={`${BASE_URL}/rooddi/images/front-end-img/invest_ilust1.png`}
                    className="img-fluid"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="bg-white" data-aos="fade-up">
          <div className="container py-0">
            <div className="row align-items-center">
              <div className="col-md-6 col-12">
                <h1 className="mb-25 text-dark">
                  Peer 2 Peer Crypto Exchange
                  <span className="text-success"> </span>
                </h1>
                <p className="text-dark mb-50">
                  We all have our own techniques, but one of the most effective
                  techniques is to actually put some text where text goes and
                  some pictures where pictures go to make sure everyone can see
                  the vision you’ve created.
                </p>
                <h5 className="fw-600 text-dark">Estimated Mingin Digit</h5>
                <h3 className="fw-600 text-dark">10092050.0145 / BTC</h3>
                <p>
                  <button className="btn btn-primary">Trade P2P Now!</button>
                </p>
              </div>
              <div className="col-md-6 col-12">
                <div className="text-center">
                  <img
                    src={`${BASE_URL}/rooddi/images/img/p2p-exchange.jpg`}
                    className="img-fluid"
                    alt="p2p Bitcoin, Ethereum, Litcoin Exchange"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="py-50 bg-dark3" data-aos="fade-up">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-md-12 col-12 portfolio_list">
                <h1 className="mb-25 text-white text-center">
                  Buy, <span className="text-danger">Sell</span> Crypto made{" "}
                  <span className="text-primary">easy</span>.<br /> Download the
                  mobile app for a <br />
                  whole new experience.
                </h1>
                <div className="row">
                  <div className="col-xl-6 col-md-6">
                    <div className="media">
                      <span className="port-icon border-success">
                        {" "}
                        <i className="text-success fa fa-bar-chart" />
                      </span>
                      <div className="media-body">
                        <h4 className="text-primary">Manage your portfolio</h4>
                        <p>
                          Buy and sell popular digital currencies, keep track of
                          them in the one place.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-6 col-md-6">
                    <div className="media">
                      <span className="port-icon border-success">
                        {" "}
                        <i className="text-success fa fa-calendar-check-o" />
                      </span>
                      <div className="media-body">
                        <h4 className="text-primary">Recurring buys</h4>
                        <p>
                          Invest in Treemium ocurrency slowly over time by
                          scheduling buys daily, weekly, or monthly.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-6 col-md-6">
                    <div className="media">
                      <span className="port-icon border-success">
                        {" "}
                        <i className="text-success fa fa-lock" />
                      </span>
                      <div className="media-body">
                        <h4 className="text-primary">Vault protection</h4>
                        <p>
                          For added security, store your funds in a vault with
                          time delayed withdrawals.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-6 col-md-6">
                    <div className="media">
                      <span className="port-icon border-success">
                        {" "}
                        <i className="text-success fa fa-mobile" />
                      </span>
                      <div className="media-body">
                        <h4 className="text-primary">Mobile apps</h4>
                        <p>
                          Stay on top of the markets with the Treemium app for{" "}
                          <a href="#">Android</a> or
                          <a href="#">iOS</a>.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="py-50 bg-white">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <h2 className="text-dark">What people Say</h2>
                <hr />
              </div>
            </div>
            <div className="row">
              <div className="col-md-6 col-12 position-relative">
                <div className="testimonial-bx mb-30">
                  <div className="testimonial-thumb">
                    <img
                      src={`${BASE_URL}/rooddi/images/avatar-1.png`}
                      alt=""
                    />
                  </div>
                  <div className="testimonial-info">
                    <h4 className="name">Sophia</h4>
                    <p>-Lorem Ipsum</p>
                  </div>
                  <div className="testimonial-content">
                    <p className="fs-16">
                      Contrary to popular belief, Lorem Ipsum is not simply
                      random text. It has roots in a piece of classical Latin
                      literature from 45 BC, making it over 2000 years old.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-12 position-relative">
                <div className="testimonial-bx mb-30">
                  <div className="testimonial-thumb">
                    <img
                      src={`${BASE_URL}/rooddi/images/avatar-2.png`}
                      alt=""
                    />
                  </div>
                  <div className="testimonial-info">
                    <h4 className="name">Isabella</h4>
                    <p>-Lorem Ipsum</p>
                  </div>
                  <div className="testimonial-content">
                    <p className="fs-16">
                      Contrary to popular belief, Lorem Ipsum is not simply
                      random text. It has roots in a piece of classical Latin
                      literature from 45 BC, making it over 2000 years old.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-12 position-relative">
                <div className="testimonial-bx mb-30">
                  <div className="testimonial-thumb">
                    <img
                      src={`${BASE_URL}/rooddi/images/avatar-3.png`}
                      alt=""
                    />
                  </div>
                  <div className="testimonial-info">
                    <h4 className="name">Mason</h4>
                    <p>-Lorem Ipsum</p>
                  </div>
                  <div className="testimonial-content">
                    <p className="fs-16">
                      Contrary to popular belief, Lorem Ipsum is not simply
                      random text. It has roots in a piece of classical Latin
                      literature from 45 BC, making it over 2000 years old.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-12 position-relative">
                <div className="testimonial-bx mb-30">
                  <div className="testimonial-thumb">
                    <img
                      src={`${BASE_URL}/rooddi/images/avatar-4.png`}
                      alt=""
                    />
                  </div>
                  <div className="testimonial-info">
                    <h4 className="name">Michael</h4>
                    <p>-Lorem Ipsum</p>
                  </div>
                  <div className="testimonial-content">
                    <p className="fs-16">
                      Contrary to popular belief, Lorem Ipsum is not simply
                      random text. It has roots in a piece of classical Latin
                      literature from 45 BC, making it over 2000 years old.
                    </p>
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

export default Section;
