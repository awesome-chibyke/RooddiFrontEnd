/* eslint-disable jsx-a11y/heading-has-content */
import React, { useState, useEffect } from "react";
// import Form from "../components/FormStepper/Form";
import Stepper from "../components/Includes/Stepper";
//
const StepVerify = () => {
  /*for the stepper*/
  const [selectedStepper, setSelectedStepper] = useState(0);
  const stepperArray = [1, 2, 3, 4, 5];
  const titleArray = [
    "Account Activation",
    "Phone Number Activation",
    "Edit Profile",
    "Upload Face",
    "Upload ID",
  ];
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
      <div className="row">
        <div className="col-12 col-sm-12">
          <Stepper
            selectedStepper={selectedStepper}
            setSelectedStepper={setSelectedStepper}
            stepperArray={stepperArray}
            titleArray={titleArray}
          />
        </div>
      </div>
      <section className="py-50" style={{ backgroundColor: "#fafbfd" }}>
        <div className="container">
          <div className="row justify-content-center g-0">
            <div className="col-lg-5 col-md-5 col-12">
             
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default StepVerify;
