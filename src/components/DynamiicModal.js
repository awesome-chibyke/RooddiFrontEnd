/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/heading-has-content */
/* eslint-disable no-script-url */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from "react";
//import { closeModal } from "../redux";
import { connect, useSelector, useDispatch } from "react-redux";
import { Markup } from 'interweave';

const DynamiicModal = (props) => {

    const {widthSize, marginLeft, marginRight, contents, headerTitleText, displayModal, closeModal, optionForStyleOrClass} = props;

    const dispatch = useDispatch();

    const allState = useSelector( state => state );
    //const {display_modal:displayModal} = allState;


    return (
        <>
            <div>
                {optionForStyleOrClass === 'use_style' ? (
                    <div style={{display:displayModal}} className="modal">


                        <div className="modal-content modal-width-control" style={{width:widthSize, marginLeft:marginLeft, marginRight:marginRight}}>
                            <div className="modal-header">
                                <span onClick={() => closeModal(displayModal === 'none' ? 'block':'none') } className="close">&times;</span>
                                <h4 style={{color:"#0c1a32"}}>{/*<Markup content={headerTitleText} />*/} {headerTitleText} </h4>
                            </div>
                            <div className="modal-body">
                                {contents}
                                {/*<Markup content={contents} />*/}
                            </div>
                            {!'footer' in props ? (
                                <div className="modal-footer">
                                    <h3>Modal Footer</h3>
                                </div>
                            ) : (
                                <div className="modal-footer_2">
                                    {props.footer}
                                </div>
                            )}
                        </div>

                    </div>
                ):(
                    <div style={{display:displayModal}} className="modal">

                        <div className="modal-content modal-width-control" >
                            <div className="modal-header">
                                <span onClick={() => closeModal(displayModal === 'none' ? 'block':'none') } className="close">&times;</span>
                                <h4 style={{color:"#0c1a32"}}>{/*<Markup content={headerTitleText} />*/} {headerTitleText} </h4>
                            </div>
                            <div className="modal-body">
                                {contents}
                            </div>
                            {props.hasOwnProperty('footer') ? (
                                <div className="modal-footer_2">
                                    {props.footer}
                                </div>
                            ) : (
                                <div className="modal-footer">
                                    <h3>Modal Footer</h3>
                                </div>
                            )}

                        </div>

                    </div>
                )}
            </div>
        </>
    );
};

export default DynamiicModal;
