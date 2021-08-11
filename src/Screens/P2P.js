import {React} from 'react'
import Paginations from './P2PComponents/Pagination'
import Action from './P2PComponents/Actions'
import SimpleStep from './P2PComponents/SimpleSteps'
import Table from './P2PComponents/P2PTable'
import Faq from './P2PComponents/Faqs'
import BuyAndSell from './P2PComponents/BuySell'

const P2P = () => {

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
                <BuyAndSell />
                <section className="bg-white bg-food-black pt-30 pb-20"
                data-overlay={7}>
                    <div className="container">
                        <Action />
                        <Table />
                        <Paginations />
                    </div>
                </section>
                <SimpleStep />
                <Faq />
            </div>
        </>
    )
}

export default P2P
