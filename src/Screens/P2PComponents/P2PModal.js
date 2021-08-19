import React from 'react'
import renderTooltip from './Tootip'
import {Form, InputGroup, FormControl, Button, OverlayTrigger} from 'react-bootstrap'

const P2PModal = ({closeModal, toggleAccountModal, accountModalStatus}) => {

    console.log(toggleAccountModal)
    const fontStyles = {
        fontWeight: 'bold'
    }
    return (
        <>
          <div className="row" style={{marginTop: '1rem'}}>
              
            <div className=" col-12 col-sm-8">
                <div className="row">
                    <h6 style={fontStyles}>
                    ⭐Madu Ifeanyi Emmanuel &nbsp;2293 orders &nbsp;|&nbsp; 97.91% completion
                    </h6>
                    <div className="col-12 col-sm-6 price-payment" style={{marginTop: '0.5rem'}}>
                        <h6 style={fontStyles}>Price &nbsp;
                            <span 
                            style={{
                                fontSize: '1.2rem',
                                color: 'green'
                                }}>
                            501.20 NGN &nbsp;
                            </span>
                            24s 
                        </h6>
                        <h6 style={fontStyles}>
                            Payment Time Limit <span style={{fontSize: '1rem'}}>15 Minutes</span> 
                        </h6>
                    </div>
                    <div className="col-12 col-sm-6">
                        <h6 style={fontStyles}>
                            Available <span style={{fontSize: '1rem'}}>15.35 USDT</span> 
                        </h6>
                        <h6 style={fontStyles}>
                            Seller's payments method &nbsp;
                            <OverlayTrigger 
                                    placement="bottom"
                                    delay={{ show: 250, hide: 400 }}
                                    overlay={renderTooltip}
                                >
                                    <span class="btn btn-def btn-smaller">Bank Transfer
                                    </span>
                            </OverlayTrigger> 
                        </h6>
                    </div>
                </div>
                <div className="terms" style={{marginTop: '1rem'}}>
                    <h5 style={fontStyles}>Terms and condition</h5>
                    <p>
                        Kindly make payments, am online to process the transaction and release the USDT available for you.
                        Please endevour to call only after 5minutes you placed your order, because am likel to be processing it with phone...so your early call would interrupt it.
                    
                        Remember not to include anything relate to crypto i the transaction details, also i don't accept paymments from account other than yours. 
                        
                    </p>
                </div>
            </div>
              <div className="col-12 col-sm-4" style={{borderLeft: '1px solid #e4e6ef'}}>
              <Form.Label style={fontStyles}>I want to pay</Form.Label>
              <InputGroup className="mb-3">
                        <FormControl
                        placeholder="Enter amount in naira"
                        aria-label="Enter amount in naira"
                        aria-describedby="basic-addon2"
                        />
                        <Button variant="outline-secondary" id="button-addon2">
                        NGN
                        </Button>
                </InputGroup>
                <Form.Label style={fontStyles}>I will receive</Form.Label>
              <InputGroup className="mb-3">
                        <FormControl
                        placeholder="Equivalent in crypto"
                        aria-label="Equivalent in crypto"
                        aria-describedby="basic-addon2"
                        />
                        <Button variant="outline-secondary" id="button-addon2">
                        USDT
                        </Button>
                </InputGroup>
                    <div className="row">
                        <div className="col-12 col-sm-6 mt-25 ml-75">
                            <Button onClick={() => closeModal('none') } className="btn-block cancel-btn" style={{width:'100%'}} variant="light">Cancel</Button>{' '}
                        </div>
                        <div className="col-12 col-sm-6 mt-25 ml-75">
                            <Button onClick={ () => toggleAccountModal('block') } className="btn-block" variant="primary" style={{width:'100%'}}>Buy USDT</Button>{' '}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default P2PModal
