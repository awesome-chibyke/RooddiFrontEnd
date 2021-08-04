import {React, useState} from 'react'
import {Button, ButtonGroup, ToggleButton} from 'react-bootstrap';

const P2P = () => {
    const [radioValue, setRadioValue] = useState('1');
    

    const radios = [
        { name: 'USDT', value: '1' },
        { name: 'BTC', value: '2' },
        { name: 'BUSD', value: '3' },
        { name: 'BNB', value: '4' },
        { name: 'ETH', value: '5' },
        { name: 'NGN', value: '6' },
        { name: 'DAI', value: '7' }
    ];
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

                <section className="bg-white bg-food-white pt-80 pb-20"
                data-overlay={7}>
                    <div className="container">
                        <div className="row">
                            <h3 style={{textAlign: 'center'}}>Peer-to-Peer</h3>
                        </div>
                    </div>
                </section>
              
            </div>
        </>
    )
}

export default P2P
