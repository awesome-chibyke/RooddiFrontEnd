import React from 'react'
import { Button, Form, InputGroup, FormControl } from 'react-bootstrap'

const Action = () => {
    const positionRel = {
        position:"relative",
        cursor: 'pointer'
    }

    const positionAbs = {
        position:"absolute",
        right:"20px", 
        top:"3rem"
    }
    
    return (
        <>
           <div className="row" style={{marginBottom: '1rem'}}>
                <div className="col-12 col-sm-3">
                    <Form.Label style={{fontWeight: '500'}}>Amount</Form.Label>
                    <InputGroup className="mb-3">
                        <FormControl
                        placeholder="Enter amount NGN"
                        aria-label="Enter amount NGN"
                        aria-describedby="basic-addon2"
                        />
                        <Button variant="outline-secondary" id="button-addon2">
                        Search
                        </Button>
                    </InputGroup>
                </div>
                <div className="col-6 col-sm-2 form-group" style={positionRel}>
                    <Form.Label>Crypto</Form.Label>
                    <select className="form-control"  aria-label="Select Currency" style={{padding: '0.7rem', cursor: 'pointer'}}>
                    <option>USDT</option>
                    <option value="1">BUSD</option>
                    <option value="2">BNB</option>
                    <option value="3">BTC</option>
                    <option value="4">ETH</option>
                    </select>
                    <i className="fa fa-angle-down" style={positionAbs}></i>
                        
                </div>
                <div className="col-6 col-sm-2 form-group" style={positionRel}>
                    <Form.Label>Fiat</Form.Label>
                    <select className="form-control"  aria-label="Select Currency" style={{padding: '0.7rem', cursor: 'pointer'}}>
                    <option>NGN</option>
                    <option value="1">USD</option>
                    <option value="2">EUR</option>
                    <option value="3">GBP</option>
                    </select>
                    <i className="fa fa-angle-down" style={positionAbs}></i>
                        
                </div>

                <div className="col-12 col-sm-2 form-group" style={positionRel}>
                    <Form.Label>Payment</Form.Label>
                    <select className="form-control"  aria-label="Select Currency" style={{padding: '0.65rem', cursor: 'pointer'}}>
                    <option>All Payments</option>
                    <option value="1">Bank Transfer</option>
                    <option value="2">Wireless</option>
                    <option value="3">Debit Cards</option>
                    </select>
                    <i className="fa fa-angle-down" style={positionAbs}></i>
                        
                </div>
                <div className="col-12 col-sm-3 mt-25 ml-75">
                <Button style={{width:"100%"}} className="btn-block" variant="primary">Refresh</Button>{' '}
                </div>
            </div> 
        </>
    )
}

export default Action
