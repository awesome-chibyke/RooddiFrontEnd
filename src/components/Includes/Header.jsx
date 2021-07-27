/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
// import Link from "react"
import { BASE_URL } from "../../common_variables";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { connect, useSelector, useDispatch  } from "react-redux";

function Header() {

  const allState = useSelector(state => state);
  let {registration:registrationData, activation:activationData, login:loginData} = allState;
  let {isLogged} = loginData;

  let userObject = {};
  if(loginData.isLogged === true){
    userObject = loginData.user_data.user;
  }

  return (
    <>
      <header className="top-bar dark-overlay-top">
        <div className="topbar">
          <div className="container">
            <div className="row justify-content-end">
              <div className="col-lg-6 col-12 d-lg-block d-none">
                <div className="topbar-social text-center text-md-start topbar-left">
                  <ul className="list-inline d-md-flex d-inline-block">
                    <li className="ms-10 pe-10">
                      <a href="faqs">
                        <i className="fa fa-question-circle" /> Ask a Question
                      </a>
                    </li>
                    <li className="ms-10 pe-10">
                      <a href="mail:'.$siteEmail3.'">
                        <i className="fa fa-envelope" /> hello@rooddi.com
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-6 col-12 xs-mb-10">
                <div className="topbar-call text-center text-lg-end topbar-right">
                  <ul className="list-inline d-lg-flex justify-content-end">
                    <li className="me-10 ps-10 lng-drop">
                      <select className="header-lang-bx selectpicker">
                        <option>USD</option>
                        <option>EUR</option>
                        <option>GBP</option>
                        <option>INR</option>
                      </select>
                    </li>
                    <li className="me-10 ps-10 lng-drop">
                      <select className="header-lang-bx selectpicker">
                        <option data-icon="flag-icon flag-icon-us">
                          Eng USA
                        </option>
                        <option data-icon="flag-icon flag-icon-gb">
                          Eng UK
                        </option>
                      </select>
                    </li>
                    <li className="me-10 ps-10">
                      <Link to="/login" className="text-capitalize">
                        <i className="fa fa-sign-in d-md-inline-block d-none" />{" "}
                        <span>Login</span>
                      </Link>
                    </li>
                    <li className="me-10 ps-10">
                      <a href="register">
                        <i className="fa fa-dashboard d-md-inline-block d-none" />{" "}
                        My Account {isLogged === true ? userObject.email: ""}
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <nav hidden className="nav-white nav-transparent dark-overlay">
          <div className="nav-header">
            <a href="./" className="brand">
              <img src={`${BASE_URL}/rooddi/images/img/xetima-coin.png`} className="img-fluid" alt="img" style={{ width: "100px", marginTop: "-15px" }}/>
            </a>
            <button className="toggle-bar">
              <span className="ti-menu" />
            </button>
          </div>
          <ul className="menu">
            <li>
              <Link to="/fees" className="text-capitalize">
                <span>Fees</span>
              </Link>
              {/*<a href="/fees" className="text-capitalize">
                Fees
              </a>*/}
            </li>
            <li>
              <Link to="/features" className="text-capitalize">
                <span>Features</span>
              </Link>
              {/*<a href="features" className="text-capitalize">
                Features
              </a>*/}
            </li>
            <li>
              <Link to="/wallet" className="text-capitalize">
                <span>Wallet</span>
              </Link>
              {/*<a href="wallet" className="text-capitalize">*/}
              {/*  Wallet*/}
              {/*</a>*/}
            </li>
            <li className="dropdown">
              <a href="#" className="text-capitalize">
                Buy Crypto
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a href="buy-crypto-card">
                    <i className="fa fa-star" /> &nbsp; &nbsp; Credit/Debit Card
                    <i className="fa fa-long-arrow-right pull-right text-white" />
                    <br />
                    <small>(Visa, Master Card)</small>
                  </a>
                </li>
                <li>
                  <a href="buy-sell-p2p">
                    <i className="fa fa-star" /> &nbsp; &nbsp; P2P Trading
                    <i className="fa fa-long-arrow-right pull-right text-white" />
                    <br />
                    <small>(Bank transfer and others)</small>
                  </a>
                </li>
                <li>
                  <a href="buy-sell-crypto-thirdparty">
                    <i className="fa fa-star" /> &nbsp; &nbsp; Third-party
                    Payment
                    <i className="fa fa-long-arrow-right pull-right text-white" />
                    <br />
                    <small>(Easier)</small>
                  </a>
                </li>
              </ul>
            </li>
            <li className="dropdown">
              <a href="#" className="text-capitalize">
                Trade
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a href="currency-converter">
                    Currency Converter{" "}
                    <i className="fa fa-long-arrow-right pull-right text-white" />
                  </a>
                </li>
                <li>
                  <a href="live-coin">
                    Live Coin Chart{" "}
                    <i className="fa fa-long-arrow-right pull-right text-white" />
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <a href="nft" className="text-capitalize">
                NFT
              </a>
            </li>
          </ul>
          <ul className="attributes">
            <li className="d-md-block d-none">
              <Link to="/signup" className="text-capitalize px-10 pt-15 pb-10">
                <span className="btn btn-primary py-5">Register Now</span>
              </Link>
              {/*<a href="/register" className="px-10 pt-15 pb-10">
                <div className="btn btn-primary py-5">Register Now</div>
              </a>*/}
            </li>
            <li>
              <a href="#" className="toggle-search-fullscreen">
                <span className="ti-search" />
              </a>
            </li>
          </ul>
          <div className="wrap-search-fullscreen">
            <div className="container">
              <button className="close-search">
                <span className="ti-close" />
              </button>
              <input type="text" placeholder="Search..." />
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}

export default Header;
