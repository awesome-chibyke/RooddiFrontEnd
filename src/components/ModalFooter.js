import React, { useState, useEffect } from "react";

const ModalFooter = () => {

    //const dispatch = useDispatch();
    //const allState = useSelector( state => state );
    //const {display_modal:displayModal} = allState;

    return (
        <>
            <div className="row">
                <div className="col-12 col-sm-12 text-center" style={{color:"white", fontSize:"30px"}}>
                    <i className="fa fa-phone"></i><i style={{marginLeft:"10px"}} className="fa fa-envelope"></i>
                </div>
            </div>
        </>
    );
};

export default ModalFooter;
