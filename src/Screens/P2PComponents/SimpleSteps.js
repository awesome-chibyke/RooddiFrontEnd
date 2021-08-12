import React from 'react'
import { BASE_URL } from "../../common_variables"

const SimpleStep = () => {
    return (
        <>
            <section className="py-50 bg-dark-ash">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-12 col-12 text-center">
                            <h1 className="mb-15">
                             Buy & Sell Crypto in 3 simple step
                             <hr className="w-100 bg-primary" />
                            </h1>
                        </div>
                    </div>
                    <div className="row mt-30">
                        <div className="col-xl-4 col-md-4 col-12">
                            <div className="box no-shadow">
                                <div className="box-body text-center">
                                    <span className="text-primary fs-50">
                                        <img 
                                        src={`${BASE_URL}/rooddi/images/img/signup-icon.png`}
                                        alt="img"
                                        className="rounded-circle max-w-50" />
                                    </span>
                                    <div 
                                    className="fw-600 fs-18 mb-2 mt-15">
                                        Sign up
                                    </div>
                                    <div className="fs-16">
                                        Sign up for free on web, iOS or Android and follow our easy process to set up your profile.
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-xl-4 col-md-4 col-12">
                            <div className="box no-shadow">
                                <div className="box-body text-center">
                                    <span className="text-primary fs-50">
                                        <img 
                                        src={`${BASE_URL}/rooddi/images/img/verify-identity.png`}
                                        alt="img"
                                        className="rounded-circle max-w-50" />
                                    </span>
                                    <div 
                                    className="fw-600 fs-18 mb-2 mt-15">
                                        Verify Identity
                                    </div>
                                    <div className="fs-16">
                                    Choose your preferred payment method like bank transfer, credit card to add money to your account Wallet or you can use the pair to pair method.
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-xl-4 col-md-4 col-12">
                            <div className="box no-shadow">
                                <div className="box-body text-center">
                                    <span className="text-primary fs-50">
                                        <img 
                                        src={`${BASE_URL}/rooddi/images/img/buy-sell-cryptocurrency.png`}
                                        alt="img"
                                        className="rounded-circle max-w-50" />
                                    </span>
                                    <div 
                                    className="fw-600 fs-18 mb-2 mt-15">
                                        Buy/Sell crypto
                                    </div>
                                    <div className="fs-16">
                                    Buy Bitcoin, Ethereum, Litecoin, then securely store it in your Wallet or send it on easily to friends.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default SimpleStep
