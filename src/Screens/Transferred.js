/* eslint-disable jsx-a11y/heading-has-content */
import React, {} from 'react'
import { BASE_URL } from "../common_variables"
import { Button } from "react-bootstrap"

const Transferred = () => {

  const successContainer = {
    width: '100%',
    
  }

  const centerStyle = {
    textAlign: 'center',
    marginBottom: '2rem'
  }

  const Icon = {
    marginTop: '1.5rem',
    fontSize: '3.5rem',
    color: '#a2dd71'
  }

  const img = {
    width: '25px',
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
            <div style={successContainer}>
                    <div style={centerStyle}>
                      <h2>Order Completed</h2>
                      <h4>You successfully purchased 9.65 USDT</h4>
                      <i class="fa fa-check-circle" aria-hidden="true" style={Icon}></i>
                    </div>
                </div>
              <div className="col-sm-8 col-12">
                <div className="box box-body">
                  <div className="content-top-agile pb-0 pt-20">
                  <div style={{display: 'flex', justifyContent: 'space-around'}}>
                        <div style={{display: 'flex'}}>
                          <h4 style={{paddingTop: '0.25rem'}}>BUY USDT</h4>
                          <div style={{paddingLeft: '1rem'}}>
                            <img style={img}
                            src={`${BASE_URL}/rooddi/images/img/Tether.png`}
                            alt="img" />
                          </div>
                        </div>
                        <div style={{paddingTop: '0.5rem', color: '#a2dd71'}}>
                          <h6>Completed</h6>
                        </div>
                      </div>
                      <div style={{display: 'flex', justifyContent: 'space-around'}}>
                        <h6>Fiat Amount</h6>
                        <h4>N 2,581.25</h4>
                      </div>
                      <div style={{display: 'flex', justifyContent: 'space-around'}}>
                        <h6>Price</h6>
                        <h5>510.22</h5>
                      </div>
                      <div style={{display: 'flex', justifyContent: 'space-around'}}>
                        <h6>Crypto Amount</h6>
                        <h5>9.65 USDT</h5>
                      </div>
                  </div>
                  <div>
                    
                  </div>
                </div>
              <div className="box box-body">
                  <div className="content-top-agile pb-0 pt-20">
                  <div className="row">
                    <div style={{display: 'flex', justifyContent: 'space-around'}}>
                          <h6>Order Number</h6>
                          <h5>65774635273965169&nbsp;<i class="fa fa-copy" ></i></h5>
                        </div>
                        <div style={{display: 'flex', justifyContent: 'space-around'}}>
                          <h6>Created Time</h6>
                          <h5>2021-08-13 02:30:35:55</h5>
                        </div>
                    <div style={{display: 'flex', justifyContent: 'space-around'}}>
                        <h6>Seller's Nickname</h6>
                        <h5>Madu IP</h5>
                    </div>
                    <div style={{display: 'flex', justifyContent: 'space-around'}}>
                        <h6>Payment Method</h6>
                        <h5>Bank</h5>
                    </div>
                  </div>
                </div>
              </div>

              <Button style={{width:"100%"}} className="btn-block"  variant="light">Make Appeal</Button>{' '}
              
            </div>   
          </div>
        </div>
      </section>
      </>
    )
}

export default Transferred
