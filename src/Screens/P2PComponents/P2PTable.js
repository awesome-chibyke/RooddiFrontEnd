import React, {useState} from 'react'
import renderTooltip from './Tootip'
import {OverlayTrigger, Button} from 'react-bootstrap'
import Account from './Accountdetails'
import Transfer from './Transfer'
import P2PModal from './P2PModal'
import DynamiicModal from '../../components/DynamiicModal'
import AccountFooterModal from '../../components/AccountFooterModal'


const Table = () => {

    const [displayOrderModal, setDisplayOrderModal] = useState('none');
    const [displayAccountdetailsModal, setDisplayAccountdetailsModal] = useState('none');
    const [displayTransferModal, setDisplayTransferModal] = useState('none');

    return (
        <>
            <div className="cont">
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
                                            ⭐Madu Ifeanyi Emmanuel⭐<br/>
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
                                        <Button variant="primary" 
                                        onClick={() => setDisplayOrderModal(displayOrderModal === 'none' ? 'block': 'none')}
                                        >
                                            Buy USDT
                                        </Button>{' '}
                                        
                                    </td>
                                </tr>
                            </tbody>
                            <tbody>
                                <tr style={{textAlign:'center'}}>
                                    <td>
                                        <span className="mobile-head">Advertisers</span>
                                            ⭐Madu Ifeanyi Emmanuel⭐<br/>
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
                                        <Button variant="primary" 
                                        onClick={() => setDisplayOrderModal(displayOrderModal === 'none' ? 'block': 'none')}
                                        >
                                            Buy USDT
                                        </Button>{' '}
                                        
                                    </td>
                                </tr>
                            </tbody>
                            <tbody>
                                <tr style={{textAlign:'center'}}>
                                    <td>
                                        <span className="mobile-head">Advertisers</span>
                                            ⭐Madu Ifeanyi Emmanuel⭐<br/>
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
                                        <Button variant="primary" 
                                        onClick={() => setDisplayOrderModal(displayOrderModal === 'none' ? 'block': 'none')}
                                        >
                                            Buy USDT
                                        </Button>{' '}
                                        
                                    </td>
                                </tr>
                            </tbody>
                            <tbody>
                                <tr style={{textAlign:'center'}}>
                                    <td>
                                        <span className="mobile-head">Advertisers</span>
                                            ⭐Madu Ifeanyi Emmanuel⭐<br/>
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
                                        <Button variant="primary" 
                                        onClick={() => setDisplayOrderModal(displayOrderModal === 'none' ? 'block': 'none')}
                                        >
                                            Buy USDT
                                        </Button>{' '}
                                        
                                    </td>
                                </tr>
                            </tbody>
                            <tbody>
                                <tr style={{textAlign:'center'}}>
                                    <td>
                                        <span className="mobile-head">Advertisers</span>
                                            ⭐Madu Ifeanyi Emmanuel⭐<br/>
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
                                        <Button variant="primary" 
                                        onClick={() => setDisplayOrderModal(displayOrderModal === 'none' ? 'block': 'none')}
                                        >
                                            Buy USDT
                                        </Button>{' '}
                                        
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <DynamiicModal
                    widthSize={'100%'}
                    marginLeft={'0%'}
                    marginRight={'0%'}
                    contents={<P2PModal closeModal={setDisplayOrderModal} toggleAccountModal={setDisplayAccountdetailsModal} accountModalStatus={displayAccountdetailsModal} />}
                    headerTitleText={''}
                    displayModal={displayOrderModal}
                    closeModal={setDisplayOrderModal}
                    optionForStyleOrClass={'use_style'}
                />
            
                <DynamiicModal
                    widthSize={'100%'}
                    marginLeft={'0%'}
                    marginRight={'0%'}
                    contents={<Account closeModal={setDisplayAccountdetailsModal} displayTransferModal={setDisplayTransferModal}  />}
                    headerTitleText={''}
                    displayModal={displayAccountdetailsModal}
                    closeModal={setDisplayAccountdetailsModal}
                    footer={<AccountFooterModal />}
                    optionForStyleOrClass={'use_style'}
                />

                <DynamiicModal
                    widthSize={'100%'}
                    marginLeft={'0%'}
                    marginRight={'0%'}
                    contents={<Transfer closeModal={setDisplayTransferModal} />}
                    headerTitleText={''}
                    displayModal={displayTransferModal}
                    closeModal={setDisplayTransferModal}
                    optionForStyleOrClass={'use_style'}
                />
            </div>
        </>
    )
}

export default Table
