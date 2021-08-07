import {React, useState} from 'react'
import renderTooltip from '../components/Includes/Tootip'
import {Button, Form, ButtonGroup, ToggleButton, InputGroup, FormControl, OverlayTrigger, Pagination} from 'react-bootstrap';

const P2P = () => {
    const [radioValue, setRadioValue] = useState('1');
    
    const radios = [
        { name: 'USDT', value: '1'},
        { name: 'BTC', value: '2' },
        { name: 'BUSD', value: '3'},
        { name: 'BNB', value: '4' },
        { name: 'ETH', value: '5' },
        { name: 'NGN', value: '6' },
        { name: 'DAI', value: '7' }
    ];

    const positionRel = {
        position:"relative",
        cursor: 'pointer'
    }

    const positionAbs = {
        position:"absolute",
        right:"20px", 
        top:"3rem"
    }

    const hr = {
        width: '100%',
        marginTop: '0.5rem',
        marginBottom: '1.5rem'
    }

    const flex = {
        display: 'flex',
        justifyContent: 'space-between'
    }

    const spanSize = {
        fontSize: '0.8rem',
    }

    return (
        <>
            <div>
                <section
                className="bg-dark-body bg-food-white pt-80 pb-20"
                data-overlay={7}
                >
                    <div className="container">
                        <div className="row">
                            <div className="col-12 bg-food-white">
                                <div className="text-center">
                                <ol className="breadcrumb bg-transparent justify-content-center">
                                    <li
                                    className="breadcrumb-item text-white active"
                                    aria-current="page"
                                    />
                                </ol>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="bg-white bg-food-white">
                    <div className="col-12">
                        <div className="col-xl-12 col-md-12">
                        <div className="card shadow-b rad0">
                            <div className="card-body fix-styler">
                            <div className="buy-sell-widget px-2">
                                <div className="offset-lg-1 col-lg-10">
                                <ul className="stle-ul">
                                    <li>
                                    <a href="buy-sell-p2p">P2P</a>
                                    </li>
                                    <li>
                                    <a href="nft">NFT</a>
                                    </li>
                                    <li>
                                    <a href="swap">Swap</a>
                                    </li>
                                    <li>
                                    <a href="markets">Market</a>
                                    </li>
                                </ul>
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                </section>
                
                <div className="col-xl-10 col-12 offset-lg-1 bg-success-light p-10">
                    <Button variant="primary">Buy</Button>{' '}
                    <Button variant="primary">Sell</Button>{' '}
                    <ButtonGroup>
                        {radios.map((radio, idx) => (
                            //idx % 2 ? 
                        <ToggleButton
                            key={idx}
                            id={`radio-${idx}`}
                            type="radio"
                            variant={'outline-success'}
                            name="radio"
                            value={radio.value}
                            checked={radioValue === radio.value}
                            onChange={(e) => setRadioValue(e.currentTarget.value)}
                        >
                            {radio.name}
                        </ToggleButton>
                        ))}
                    </ButtonGroup>  
                    <span className="btn btn-def btn-smaller pull-right">
                        <a href="sell-crypto">
                        Order History <i className="fa fa-long-arrow-right text-primary" />
                        </a>
                    </span>
                </div>

                <section className="bg-white bg-food-black pt-30 pb-20"
                data-overlay={7}>
                    <div className="container">
                        <div className="row" style={{marginBottom: '1rem'}}>
                            <div className="col-3">
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
                            <div className="col-2 form-group" style={positionRel}>
                                <Form.Label>Fiat</Form.Label>
                                <select className="form-control"  aria-label="Select Currency" style={{padding: '0.7rem', cursor: 'pointer'}}>
                                <option>NGN</option>
                                <option value="1">USD</option>
                                <option value="2">EUR</option>
                                <option value="3">GBP</option>
                                </select>
                                <i className="fa fa-angle-down" style={positionAbs}></i>
                                    
                            </div>
                            <div className="col-2 form-group" style={positionRel}>
                                <Form.Label>Payment</Form.Label>
                                <select className="form-control"  aria-label="Select Currency" style={{padding: '0.65rem', cursor: 'pointer'}}>
                                <option>All Payments</option>
                                <option value="1">Bank Transfer</option>
                                <option value="2">Wireless</option>
                                <option value="3">Debit Cards</option>
                                </select>
                                <i className="fa fa-angle-down" style={positionAbs}></i>
                                    
                            </div>

                            <div className="col-3 mt-35">
                                <Form.Group className="mb-3 pd-10" controlId="formBasicCheckbox">
                                    <Form.Check type="checkbox" label="Only show merchant ads" />
                                </Form.Group>
                            </div>

                            <div className="col-2 mt-25 ml-75">
                            <Button variant="primary">Refresh</Button>{' '}
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12 mt-20" style={flex}>
                                <div className="advert">
                                    <h6>Advertisers</h6>
                                </div>
                                <div className="prices">
                                    <h6>Price</h6>
                                </div>
                                <div className="limit">
                                    <h6>Limit/Available</h6>
                                </div>
                                <div className="payment">
                                    <h6>Payment</h6>
                                </div>
                                <div className="trades">
                                    <h6>Trade</h6>
                                </div>
                            </div>
                        </div>
                        {/* first line */}
                        <hr style={hr}/>
                        <div className="row">
                            <div className="col-12" style={flex}>
                                <div className="merchant">
                                    <h6>Peace Praise</h6>
                                    <p style={spanSize}>286 orders | 99.31% completion</p>
                                </div>

                                <div className="amt" style={{marginLeft: '3rem'}}>
                                    <h5>510.20<sub>NGN</sub></h5>
                                </div>

                                <div className="limitavail" 
                                style={
                                    {marginLeft: '5rem', marginRight: '3rem'}
                                    }>
                                    <h6><span style={spanSize}>Available</span> 79.84 USDT</h6>
                                    <h6><span style={spanSize}>Limit</span> ₦1,000.00 - ₦2,050.00</h6>
                                </div>

                                <div className="transfer">
                                <OverlayTrigger
                                    placement="bottom"
                                    delay={{ show: 250, hide: 400 }}
                                    overlay={renderTooltip}
                                >
                                    <Button variant="primary">Bank Transfer</Button>
                                </OverlayTrigger>
                                </div>

                                <div className="buy">
                                    <Button variant="primary">
                                        Buy USDT
                                    </Button>
                                </div>
                            </div>
                        </div>
                        {/* second line */}
                        <hr style={hr}/>
                        <div className="row">
                            <div className="col-12" style={flex}>
                                <div className="merchant">
                                    <h6>Peace Praise</h6>
                                    <p style={spanSize}>286 orders | 99.31% completion</p>
                                </div>

                                <div className="amt" style={{marginLeft: '3rem'}}>
                                    <h5>510.20<sub>NGN</sub></h5>
                                </div>

                                <div className="limitavail" 
                                style={
                                    {marginLeft: '5rem', marginRight: '3rem'}
                                    }>
                                    <h6><span style={spanSize}>Available</span> 79.84 USDT</h6>
                                    <h6><span style={spanSize}>Limit</span> ₦1,000.00 - ₦2,050.00</h6>
                                </div>

                                <div className="transfer">
                                <OverlayTrigger
                                    placement="bottom"
                                    delay={{ show: 250, hide: 400 }}
                                    overlay={renderTooltip}
                                >
                                    <Button variant="primary">Bank Transfer</Button>
                                </OverlayTrigger>
                                </div>

                                <div className="buy">
                                    <Button variant="primary">
                                        Buy USDT
                                    </Button>
                                </div>
                            </div>
                        </div>
                        {/* third line */}
                        <hr style={hr}/>
                        <div className="row">
                            <div className="col-12" style={flex}>
                                <div className="merchant">
                                    <h6>Peace Praise</h6>
                                    <p style={spanSize}>286 orders | 99.31% completion</p>
                                </div>

                                <div className="amt" style={{marginLeft: '3rem'}}>
                                    <h5>510.20<sub>NGN</sub></h5>
                                </div>

                                <div className="limitavail" 
                                style={
                                    {marginLeft: '5rem', marginRight: '3rem'}
                                    }>
                                    <h6><span style={spanSize}>Available</span> 79.84 USDT</h6>
                                    <h6><span style={spanSize}>Limit</span> ₦1,000.00 - ₦2,050.00</h6>
                                </div>

                                <div className="transfer">
                                <OverlayTrigger
                                    placement="bottom"
                                    delay={{ show: 250, hide: 400 }}
                                    overlay={renderTooltip}
                                >
                                    <Button variant="primary">Bank Transfer</Button>
                                </OverlayTrigger>
                                </div>

                                <div className="buy">
                                    <Button variant="primary">
                                        Buy USDT
                                    </Button>
                                </div>
                            </div>
                        </div>
                        {/* fourth line */}
                        <hr style={hr}/>
                        <div className="row">
                            <div className="col-12" style={flex}>
                                <div className="merchant">
                                    <h6>Peace Praise</h6>
                                    <p style={spanSize}>286 orders | 99.31% completion</p>
                                </div>

                                <div className="amt" style={{marginLeft: '3rem'}}>
                                    <h5>510.20<sub>NGN</sub></h5>
                                </div>

                                <div className="limitavail" 
                                style={
                                    {marginLeft: '5rem', marginRight: '3rem'}
                                    }>
                                    <h6><span style={spanSize}>Available</span> 79.84 USDT</h6>
                                    <h6><span style={spanSize}>Limit</span> ₦1,000.00 - ₦2,050.00</h6>
                                </div>

                                <div className="transfer">
                                <OverlayTrigger
                                    placement="bottom"
                                    delay={{ show: 250, hide: 400 }}
                                    overlay={renderTooltip}
                                >
                                    <Button variant="primary">Bank Transfer</Button>
                                </OverlayTrigger>
                                </div>

                                <div className="buy">
                                    <Button variant="primary">
                                        Buy USDT
                                    </Button>
                                </div>
                            </div>
                        </div>
                        {/* fifth line */}
                        <hr style={hr}/>
                        <div className="row">
                            <div className="col-12" style={flex}>
                                <div className="merchant">
                                    <h6>Peace Praise</h6>
                                    <p style={spanSize}>286 orders | 99.31% completion</p>
                                </div>

                                <div className="amt" style={{marginLeft: '3rem'}}>
                                    <h5>510.20<sub>NGN</sub></h5>
                                </div>

                                <div className="limitavail" 
                                style={
                                    {marginLeft: '5rem', marginRight: '3rem'}
                                    }>
                                    <h6><span style={spanSize}>Available</span> 79.84 USDT</h6>
                                    <h6><span style={spanSize}>Limit</span> ₦1,000.00 - ₦2,050.00</h6>
                                </div>

                                <div className="transfer">
                                <OverlayTrigger
                                    placement="bottom"
                                    delay={{ show: 250, hide: 400 }}
                                    overlay={renderTooltip}
                                >
                                    <Button variant="primary">Bank Transfer</Button>
                                </OverlayTrigger>
                                </div>

                                <div className="buy">
                                    <Button variant="primary">
                                        Buy USDT
                                    </Button>
                                </div>
                            </div>
                        </div>

                        <div className="row" style={{
                            marginTop: '2rem'
                            }}>
                            <div className="col">
                                <Pagination style={{float: 'right'}}>
                                    <Pagination.First />
                                    <Pagination.Prev />
                                    <Pagination.Item active style={{backgroundColor: ''}}>{1}</Pagination.Item>
                                    <Pagination.Ellipsis />

                                    <Pagination.Item>{10}</Pagination.Item>
                                    <Pagination.Item>{11}</Pagination.Item>
                                    <Pagination.Item >{12}</Pagination.Item>
                                    <Pagination.Item>{13}</Pagination.Item>
                                    <Pagination.Item >{14}</Pagination.Item>

                                    <Pagination.Ellipsis />
                                    <Pagination.Item>{20}</Pagination.Item>
                                    <Pagination.Next />
                                    <Pagination.Last />
                                </Pagination>
                            </div>
                        </div>
                    </div>
                </section>
              
            </div>
        </>
    )
}

export default P2P
