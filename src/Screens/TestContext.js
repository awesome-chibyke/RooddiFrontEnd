import React, {useContext, useState} from 'react';
import {CoinMainContext} from "../Contexts/CoinContext";
import {editUserProfileAction} from "../redux";

function TestContext(props) {

    const {coinArray, setACoinArray, deleteCoin} = useContext(CoinMainContext);

    const [name, setName] = useState('')
    const [symbol, setSymbol] = useState('');

    const callSetCoin = () => {
        setACoinArray({name, symbol});
        setName('');
        setSymbol('');
    }

    return (
        <>

            <section
                className="bg-dark-body bg-food-white pt-80 pb-20"
                data-overlay={7}
            >
                <div className="container">
                    <div className="row">
                        <div className="col-12 bg-food-white">
                            <div className="text-center">
                                <h2 className="page-title text-white" />
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
            <section className="py-50" style={{ backgroundColor: "#fafbfd" }}>
                <div className="container">
                    <div className="row justify-content-center g-0">
                        <div className="col-lg-5 col-md-5 col-12">
                            <div className="box box-body">
                                <div className="content-top-agile pb-0 pt-20">
                                    <h2 className="text-primary">Update Your Profile</h2>
                                </div>
                                <div className="row">
                                    <div className="col-12 col-sm-12" style={{marginTop:"20px"}}>
                                        <ul>
                                            {coinArray.map(eachCoin => (<li style={{marginTop:"20px"}} key={eachCoin.id}> {eachCoin.name}  <span className="btn btn-sm btn-warning" style={{cursor:"pointer"}} onClick={() => deleteCoin(eachCoin.id) }>Delete</span></li>) )}
                                        </ul>
                                    </div>
                                    <div className="col-12 col-sm-12" style={{marginTop:"20px"}}>
                                        <label for="">Name of Coin</label>
                                        <input className="form-control ps-15 bg-transparent btn-lg" id="name" value={name} onChange={e => setName(e.target.value)} />
                                    </div>
                                    <div className="col-12 col-sm-12" style={{marginTop:"20px"}}>
                                        <label htmlFor="">Symbol</label>
                                        <input onChange={e => setSymbol(e.target.value)} className="form-control ps-15 bg-transparent btn-lg" id="name" value={symbol} />
                                    </div>

                                    <div className="col-12 col-sm-12" style={{marginTop:"20px"}}>
                                        <button onClick={() => callSetCoin() } className="btn btn-primary btn-block btn-lg">Add Coin</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default TestContext;