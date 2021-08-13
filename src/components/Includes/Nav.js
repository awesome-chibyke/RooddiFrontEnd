/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import {Link} from "react-router-dom";
import {BASE_URL} from "../../common_variables";
import React, {useEffect, useState} from "react";
import {useSelector} from "react-redux";

const Nav = () => {

    const allState = useSelector(state => state);
    let {registration:registrationData,login:loginData, authentication:authenticationData} = allState;

    const [componentLogged, setComponentLogged] = useState(null);
    const [componentNotLogged, setComponentNotLogged] = useState(null);

    function returnButton() {
        if(loginData.isLogged === true){
            setComponentLogged('yes');
            setComponentNotLogged(null);
        }else{
            setComponentLogged(null);
            setComponentNotLogged('yes');
        }
    }

    useEffect(() => {
        returnButton();
    }, [loginData])

    return (
        <>
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
                            {componentLogged && (<Link to="nft" className="text-capitalize">NFT</Link>)}
                    </li>

                </ul>

                <ul className="attributes">
                    <li className="d-md-block d-none" >
                        {componentLogged && (<Link to="/dashboard" className="px-10 pt-15 pb-10">
                            <div className="btn btn-primary py-5">Dashboard</div>
                        </Link>)}

                        {componentNotLogged && (<Link to="/signup" className="px-10 pt-15 pb-10">
                            {console.log('no')}
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
        </>
    )

}

export default Nav;