import React, { useState } from "react";
import { useDispatch } from "react-redux";
import socketModule from "../../module/socketModule";
import { SCROLL_BOTTOM_WHEN_SEND_MESSAGE } from "../../redux/constants/constants";
import SendImage from "./SendImage";

const SendMessage = ({ roomId }) => {
    const [messageToSend, setmessageToSend] = useState("");
    const dispatch = useDispatch();
    const sendMessageToFriend = () => {
        if (messageToSend.length) {
            socketModule.sendMessageToOneFriend(roomId, messageToSend, "TEXT");
            setmessageToSend("");

            dispatch({
                type: SCROLL_BOTTOM_WHEN_SEND_MESSAGE,
                status: true,
            });
        }
    };

    const handleEnterTextarea = (e) => {
        if (e.key === "Enter") {
            e.preventDefault();
            socketModule.sendMessageToOneFriend(roomId, messageToSend, "TEXT");
            setmessageToSend("");
            dispatch({
                type: SCROLL_BOTTOM_WHEN_SEND_MESSAGE,
                status: true,
            });
        }
    };

    return (
        <div className="send-message-container">
            <textarea
                className="send-message-container__ta"
                autoFocus={true}
                value={messageToSend}
                onChange={(e) => setmessageToSend(e.target.value)}
                onKeyDown={(e) => handleEnterTextarea(e)}
            />
            <div className="center send-message-container__icon-container">
                <SendImage roomId={roomId}/>
                <i className="fab fa-telegram-plane" onClick={() => sendMessageToFriend()}></i>
            </div>
        </div>
    );
};

export default SendMessage;
