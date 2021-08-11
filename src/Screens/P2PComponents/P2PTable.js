import React from 'react'
import renderTooltip from './Tootip'
import {OverlayTrigger, Button} from 'react-bootstrap'

const Table = () => {

    return (
        <>
           
           <div className="row">
                <div className="col-12 col-sm-12">
                    <table id="example" className="table mainResponsiveTable" >
                        <thead >
                            <tr>
                                <th>Advertisers</th>
                                <th>Price</th>
                                <th>Limit/Available</th>
                                <th>Payment</th>
                                <th>Trade</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr style={{textAlign:'center'}}>
                                <td>
                                    <span className="mobile-head">Advertisers</span>
                                        ⭐Peace Praise⭐<br/>
                                        2293 orders 97.91% completion
                                </td>
                                <td>
                                    <span className="mobile-head">Price</span>501.20<sub>NGN</sub>
                                </td>
                                <td>
                                    <span className="mobile-head">Limit/Available
                                    </span>
                                        Available 50,058.76 USDT<br/>
                                        Limit N50,000.00 - N321,377.23
                                </td>
                                <td>
                                    
                                    <OverlayTrigger
                                        placement="bottom"
                                        delay={{ show: 250, hide: 400 }}
                                        overlay={renderTooltip}
                                    >
                                        <span class="btn btn-def btn-smaller">Bank Transfer
                                        </span>
                                    </OverlayTrigger>
                                </td>
                                <td>
                                    <Button variant="primary" >
                                        Buy USDT
                                    </Button>{' '}
                                    
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div> 
        </>
    )
}

export default Table
