/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect} from "react";
import { logoutAction, destroyUserAuthislogged, disableActivationIslogged } from "../../redux";
import { connect, useSelector, useDispatch  } from "react-redux";
import { BASE_URL } from "../../common_variables";
import { BrowserRouter as Router, Switch, Route, Link, useParams } from "react-router-dom";

function Header() {

  const allState = useSelector(state => state);
  let {registration:registrationData,login:loginData, authentication:authenticationData} = allState;

  const [isLoggedStatus, setIsLoggedStatus] = useState(false);

  let {isLogged, user_data, logout_loading, logout_error, logout_success } = loginData;//login data

  if(isLogged === true){//check if the islogged is true
    var {email} = user_data.user;
    var {token} = user_data;
  }

  const dispatch = useDispatch();

  const logUserOut = async (token) =>{
    let retVal = window.confirm('Do you want logout');
    if( retVal === true){
      dispatch(await destroyUserAuthislogged());
      dispatch(await logoutAction(token));
    }
  }

  return (
    <>
      <header className="top-bar white-overlay-top">
        <div className="topbar">
          <div className="container">
            <div className="row justify-content-end">
              <div className="col-lg-6 col-12 d-lg-block d-none">
                <div className="topbar-social text-center text-md-start topbar-left">
                  <ul className="list-inline d-md-flex d-inline-block">
                    <li className="ms-10 pe-10">
                      <Link to="faqs">
                        <i className="fa fa-question-circle" /> Ask a Question
                      </Link>
                    </li>
                    <li className="ms-10 pe-10">
                      <Link to="mail:hello@rooddi.com">
                        <i className="fa fa-envelope" /> {isLogged === true ? email : ''}
                      </Link>
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
                    <li className="me-10 ps-10">
                      {isLogged !== true ? (
                          <Link to="/login" >
                            <i className="fa fa-sign-in d-md-inline-block d-none" />{" "}
                            Login
                          </Link>
                      ) : (
                          <a href="javascript:;" onClick={() => logUserOut(token)} >
                            {logout_loading === true ? 'Loading.....':( <><i className="fa fa-sign-out d-md-inline-block d-none" /> Logout </> )  }

                          </a>
                      )}
                      {/*logout_loading, logout_error, logout_success*/}
                    </li>
                    {/*<li className="me-10 ps-10">
                      {isLogged === true ? (
                          <Link to="/signup">
                            <i className="fa fa-sign-up d-md-inline-block d-none" />{" "}
                            Register
                          </Link>
                      ) : (
                          <Link to="/dashboard">
                            <i className="fa fa-dashboard d-md-inline-block d-none" />{" "}
                            Dashboard
                          </Link>
                      )}

                    </li>*/}
                    <li className="ms-lg-10 pe-10">
                      <div className="btn-group">
                        <button
                          className="btn btn-rounded dropdown-toggle text-white fs-14"
                          type="button"
                          data-bs-toggle="dropdown"
                        >
                          <i className="fa fa-user-circle-o fa-1x" />
                        </button>
                        <div className="dropdown-menu yop wit200">
                          <Link
                            className="colo-nav dropdown-item colo-nv text-success"
                            to="profile"
                          >
                            {" "}
                            {isLogged === true ? email : ''} <br />
                            <i className="fa fa-long-arrow-right text-primary pull-right text-white" />
                          </Link>
                          <Link
                            className="colo-nav dropdown-item text-white baser"
                            to="dashboard"
                          >
                            <i className="fa fa-dashboard text-white" />{" "}
                            Dashboard
                          </Link>
                          <Link
                            className="colo-nav dropdown-item text-white baser"
                            to="security"
                          >
                            <i className="fa fa-lock text-white" /> Security
                          </Link>
                          <Link
                            className="colo-nav dropdown-item text-white baser"
                            to="identification"
                          >
                            <i className="fa fa-check-square-o text-white" />{" "}
                            Identification
                          </Link>
                          <Link
                            className="colo-nav dropdown-item text-white baser"
                            to="referral"
                          >
                            <i className="fa fa-users text-white" /> Referral
                          </Link>
                          <div className="divider">
                            <i className="fa fa-star-o" />
                          </div>
                          <Link
                            className="colo-nav dropdown-item text-white baser"
                            to="#"
                          >
                            <i className="fa fa-sign-out text-white" /> Log Out
                          </Link>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="btn-group">
                        <button
                          className="btn btn-rounded dropdown-toggle text-white fs-14"
                          type="button"
                          data-bs-toggle="dropdown"
                        >
                          <i className="fa fa-bell fa-1x" />{" "}
                          <span className="settop">9+</span>
                        </button>
                        <div className="dropdown-menu yop wit350">
                          <span className="colo-nav dropdown-item text-success">
                            21 pending notification{" "}
                            <button className="btn btn-smaller baser fs-10">
                              Clear All
                            </button>
                          </span>
                          <Link
                            className="colo-nav dropdown-item"
                            to="notification"
                          >
                            <div className="set-notif">
                              <h6 className="text-white">
                                <i className="fa fa-envelope-o fs-12 text-white" />{" "}
                                Login attempted from new IP
                              </h6>
                              <span className="text-white-50 text-wrap">
                                You have successfully authorized a new device or
                                in a new location to sign into your Binance
                                account.
                                <br />
                                <em className="text-info">5 mins ago</em>
                              </span>
                            </div>
                          </Link>
                          <Link
                            className="colo-nav dropdown-item"
                            to="notification"
                          >
                            <div className="set-notif">
                              <h6 className="text-white">
                                <i className="fa fa-envelope-o fs-12 text-white" />{" "}
                                Login attempted from new IP
                              </h6>
                              <span className="text-white-50 text-wrap">
                                You have successfully authorized a new device or
                                in a new location to sign into your Binance
                                account.
                                <br />
                                <em className="text-info">5 mins ago</em>
                              </span>
                            </div>
                          </Link>
                          <Link
                            className="colo-nav dropdown-item"
                            to="notification"
                          >
                            <div className="set-notif">
                              <h6 className="text-white">
                                <i className="fa fa-envelope-o fs-12 text-white" />{" "}
                                Login attempted from new IP
                              </h6>
                              <span className="text-white-50 text-wrap">
                                You have successfully authorized a new device or
                                in a new location to sign into your Binance
                                account.
                                <br />
                                <em className="text-info">5 mins ago</em>
                              </span>
                            </div>
                          </Link>
                          <p>
                            <Link
                              to="ntification"
                              className="text-primary p-10 pull-right"
                            >
                              {" "}
                              See All
                            </Link>
                          </p>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <nav hidden className="nav-white nav-transparent dark-overlay">
          <div className="nav-header">
            <Link to="./" className="brand">
              <img
                src={`${BASE_URL}/rooddi/images/img/xetima-coin.png`}
                style={{ width: "100px", marginTop: "-15px" }}
                alt="Rooddi Buy, Sell and Receive Bitcoin, Ethereum, Dodge"
              />
            </Link>
            <button className="toggle-bar">
              <span className="ti-menu" />
            </button>
          </div>
          <ul className="menu">
            <li>
              <Link to="fees" className="text-capitalize">
                Fees
              </Link>
            </li>
            <li>
              <Link to="features" className="text-capitalize">
                Features
              </Link>
            </li>
            <li>
              <Link to="wallet" className="text-capitalize">
                Wallet
              </Link>
            </li>
            <li className="dropdown">
              <Link to="#" className="text-capitalize">
                Buy Crypto
              </Link>

              <ul className="dropdown-menu">
                <li>
                  <Link to="buy-crypto-card">
                    <i className="fa fa-star" /> &nbsp; &nbsp; Credit/Debit Card
                    <i className="fa fa-long-arrow-right pull-right text-white" />
                    <br />
                    <small>(Visa, Master Card)</small>
                  </Link>
                </li>
                <li>
                  <Link to="buy-sell-p2p">
                    <i className="fa fa-star" /> &nbsp; &nbsp; P2P Trading
                    <i className="fa fa-long-arrow-right pull-right text-white" />
                    <br />
                    <small>(Bank transfer and others)</small>
                  </Link>
                </li>
                <li>
                  <Link to="buy-sell-crypto-thirdparty">
                    <i className="fa fa-star" /> &nbsp; &nbsp; Third-party
                    Payment
                    <i className="fa fa-long-arrow-right pull-right text-white" />
                    <br />
                    <small>(Easier)</small>
                  </Link>
                </li>
              </ul>
            </li>

            <li className="dropdown">
              <Link to="#" className="text-capitalize">
                Trade
              </Link>
              <ul className="dropdown-menu">
                <li>
                  <Link to="currency-converter">
                    Currency Converter{" "}
                    <i className="fa fa-long-arrow-right pull-right text-white" />
                  </Link>
                </li>
                <li>
                  <Link to="live-coin">
                    Live Coin Chart{" "}
                    <i className="fa fa-long-arrow-right pull-right text-white" />
                  </Link>
                </li>
              </ul>
            </li>
            <li>
              <Link to="nft" className="text-capitalize">
                NFT
              </Link>
            </li>

          </ul>

          <ul className="attributes">

            <li className="d-md-block d-none">
              {isLogged === true ? (
                  <Link to="/dashboard" className="px-10 pt-15 pb-10">
                    <div className="btn btn-primary py-5">Dashboard</div>
                  </Link>
              ) : (<Link to="/signup" className="px-10 pt-15 pb-10">
                <div className="btn btn-primary py-5">Register Now</div>
              </Link>)}

            </li>
            <li>

              <Link to="#" className="toggle-search-fullscreen">
                <span className="ti-search" />
              </Link>
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
