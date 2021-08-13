/* eslint-disable no-unused-vars */
import React from 'react';
import { connect, useSelector, useDispatch  } from "react-redux";
import DelayedRedirect from "../components/Includes/DelayedRedirect";

const Dashboard = () => {

    let allStateObject = useSelector(state => state);

    let {registration:registrationData, activation:activationData, login:loginData} = allStateObject;


    if(loginData.isLogged === false){ window.location.href = '/login' }

    return (
        <>
            {loginData.isLogged === false ? <DelayedRedirect to={`/login`} delay={500} />  :'' }
            <div>
                <section className="bg-dark-body bg-food-white pt-120 pb-20" style={{width:"100%", height:"300px", backgroundColor:"white"}}>
                    <div className="text-center">
                        <h3 className="text-white">Welcome To Xetima</h3>
                    </div>
                </section>
            </div>
        </>
    );
};

export default Dashboard;