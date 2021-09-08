import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Stepper from "../components/Includes/Stepper";
import StepperHook from "../redux/StepperHook";

const Completed = () => {
  const allStateObject = useSelector((state) => state);
  let { login: loginData, PhoneVerify, getCurrency } = allStateObject;
  const { user: userData } = loginData.user_data;

  //Stepper setup
  const { step, stepperArray, validationArray, titleArray, linkArray } =
    StepperHook(userData);
  const [selectedStepper, setSelectedStepper] = useState(step+1);
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
        <div className="row">
          <div className="col-12 col-sm-12">
            <Stepper
              selectedStepper={selectedStepper}
              setSelectedStepper={setSelectedStepper}
              stepperArray={stepperArray}
              titleArray={titleArray}
              linkArray={linkArray}
            />
          </div>
        </div>
        <section className="py-50" style={{ backgroundColor: "#fafbfd" }}>
          <div className="container">
            <div className="row justify-content-center g-0">
              <div className="col-lg-5 col-md-5 col-12">
                <div className="box box-body">
                  <div className="content-top-agile pb-0 pt-20">
                    <h2 className="text-primary">Verification Completed</h2>
                  </div>
                  <div>
                   
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Completed;
