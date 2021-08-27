import React, {useState} from 'react';
import DelayedRedirect from "./DelayedRedirect";
import {LoginPost} from "../../redux";

function Stepper({selectedStepper, setSelectedStepper, titleArray, stepperArray}) {

    const styleForStepper = {height:"10px", marginTop: "20px", position: "relative"};

    const styleForStepperColored = {height:"10px", marginTop: "20px", position: "relative", backgroundColor:"#a2dd71"};

    const greenVal = {backgroundColor:"#a2dd71", color:"white"};

    return (
        <>
            <div className="main_stepper_container">

                {stepperArray.map((eachStep, index) => (
                    <>
                        {index < stepperArray.length - 1 ? (

                            <>
                                {parseFloat(index) <= parseFloat(stepperArray.length) - parseFloat(2) ? (
                                    <div className="stepper-item" style={selectedStepper > parseFloat(index) + parseFloat(1) ? styleForStepperColored : styleForStepper}>

                                                                    <span title={titleArray[index]} onClick={() => setSelectedStepper(parseFloat(index) + parseFloat(1)) } style={selectedStepper >= parseFloat(index) + parseFloat(1) ?  greenVal : {} } className="round-box">
                                                                        <>
                                                                            {selectedStepper >= parseFloat(index) + parseFloat(1) ?  (<i className="fa fa-check"></i>) : (index + 1) }
                                                                        </>
                                                                    </span>

                                        {index === parseFloat(stepperArray.length) - parseFloat(2) ? (
                                            <span title={titleArray[index + 1]} onClick={() => setSelectedStepper(parseFloat(index) + parseFloat(2)) } style={selectedStepper === parseFloat(stepperArray.length) ?  greenVal : {} } className="round-box-right"> {selectedStepper === parseFloat(stepperArray.length) ?  (<i className="fa fa-check"></i>) : (index + 2) }</span>
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
}

export default Stepper;