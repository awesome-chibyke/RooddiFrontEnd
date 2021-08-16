/* eslint-disable no-unused-vars */
import React, { useState, useEffect} from "react";
import { activateTwoFactorAction } from "../redux";
import { connect, useSelector, useDispatch  } from "react-redux";
import DelayedRedirect from "../components/Includes/DelayedRedirect";
import DynamiicModal from "../components/DynamiicModal";
import Try from "../components/Try";
import Try_ from "../components/Try_";

const Dashboard = () => {
    const dispatch = useDispatch();
    const allStateObject = useSelector(state => state);
    let {login:loginData} = allStateObject;

    // useEffect(() => {
    //   dispatch(activateTwoFactorAction( loginData ));
    // }, [activateTwofactor]);
    // let {isLogged, user_data} = loginData;
    // if(isLogged === true){
    //     //check if the islogged is true
    //     var {token} = user_data;
    //   }

    const activateTwoFactorHandler = async (loginData) =>{
        if(loginData.isLogged === true){
            dispatch(await activateTwoFactorAction(loginData));
        }
            
    }

    
    const [displaySecondModal, setDisplaySecondModal] = useState('none');
    const [displayFirstModal, setDisplayFirstModal] = useState('none');


    if(loginData.isLogged === false){ window.location.href = '/login' }

    return (
        <>
            {loginData.isLogged === false ? <DelayedRedirect to={`/login`} delay={500} />  :'' }
            <div>
                <section className="bg-dark-body bg-food-white pt-120 pb-20" style={{width:"100%", height:"300px", backgroundColor:"white"}}>
                    <div className="text-center">
                        <h3 className="text-white">Welcome To Xetima</h3>

                        <button  className="text-white" className="btn btn-success" onClick={() => setDisplayFirstModal(displayFirstModal === 'none' ? 'block': 'none') }>Open Modal</button>
                         <br /><br />

                        <button  className="text-white" className="btn btn-success" onClick={() => setDisplaySecondModal(displaySecondModal === 'none' ? 'block': 'none') }>Open Modal</button>
                            <br></br>
                        <span className="btn btn-success mt-4 mb-4" onClick={() => activateTwoFactorHandler(loginData)}> Activate Two Factor</span>

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
                    </div>
                </section>
            </div>
        </>
    );
};

export default Dashboard;