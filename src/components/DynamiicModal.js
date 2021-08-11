/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/heading-has-content */
/* eslint-disable no-script-url */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from "react";
//import { closeModal } from "../redux";
import { connect, useSelector, useDispatch } from "react-redux";
import { Markup } from 'interweave';

const DynamiicModal = ({widthSize, marginLeft, marginRight, contents, headerTitleText, displayModal, closeModal}) => {

    const dispatch = useDispatch();

    const allState = useSelector( state => state );
    //const {display_modal:displayModal} = allState;

    return (
        <>
            <div>

                /* Modal */
                <div style={{display:displayModal}} className="modal">

                    <div className="modal-content modal-width-control" style={{width:widthSize, marginLeft:marginLeft, marginRight:marginRight}}>
                        <div className="modal-header">
                            <span onClick={() => closeModal(displayModal === 'none' ? 'block':'none') } className="close">&times;</span>
                            <h2 style={{color:"#0c1a32"}}><Markup content={headerTitleText} /></h2>
                        </div>
                        <div className="modal-body">
                            <Markup content={contents} />
                        </div>
                        <div className="modal-footer">
                            <h3>Modal Footer</h3>
                        </div>
                    </div>

                </div>

            </div>
        </>
    );
};

export default DynamiicModal;
