<<<<<<< HEAD
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Stepper({
  selectedStepper,
  setSelectedStepper,
  titleArray,
  stepperArray,
}) {
  const styleForStepper = {
    height: "10px",
    marginTop: "20px",
    position: "relative",
  };

  const styleForStepperColored = {
    height: "10px",
    marginTop: "20px",
    position: "relative",
    backgroundColor: "#a2dd71",
  };

  const styleForStepperColoredNext = {
    height: "10px",
    marginTop: "20px",
    position: "relative",
    backgroundColor: "#1bc5bd",
  };

  const greenVal = { backgroundColor: "#a2dd71", color: "white" };

  const greenValNext = { border: "2px solid #1bc5bd", color: "black" };

  const [nextStep, setNextStepper] = useState(selectedStepper + 1);

  useEffect(() => {
    setNextStepper(selectedStepper + 1);
  }, [selectedStepper]);
  /*greenValNext*/
  return (
    <>
      <div className="main_stepper_container">
        {stepperArray.map((eachStep, index) => (
          <>
            {index < stepperArray.length - 1 ? (
              <>
                {/*{alert(parseFloat(index) + parseFloat(1)+' '+nextStep)}*/}
                {parseFloat(index) <=
                parseFloat(stepperArray.length) - parseFloat(2) ? (
                  <div
                    className="stepper-item"
                    style={
                      selectedStepper > parseFloat(index) + parseFloat(1)
                        ? styleForStepperColored
                        : parseFloat(index) + parseFloat(1) === nextStep - 1
                        ? styleForStepperColoredNext
                        : styleForStepper
                    }
                  >
                    <span
                      title={titleArray[index]}
                      onClick={() =>
                        setSelectedStepper(parseFloat(index) + parseFloat(1))
                      }
                      style={
                        selectedStepper >= parseFloat(index) + parseFloat(1)
                          ? greenVal
                          : parseFloat(index) + parseFloat(1) === nextStep
                          ? greenValNext
                          : {}
                      }
                      className="round-box"
                    >
                      <>
                        {selectedStepper >=
                        parseFloat(index) + parseFloat(1) ? (
                          <i className="fa fa-check"></i>
                        ) : (
                          index + 1
                        )}
                      </>
                    </span>

                    {index ===
                    parseFloat(stepperArray.length) - parseFloat(2) ? (
                      <span
                        title={titleArray[index + 1]}
                        onClick={() =>
                          setSelectedStepper(parseFloat(index) + parseFloat(2))
                        }
                        style={
                          selectedStepper === parseFloat(stepperArray.length)
                            ? greenVal
                            : parseFloat(index) + parseFloat(2) === nextStep
                            ? greenValNext
                            : {}
                        }
                        className="round-box-right"
                      >
                        {selectedStepper === parseFloat(stepperArray.length) ? (
                          <i className="fa fa-check"></i>
                        ) : (
                          index + 2
                        )}
                      </span>
                    ) : (
                      ""
                    )}
                  </div>
                ) : (
                  ""
                )}
              </>
            ) : (
              ""
            )}
          </>
        ))}
      </div>
    </>
  );
=======
import React, {useEffect, useState} from 'react';
import DelayedRedirect from "./DelayedRedirect";
import {LoginPost} from "../../redux";
import {Link} from "react-router-dom";

function Stepper({selectedStepper, setSelectedStepper, titleArray, stepperArray, linkArray}) {

    const styleForStepper = {height:"10px", marginTop: "20px", position: "relative"};

    const styleForStepperColored = {height:"10px", marginTop: "20px", position: "relative", backgroundColor:"#a2dd71"};

    const styleForStepperColoredNext = {height:"10px", marginTop: "20px", position: "relative", backgroundColor:"#1bc5bd"};

    const greenVal = {backgroundColor:"#a2dd71", color:"white"};

    const greenValNext = {border:"2px solid #1bc5bd", color:"black"};

    const [nextStep, setNextStepper] = useState(selectedStepper+1);

    useEffect(() => {
        setNextStepper(selectedStepper+1);
    }, [selectedStepper])
    /*greenValNext*/
    return (
        <>
            <div className="main_stepper_container">

                {stepperArray.map((eachStep, index) => (
                    <>
                        {index < stepperArray.length - 1 ? (

                            <>
                                {/*{alert(parseFloat(index) + parseFloat(1)+' '+nextStep)}*/}
                                {parseFloat(index) <= parseFloat(stepperArray.length) - parseFloat(2) ? (

                                    <div className="stepper-item" style={selectedStepper > parseFloat(index) + parseFloat(1) ? styleForStepperColored : parseFloat(index) + parseFloat(1) === nextStep-1 ? styleForStepperColoredNext:styleForStepper}>

                                            <span title={titleArray[index]} onClick={() => setSelectedStepper(parseFloat(index) + parseFloat(1)) } style={selectedStepper >= parseFloat(index) + parseFloat(1) ?  greenVal : parseFloat(index) + parseFloat(1) === nextStep ? greenValNext:{} } className="round-box">
                                                <>
                                                    {selectedStepper >= parseFloat(index) + parseFloat(1) ?  (<i className="fa fa-check"></i>) : (<Link style={{width:"100%", height:"100%", display: "block", color:"black"}} to={linkArray[index]}>{index + 1}</Link>) }
                                                </>
                                            </span>

                                        {index === parseFloat(stepperArray.length) - parseFloat(2) ? (
                                            <span title={titleArray[index + 1]} onClick={() => setSelectedStepper(parseFloat(index) + parseFloat(2)) } style={selectedStepper === parseFloat(stepperArray.length) ?  greenVal : parseFloat(index) + parseFloat(2) === nextStep ? greenValNext:{} } className="round-box-right">
                                                {selectedStepper === parseFloat(stepperArray.length) ?  (<i className="fa fa-check"></i>) : (<Link style={{width:"100%", height:"100%", display: "block", color:"black"}} to={linkArray[index+1]}>{index + 2}</Link>) }
                                            </span>
                                        ) : ('')}

                                    </div>
                                ) : ('')}

                            </>

                        ) : ('')}
                    </>
                ) )}


                {/*<div className="item" style={styleForStepper}>
                                                <span className="round-box">3</span>
                                            </div>

                                            <div className="item" style={styleForStepper}>
                                                <span className="round-box">3</span>
                                            </div>
                                            <div className="item" style={styleForStepper}>
                                                <span className="round-box">3</span>
                                            </div>
                                            <div className="item" style={styleForStepper}>
                                                <span className="round-box">3</span>
                                                <span className="round-box-right">3</span>
                                            </div>*/}

            </div>
        </>
    );
>>>>>>> a402b61a1cd4c9efba4ed4b59edff96744aeb4bf
}

export default Stepper;
