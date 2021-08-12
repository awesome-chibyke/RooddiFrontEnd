import React from 'react'
import {Button} from 'react-bootstrap'

const BuyAndSell = () => {
    return (
        <>
          <div className="col-xl-10 col-12 offset-lg-1 bg-success-light p-10">
                <div className="row">
                    <div className="col-2 col-sm-1">
                    <Button variant="primary">Buy</Button>{' '}
                    </div>
                    <div className="col-2 col-sm-1">
                    <Button variant="primary">Sell</Button>{' '}
                    </div>
                    <div className="col-3 col-sm-8"></div>
                    <div className="col-5 col-sm-2">
                    <span className="btn btn-def btn-smaller pull-right">
                        <a href="sell-crypto">
                        Order History <i className="fa fa-long-arrow-right text-primary" />
                        </a>
                    </span>
                    </div>
                </div>  
            </div>  
        </>
    )
}

export default BuyAndSell
