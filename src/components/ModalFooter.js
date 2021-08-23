import React, { useState, useEffect } from "react";
import P2pChatBox from "./P2pChatBox"

const ModalFooter = () => {

    //const dispatch = useDispatch();
    //const allState = useSelector( state => state );
    //const {display_modal:displayModal} = allState;
    const cursor = {
        cursor: 'pointer'
    }
    return (
        <>
            <div className="row">
                <div className="col-12 col-sm-12 text-center" style={{color:"white", fontSize:"30px"}}>

                    <div style={{display: 'flex', justifyContent: 'space-around', marginTop: '1.5rem', marginBottom: '1rem'}}>
                        <i className="fa fa-phone" style={cursor}></i>
                        <i className="fa fa-comment" style={cursor}></i>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ModalFooter;
