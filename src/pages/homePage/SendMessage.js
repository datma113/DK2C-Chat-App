import React, { useState } from "react";
import socketModule from "../../module/socketModule";

const SendMessage = ({roomId}) => {
    const [messageToSend, setmessageToSend] = useState("")
    

    const sendMessageToFriend = () => {
            if(messageToSend.length) {
               socketModule.sendMessageToOneFriend(roomId, messageToSend, "text")
               setmessageToSend("")
            }
    };

    return (
        <div className="send-message-container">
            <textarea
                className="send-message-container__ta"
                autoFocus={true}
                value={messageToSend}
                onChange={(e) => setmessageToSend(e.target.value)}
            />
            <div className="center send-message-container__icon-container">
                {" "}
                <i className="fab fa-telegram-plane" onClick={() => sendMessageToFriend()}></i>
            </div>
        </div>
    );
};

export default SendMessage;
