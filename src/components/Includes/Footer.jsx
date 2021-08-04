/* eslint-disable no-script-url */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { BASE_URL } from "../../common_variables";

function Footer() {
  return (
    <>
      <footer className="footer_three bt-1 border-dark">
        <div className="footer-top pt-50 bg-dark3">
          <div className="container">
            <div className="row">
              <div className="col-lg-3 col-12">
                <div className="widget">
                  <h4 className="footer-title text-white">About</h4>
                  <hr className="bg-primary mb-10 mt-0 d-inline-block mx-auto w-60" />
                  <div className="row">
                    <div href="#" className="col-lg-6 col-6 col-xs-6 pt-1">
                      <img
                        src={`${BASE_URL}/rooddi/images/img/app-store.png`}
                        style={{ width: "135px", height: "40px" }}
                        alt=""
                      />
                    </div>

                    <div href="#" className="col-lg-6 col-6 col-xs-6 pt-1">
                      <img
                        src={`${BASE_URL}/rooddi/images/img/google-play.png`}
                        style={{ width: "135px", height: "40px" }}
                        alt=""
                      />
                    </div>
                  </div>
                  <p className="text-justify mb-5 mt-15">
                    Buy &amp; sell Bitcoin, Ethereum, Litcon, Dodge made easy.
                    Join the world's largest crypto exchange platform, trusted
                    by users and businesses. <br />
                    <br />
                    Get started the process is quite simple.
                  </p>
                </div>
              </div>
              <div className="col-lg-3 col-12">
                <div className="widget">
                  <h4 className="footer-title text-white">Contact Info</h4>
                  <hr className="bg-primary mb-10 mt-0 d-inline-block mx-auto w-60" />
                  <ul className="list list-unstyled mb-30">
                    <li>
                      {" "}
                      <i className="fa fa-map-marker" /> 123, Lorem Ipsum, Dummy
                      City,
                      <br />
                      FL-12345 USA
                    </li>
                    <li>
                      {" "}
                      <i className="fa fa-phone" />{" "}
                      <span>+(1) 123-878-1649 </span>
                      <br />
                      <span>+(1) 450-345-6789 </span>
                    </li>
                    <li>
                      {" "}
                      <i className="fa fa-envelope" />{" "}
                      <span>hello@rooddi.com </span>
                      <br />
                      <span>support@rooddi.com </span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-12 col-lg-2">
                <div className="widget footer_widget clearfix">
                  <h4 className="footer-title text-white">Quick Link</h4>
                  <hr className="bg-primary mb-10 mt-0 d-inline-block mx-auto w-60" />
                  <ul className="list-unstyled">
                    <li>
                      <a href="./">Home</a>
                    </li>
                    <li>
                      <a href="about">About</a>
                    </li>
                    <li>
                      <a href="blog/">Blog</a>
                    </li>
                    <li>
                      <a href="faqs">FAQs</a>
                    </li>
                    <li>
                      <a href="support">Support/Help Center</a>
                    </li>
                    <li>
                      <a href="careers">Careers</a>
                    </li>
                    <li>
                      <a href="register">Sign-Up</a>
                    </li>
                    <li>
                      <a href="login">Sign-In</a>
                    </li>
                    <li>
                      <a href="feedback">Give Us Feedback</a>
                    </li>
                    <li>
                      <a href="terms">Terms &amp; Condition</a>
                    </li>
                    <li>
                      <a href="policy">Policy</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-12 col-lg-2">
                <div className="widget footer_widget clearfix">
                  <h4 className="footer-title text-white">Features</h4>
                  <hr className="bg-primary mb-10 mt-0 d-inline-block mx-auto w-60" />
                  <ul className="list-unstyled">
                    <li>
                      <a href="features">Features</a>
                    </li>
                    <li>
                      <a href="fees">Fees</a>
                    </li>
                    <li>
                      <a href="wallet">Wallet</a>
                    </li>
                    <li>
                      <a href="buy_sell_crypto?type=p2p">Buy Crypto</a>
                    </li>
                    <li>
                      <a href="live_coin">Market</a>
                    </li>
                    <li>
                      <a href="affiliate">Affiliate</a>
                    </li>
                    <li>
                      <a href="community">Community</a>
                    </li>
                    <li>
                      <a href="p2p">P2P Merchant Application</a>
                    </li>
                    <li>
                      <a href="academy">Academy</a>
                    </li>
                    <li>
                      <a href="verification">Rooddi Verication</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-2 col-12">
                <div className="widget">
                  <h4 className="footer-title text-white">Card Payments</h4>
                  <hr className="bg-primary mb-10 mt-0 d-inline-block mx-auto w-60" />
                  <ul className="payment-icon list-unstyled d-flex gap-items-1">
                    <li className="ps-0">
                      <a href="javascript:;">
                        <i className="fa fa-cc-amex" aria-hidden="true" />
                      </a>
                    </li>
                    <li>
                      <a href="javascript:;">
                        <i className="fa fa-cc-visa" aria-hidden="true" />
                      </a>
                    </li>
                    <li>
                      <a href="javascript:;">
                        <i
                          className="fa fa-credit-card-alt"
                          aria-hidden="true"
                        />
                      </a>
                    </li>
                    <li>
                      <a href="javascript:;">
                        <i className="fa fa-cc-mastercard" aria-hidden="true" />
                      </a>
                    </li>
                    <li>
                      <a href="javascript:;">
                        <i className="fa fa-cc-paypal" aria-hidden="true" />
                      </a>
                    </li>
                  </ul>
                  <ul className="list-unstyled">
                    <li>
                      <a href="buy-bitcoin">Buy Bitcoin</a>
                    </li>
                    <li>
                      <a href="buy-ethereum">Buy Ethereum</a>
                    </li>
                    <li>
                      <a href="buy-bnb">Buy BNB</a>
                    </li>
                    <li>
                      <a href="buy-ripple">Buy Ripple</a>
                    </li>
                    <li>
                      <a href="buy-litecoin">Buy Litecoin</a>
                    </li>
                    <li>
                      <a href="buy-bitcoincash">Buy Bitcoin Cash</a>
                    </li>
                    <li>
                      <a href="buy-dogecoin">Buy Dogecoin</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom bg-dark3">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-md-6 col-12 text-md-start text-center">
                {" "}
                © 2021 <span className="text-white"> Rooddi.com</span> All
                Rights Reserved.
              </div>
              <div className="col-md-6 mt-md-0 mt-20">
                <div className="social-icons">
                  <ul className="list-unstyled d-flex gap-items-1 justify-content-md-end justify-content-center">
                    <li>
                      <a
                        href="https://facebook.com/"
                        className="waves-effect waves-circle btn btn-social-icon btn-circle btn-facebook"
                      >
                        <i className="fa fa-facebook" />
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://twitter.com/"
                        className="waves-effect waves-circle btn btn-social-icon btn-circle btn-twitter"
                      >
                        <i className="fa fa-twitter" />
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://linkedin.com/"
                        className="waves-effect waves-circle btn btn-social-icon btn-circle btn-linkedin"
                      >
                        <i className="fa fa-linkedin" />
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://youtube.com/"
                        className="waves-effect waves-circle btn btn-social-icon btn-circle btn-youtube"
                      >
                        <i className="fa fa-youtube" />
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://youtube.com/"
                        className="waves-effect waves-circle btn btn-social-icon btn-circle btn-instagram"
                      >
                        <i className="fa fa-instagram" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
      
    </>
  );
}

export default Footer;
