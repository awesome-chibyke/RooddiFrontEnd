/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";

const StepperHook = (userData) => {

    let validationArrayFromServer = userData.verifiation_details_object.verification_steps

    let accountVericationStep = userData.current_verification_step;

    const validationArray = validationArrayFromServer.map((eachVerificationStep) => {
        let newStep = eachVerificationStep.replace("_", " ");
        newStep = newStep.toUpperCase();
        return newStep;
    });


    const stepperArray = validationArrayFromServer.map((eachVerificationStep, index) => {
        return index;
    });

    let step = validationArrayFromServer.indexOf(accountVericationStep);
    //Stepper setup
    const titleArray = validationArray;
    const linkArray = userData.verification_links;

    return {step, stepperArray, validationArray, titleArray, linkArray};

}

export default StepperHook;