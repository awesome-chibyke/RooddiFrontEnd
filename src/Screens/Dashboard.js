import React, { useState } from 'react';
import { connect, useSelector, useDispatch  } from "react-redux";
import DelayedRedirect from "../components/Includes/DelayedRedirect";
import DynamiicModal from "../components/DynamiicModal";
import { openModal } from "../redux";

const Dashboard = () => {

    let allStateObject = useSelector(state => state);

    let dispatch = useDispatch();

    let {registration:registrationData, activation:activationData, login:loginData} = allStateObject;

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

                        <DynamiicModal
                            widthSize={'100%'}
                            marginLeft={'0%'}
                            marginRight={'0%'}
                            contents={"<p><b>Lorem ipsum dolor laboriosam.</b> </p><p>Facere debitis impedit doloremque eveniet eligendi reiciendis <u>ratione obcaecati repellendus</u> culpa? Blanditiis enim cum tenetur non rem, atque, earum quis, reprehenderit accusantium iure quas beatae.</p><p>Lorem ipsum dolor sit amet <a href='#testLink'>this is a link, click me</a> Sunt ducimus corrupti? Eveniet velit numquam deleniti, delectus  <ol><li>reiciendis ratione obcaecati</li><li>repellendus culpa? Blanditiis enim</li><li>cum tenetur non rem, atque, earum quis,</li></ol>reprehenderit accusantium iure quas beatae.</p>"}
                            headerTitleText={'Dynamic Modal'}
                            displayModal={displayFirstModal}
                            closeModal={setDisplayFirstModal}
                        />

                        <DynamiicModal
                            widthSize={'100%'}
                            marginLeft={'0%'}
                            marginRight={'0%'}
                            contents={"<p><b>Lorem ipsum dolor laboriosam.</b> </p><p>Facere debitis impedit doloremque eveniet eligendi reiciendis <u>ratione obcaecati repellendus</u> culpa? Blanditiis enim cum tenetur non rem, atque, earum quis, reprehenderit accusantium iure quas beatae.</p><p>Lorem ipsum dolor sit amet <a href='#testLink'>this is a link, click me</a> Sunt ducimus corrupti? Eveniet velit numquam deleniti, delectus  <ol><li>reiciendis ratione obcaecati</li><li>repellendus culpa? Blanditiis enim</li><li>cum tenetur non rem, atque, earum quis,</li></ol>reprehenderit accusantium iure quas beatae.</p>"}
                            headerTitleText={'Another One'}
                            displayModal={displaySecondModal}
                            closeModal={setDisplaySecondModal}
                        />
                    </div>
                </section>
            </div>
        </>
    );
};

export default Dashboard;