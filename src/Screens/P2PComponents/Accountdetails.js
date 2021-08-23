import React from 'react'
import { Button } from 'react-bootstrap'

const Account = ({closeModal, displayTransferModal}) => {

    const container = {
        marginTop: '2rem',
        marginLeft: '0.2rem', 
        border: '1px solid #e4e6ef',
        borderRadius: '0.3rem'
    }

    const content = {
        marginTop: '2rem',
        marginLeft: '0.2rem',
        marginBottom: '2rem',
        borderRadius: '0.3rem',
        backgroundColor: '#e4e6ef',
        color: '#3a3a3a',
        fontWeight: '400'
    }

    const fontStyles = {
        fontWeight: 'bold'
    }

    const warning = {
        background: ' orange',
        color: 'white',
        marginBottom: '1rem'
    }
    
   
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-2"></div>
                    <div className="col-12 col-sm-4">
                        <h2>Buy USDT</h2>
                    </div>
                    <div className="col-12 col-sm-4" style={{marginTop: '0.5rem'}}>
                        <h6>Created time:&nbsp; 
                            <span style={{fontSize: '1.1rem'}}>2021-08-13 02:30:35:55</span> 
                        </h6>
                        <h6>Order number:&nbsp; 
                            <span style={{fontSize: '1.1rem'}}>65774635273965169</span>&nbsp;<i class="fa fa-copy" ></i>
                        </h6>
                    </div>
                </div>
                
                <hr style={{width: '70%'}}/>
                <div className="row mt-3">
                    <div className="col-2"></div>
                    <div className="col-12 col-sm-3">
                        <h5 style={fontStyles}>Amount</h5>
                        <h4 style={{color: 'green'}}>N 5,000</h4>
                    </div>
                    <div className="col-12 col-sm-3">
                        <h5 style={fontStyles}>Price</h5>
                        <h4>2,581.25 NGN</h4>
                    </div>
                    <div className="col-12 col-sm-3">
                        <h5 style={fontStyles}>Quantity</h5>
                        <h4>9.65 USDT</h4>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 col-sm-2"></div>
                    <div className="col-12 col-sm-8" style={container}>
                        <div className="row">
                            <div style={{paddingLeft:"10px", paddingRight:"10px"}} className="col-12 col-sm-12">
                                <h5 style={{marginTop: '2rem'}}>
                                    Please confrim that you have successfuly transferred the money to the seller through the following payment method.
                                </h5>
                                <div className="mt-3" style={warning}>
                                    <p style={{padding: '1rem'}}>
                                        The following is the seller's payment info. Please make sure that the money is transferred from your account you own, matching your verified name. Money will NOT transfer automatically by the platform.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 col-sm-2"></div>
                    <div className="col-12 col-sm-8">
                        <div className="row mt-3">
                            <h4 style={{
                                fontWeight: 'bold',
                                marginTop: '1rem',
                                marginBottom: '1rem'
                            }}>Bank Transfer</h4>
                            <div className="col-12 col-sm-4">
                                <h5 style={fontStyles}>Account Name</h5>
                                <h4>Madu Ifeanyi Emmanuel</h4>
                            </div>
                            <div className="col-12 col-sm-4">
                                <h5 style={fontStyles}>Account Number</h5>
                                <h4>3038555780</h4>
                            </div>
                            <div className="col-12 col-sm-4">
                                <h5 style={fontStyles}>Bank Name</h5>
                                <h4>First Bank</h4>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 col-sm-2"></div>
                    <div className="col-12 col-sm-8 mt-3">
                        <h3>
                            Payment to be made 
                            <span style={{color:'#cc8600'}}>&nbsp;00:15:00</span>
                        </h3>
                        <h5>
                            Please make payments within 15 minutes, otherwise, the order will be cancelled.
                        </h5>
                        <div className="mt-3" style={warning}>
                            <p style={{padding: '1rem'}}>
                                ATTENTION! After making the fiat transfer, please the button below to inform the seller to receive payment, fail to do so will result in automatically cancellation of order and potentialy loss of all your assets. 
                            </p>
                        </div>
                            <div className="row" style={{display: 'flex', justifyContent: 'space-between'}}>
                                <div className="col-12 col-sm-3 mt-25 ml-75">
                                    <Button onClick={() => displayTransferModal('block')} style={{width:"100%"}} className="btn-block" variant="primary">Transfer Fund&nbsp;&nbsp;<i class="fa fa-arrow-right" ></i></Button>{' '}
                                </div>
                            <div className="col-12 col-sm-3 mt-25 ml-75">
                                <Button style={{width:"100%"}} className="btn-block" onClick={() => closeModal()} variant="light">Cancel</Button>{' '}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 col-sm-2"></div>
                    <div className="col-12 col-sm-8" style={content}>
                        <h5 style={{marginTop: '1rem'}}>Tips</h5>
                        <p>
                            1. Please do not include any information about BTC, ETH, USDT BNB and other digital asset names in the transfer notes to prevent payment from being intercepted or bank funds being frozen
                        </p>
                        <p>
                            2. Please do not include any information about BTC, ETH, USDT BNB and other digital asset names in the transfer notes to prevent payment from being intercepted or bank funds being frozen
                        </p>
                        <p>
                            3. Please do not include any information about BTC, ETH, USDT BNB and other digital asset names in the transfer notes to prevent payment from being intercepted or bank funds being frozen
                        </p>
                        <p>
                            4. Please do not include any information about BTC, ETH, USDT BNB and other digital asset names in the transfer notes to prevent payment from being intercepted or bank funds being frozen
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Account
