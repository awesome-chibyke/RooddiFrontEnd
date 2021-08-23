import React, {  } from "react";
import $ from 'jquery';

const P2pChatBox = () => {

    const chatbox = $.noConflict();

    chatbox(() => {
        chatbox(".chatbox-open").click(() =>
            chatbox(".chatbox-popup, .chatbox-close").fadeIn()
        );

        chatbox(".chatbox-close").click(() =>
            chatbox(".chatbox-popup, .chatbox-close").fadeOut()
        );

        chatbox(".chatbox-maximize").click(() => {
            chatbox(".chatbox-popup, .chatbox-open, .chatbox-close").fadeOut();
            chatbox(".chatbox-panel").fadeIn();
            chatbox(".chatbox-panel").css({ display: "flex" });
        });

        chatbox(".chatbox-minimize").click(() => {
            chatbox(".chatbox-panel").fadeOut();
            chatbox(".chatbox-popup, .chatbox-open, .chatbox-close").fadeIn();
        });

        chatbox(".chatbox-panel-close").click(() => {
            chatbox(".chatbox-panel").fadeOut();
            chatbox(".chatbox-open").fadeIn();
        });
    });


    return (
        <>
            {/*<button className="">
                <i className="fa fa-comment fa-2x" aria-hidden="true"></i>
            </button>
            <button className="chat-button chatbox-close">
                <i className="fa fa-close fa-2x" aria-hidden="true"></i>
            </button>*/}

            <section className="chatbox-popup">
                <header className="chatbox-popup__header">
                    <aside style={{flex:"3"}}>
                        <i className="fa fa-user-circle fa-4x chatbox-popup__avatar" aria-hidden="true"></i>
                    </aside>
                    <aside style={{flex:"6"}}>
                        <h1>Madu IP</h1> Seller (Online)
                    </aside>
                    <aside style={{flex:"3"}}>
                        <button className="chatbox-close chat-button"><i className="fa fa-close" aria-hidden="true"></i>
                        </button>
                        <button className="chatbox-maximize chat-button"><i className="fa fa-window-maximize"
                        aria-hidden="true"></i></button>
                    </aside>
                </header>
                <main className="chatbox-popup__main">
                    We make it simple and seamless for<br /> bussiness and people to talk to each<br /> other. Ask us
                    anything.
                </main>
                <footer className="chatbox-popup__footer">
                    <aside style={{flex:"1", color:"#888", textAlign:"center"}}>
                        <i className="fa fa-camera" aria-hidden="true"></i>
                    </aside>
                    <aside style={{flex:"10"}}>
                        <textarea type="text" placeholder="Type your message here..." autoFocus></textarea>
                    </aside>
                    <aside style={{flex:"1", color:"#888", textAlign:"center"}}>
                        <i className="fa fa-paper-plane" aria-hidden="true"></i>
                    </aside>
                </footer>
            </section>
            <section className="chatbox-panel">
                <header className="chatbox-panel__header">
                    <aside style={{flex:"3"}}>
                        <i className="fa fa-user-circle fa-3x chatbox-popup__avatar" aria-hidden="true"></i>
                    </aside>
                    <aside style={{flex:"6"}}>
                        <h1>Madu IP</h1> Seller (Online)
                    </aside>
                    <aside style={{flex:"3", textAlign:"right"}}>
                        <button className="chatbox-minimize chat-button"><i className="fa fa-window-restore" aria-hidden="true"></i>
                        </button>
                        <button className="chatbox-panel-close chat-button"><i className="fa fa-close" aria-hidden="true"></i>
                        </button>
                    </aside>
                </header>
                <main className="chatbox-panel__main" style={{flex:"1"}}>
                    We make it simple and seamless for<br /> bussiness and people to talk to each<br /> other. Ask us
                    anything.
                </main>
                <footer className="chatbox-panel__footer">
                    <aside style={{flex:"1",color:"#888", textAlign:"center"}}>
                        <i className="fa fa-camera" aria-hidden="true"></i>
                    </aside>
                    <aside style={{flex:"10"}}>
                        <textarea type="text" placeholder="Type your message here..." autoFocus></textarea>
                    </aside>
                    <aside style={{flex:"1", color:"#888",textAlign:"center"}}>
                        <i className="fa fa-paper-plane" aria-hidden="true"></i>
                    </aside>
                </footer>
            </section>
        </>
    );
};

export default P2pChatBox;
