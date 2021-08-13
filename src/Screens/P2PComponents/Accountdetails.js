import React from 'react'

const Account = () => {

    const container = {
        marginTop: '2rem',
        marginLeft: '0.2rem', 
        border: '1px solid gray',
        borderRadius: '0.3rem'
    }

    const fontStyles= {
        fontWeight: 'bold'
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
                            <span style={{fontSize: '1.1rem'}}>65774635273965169</span> 
                        </h6>
                    </div>
                </div>
                <hr style={{width: '70%'}}/>
                <div className="row" style={{marginTop: '3rem'}}>
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
                                <div className="warning" style={{
                                    background: 'orange',
                                    color: 'white',
                                    marginBottom: '1rem'
                                    }}>
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
                        <div className="row" style={{marginTop: '2rem'}}>
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
            </div>
        </>
    )
}

export default Account
