/* eslint-disable jsx-a11y/heading-has-content */
import React from "react";
import { BASE_URL } from "../common_variables";

const Features = () => {
  return (
    <>
      <div>
        <section className="bg-dark-body bg-food-white pt-150 pb-20">
          <div className="container">
            <div className="row">
              <div className="col-12 bg-food-white">
                <div className="text-center">
                  <h2 className="page-title text-white">Rooddi Features</h2>
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
                      Features
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
        <section className="py-lg-100 py-50 bg-white overflow-xh footer-background">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-7 col-12 text-start">
                <h6 className="sub-heading" />
                <div className="mb-15 text-h1">
                  {" "}
                  <span className="text-primary">Download</span> Rooddi{" "}
                  <span className="text-warning">App</span> <br />
                  on all devices.{" "}
                </div>
                <div className="tab-content">
                  <div className="py-15">
                    <p className="fs-18 mb-20">
                      Contrary to popular belief, Lorem Ipsum is not simply
                      random text. It has roots in a piece of classical Latin
                      literature from 45 BC, making it over 2000 years old.
                      Richard McClintock, a Latin professor at Hampden-Sydney
                      College in Virginia, looked up one of the more obscure
                      Latin words, consectetur, from a Lorem Ipsum passage, and
                      going through the cites
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-5 col-12 d-lg-block">
                <img src={`${BASE_URL}/rooddi/images/img/header_phones.png`}  alt="img" />
              </div>
            </div>
          </div>
        </section>
        <section
          className="bg-dark-body py-lg-100 py-50 bg-img overflow-xh footer-background"
          data-aos="fade-up"
        >
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6 col-12 d-lg-block">
                <img src={`${BASE_URL}/rooddi/images/img/app.png`}  alt="img" />
              </div>
              <div className="col-lg-6 col-12 text-start">
                <h6 className="sub-heading" />
                <div className="mb-15 text-h1 text-white">
                  {" "}
                  <span>Buy crypto</span>
                </div>
                <div className="tab-content">
                  <div className="py-15">
                    <h3 className="text-primary font-fam">
                      Most popular cryptocurrencies
                    </h3>
                    <p className="fs-18 mb-20 text-white font-fam">
                      Contrary to popular Contrary to popular belief, Lorem
                      Ipsum is not simply random text belief, Lorem Ipsum is.
                    </p>
                    <h3 className="text-primary font-fam">
                      Popular cryptocurrencies
                    </h3>
                    <p className="fs-18 mb-20 text-white font-fam">
                      Contrary to popular belief, Lorem Ipsum is not simply
                      random text. It has roots in.
                    </p>
                    <h3 className="text-primary font-fam">
                      Cryptocurrencies most popular
                    </h3>
                    <p className="fs-18 mb-20 text-white font-fam">
                      Contrary to popular belief, Lorem Ipsum is not simply
                      random.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section
          className="py-lg-100 py-50 bg-white overflow-xh footer-background"
          data-aos="fade-up"
        >
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-7 col-12 text-start">
                <h6 className="sub-heading" />
                <div className="mb-15 text-h1">
                  {" "}
                  <span className="text-primary">Download</span> Rooddi{" "}
                  <span className="text-warning">App</span> <br />
                  on all devices.{" "}
                </div>
                <div className="tab-content">
                  <div className="py-15">
                    <p className="fs-18 mb-20">
                      Contrary to popular belief, Lorem Ipsum is not simply
                      random text. It has roots in a piece of classical Latin
                      literature from 45 BC, making it over 2000 years old.
                      Richard McClintock, a Latin professor at Hampden-Sydney
                      College in Virginia, looked up one of the more obscure
                      Latin words, consectetur, from a Lorem Ipsum passage, and
                      going through the cites
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-5 col-12 d-lg-block">
                <img src={`${BASE_URL}/rooddi/images/img/earn-crypto.png`}  alt="img" />
                
              </div>
            </div>
          </div>
        </section>
        <section
          className=" bg-dark-body py-lg-100 py-50 bg-img overflow-xh footer-background"
          data-aos="fade-up"
        >
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-5 col-12 d-lg-block">
                <img src={`${BASE_URL}/rooddi/images/img/bitcoin-deposit.svg`}  alt="img" />
              </div>
              <div className="col-lg-7 col-12 text-start">
                <h6 className="sub-heading" />
                <div className="mb-15 text-h1 text-white">
                  {" "}
                  <span className="text-primary">Download</span> Rooddi{" "}
                  <span className="text-warning">App</span> <br />
                  on all devices.{" "}
                </div>
                <div className="tab-content">
                  <div className="py-15">
                    <p className="fs-18 mb-20 text-white">
                      Contrary to popular belief, Lorem Ipsum is not simply
                      random text. It has roots in a piece of classical Latin
                      literature from 45 BC, making it over 2000 years old.
                      Richard McClintock, a Latin professor at Hampden-Sydney
                      College in Virginia, looked up one of the more obscure
                      Latin words, consectetur, from a Lorem Ipsum passage, and
                      going through the cites
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section
          className="py-lg-100 py-50 bg-white overflow-xh footer-background"
          data-aos="fade-up"
        >
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-7 col-12 text-start">
                <h6 className="sub-heading" />
                <div className="mb-15 text-h1">
                  {" "}
                  <span className="text-primary">Download</span> Rooddi{" "}
                  <span className="text-warning">App</span> <br />
                  on all devices.{" "}
                </div>
                <div className="tab-content">
                  <div className="py-15">
                    <p className="fs-18 mb-20">
                      Contrary to popular belief, Lorem Ipsum is not simply
                      random text. It has roots in a piece of classical Latin
                      literature from 45 BC, making it over 2000 years old.
                      Richard McClintock, a Latin professor at Hampden-Sydney
                      College in Virginia, looked up one of the more obscure
                      Latin words, consectetur, from a Lorem Ipsum passage, and
                      going through the cites
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-5 col-12 d-lg-block">
                <img src={`${BASE_URL}/rooddi/images/img/get-crypto.png`}  alt="img" />
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Features;
