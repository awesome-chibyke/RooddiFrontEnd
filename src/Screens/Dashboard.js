/* eslint-disable no-unused-vars */
import { useSelector, useDispatch  } from "react-redux";
import React, { useState, useEffect} from "react";
import DelayedRedirect from "../components/Includes/DelayedRedirect";
import DynamiicModal from "../components/DynamiicModal";
import { Link } from "react-router-dom";
import Try from "../components/Try";
import Try_ from "../components/Try_";
import Stepper from "../components/Includes/Stepper";

const Dashboard = () => {

    const dispatch = useDispatch();
    const allStateObject = useSelector(state => state);
    let {login:loginData} = allStateObject;
    let {login} = allStateObject;

    const [displaySecondModal, setDisplaySecondModal] = useState('none');
    const [displayFirstModal, setDisplayFirstModal] = useState('none');

    /*for the stepper*/
    const [selectedStepper, setSelectedStepper] = useState(0);
    const stepperArray = [1, 2, 3, 4, 5];
    const titleArray = ['Account Activation', 'Phone Number Activation', 'Edit Profile', 'Upload Face', 'Upload ID'];
    const linkArray = ['login1', 'login2', 'login3', 'login4', 'login5'];


    /*if(loginData.isLogged === false){ window.location.href = '/login' }*/

    return (
        <>
            {loginData.isLogged === false ? <DelayedRedirect to={`/login`} delay={500} />  :'' }
            <div>
                <section className="bg-dark-body bg-food-white pt-120 pb-20" style={{width:"100%", height:"auto", backgroundColor:"white"}}>
                    <div className="text-center">
                        <h3 className="text-white">Welcome To Xetima</h3>

                        <button  className="text-white" className="btn btn-success" onClick={() => setDisplayFirstModal(displayFirstModal === 'none' ? 'block': 'none') }>Open Modal</button>
                         <br /><br />

                        <button  className="text-white" className="btn btn-success" onClick={() => setDisplaySecondModal(displaySecondModal === 'none' ? 'block': 'none') }>Open Modal</button>
                            <br></br>
                            {login.user_data.user.auth_type === 'email' ? (
                                <Link className="btn btn-success mt-4 mb-4" to="/two_factor_finalize"> Click To Activate Two Factor</Link>
                                
                             ) : (
                                <Link className="btn btn-success mt-4 mb-4" to="/deactivate_twofactor"> Click To Disable Two Factor</Link>
                                 )}
                                 <br></br>
                            <Link className="btn btn-success mt-4 mb-4" to="/profile">Profile</Link>
                                    <br/>
                            <Link className="btn btn-success mt-4 mb-4" to="/phone_verify">Phone</Link>
                                <br/>
                            <Link className="btn btn-success mt-4 mb-4" to="/upload_id">Upload ID</Link>

                            <br/>
                            <Link className="btn btn-success mt-4 mb-4" to="/step">Account Verification</Link>
                            <br/>
                            <Link className="btn btn-success mt-4 mb-4" to="/type-of-user">Type Of User</Link>

                            <br/>
                            <Link className="btn btn-success mt-4 mb-4" to="/disable_two_factor_request">Disable Two Factor Request</Link>
                            <br/>
                            <Link className="btn btn-success mt-4 mb-4" to="/admin">Admin</Link>
                            <DynamiicModal
                            widthSize={'100%'}
                            marginLeft={'0%'}
                            marginRight={'0%'}
                            contents={<Try />}
                            headerTitleText={'Dynamic Modal'}
                            displayModal={displayFirstModal}
                            closeModal={setDisplayFirstModal}
                            
                            optionForStyleOrClass={'use_style'}
                        />

                        <DynamiicModal
                            widthSize={'100%'}
                            marginLeft={'0%'}
                            marginRight={'0%'}
                            contents={<Try_/>}
                            headerTitleText={'Another One'}
                            displayModal={displaySecondModal}
                            closeModal={setDisplaySecondModal}
                            optionForStyleOrClass={'use_class'}
                        />
                        <div className="row">
                            <div className='col-12 col-sm-12'>
                                <Stepper selectedStepper={selectedStepper} setSelectedStepper={setSelectedStepper} stepperArray={stepperArray} titleArray={titleArray} linkArray={linkArray} />
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
};

export default Dashboard;