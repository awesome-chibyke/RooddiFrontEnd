/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/heading-has-content */
import React, {} from 'react'
import { Button } from "react-bootstrap"

const Successful = () => {

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

  const coinName = 'USDT'
  

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
                    <h4>You successfully purchased 9.65 {coinName}</h4>
                    <i class="fa fa-check-circle" aria-hidden="true" style={Icon}></i>
                  </div>
              </div>
             
              <div className="col-sm-8 col-12">
                <div className="box box-body">
                  <div style={{textAlign: 'center'}}>
                    <h4>
                      Hello there, your purchase of {coinName} was successful.
                    </h4>
                    <h6 style={{paddingTop: '1rem'}}>
                      Fell free to make an appel by clicking the button below.
                    </h6>
                  </div>
                </div>
                <Button style={{width:"100%"}} className="btn-block"  variant="light">Appeal</Button>{' '}
              </div>
          
            </div>  
            
          </div>
        </section>
      </>
    )
}

export default Successful
