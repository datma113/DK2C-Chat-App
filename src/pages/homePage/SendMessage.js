import React from "react";
import { useSelector } from "react-redux";
import socketModule from "../../module/socketModule";

const SendMessage = () => {
    const authentication = useSelector((state) => state.authentication);

    const getValueOfTA = (e) => {
        console.log(e.target.value);
    };

    const sendMessageToFriend = () => {
        const USER_ID = authentication.user.id;
        const USER_TOKEN = authentication.user.accessToken;

        socketModule.connect(USER_ID, USER_TOKEN);
    };

    return (
        <div className="send-message-container">
            <textarea
                className="send-message-container__ta"
                autoFocus={true}
                onChange={(e) => {
                    getValueOfTA(e);
                }}
            />
            <div className="center send-message-container__icon-container">
                {" "}
                <i className="fab fa-telegram-plane" onClick={() => sendMessageToFriend()}></i>
            </div>
        </div>
    );
};

export default SendMessage;
