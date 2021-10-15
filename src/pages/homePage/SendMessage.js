import React, { useState } from "react";
import { useDispatch } from "react-redux";
import socketModule from "../../module/socketModule";
import { SCROLL_BOTTOM_WHEN_SEND_MESSAGE } from "../../redux/constants/constants";
import SendImage from "./SendImage";
import Picker, { SKIN_TONE_MEDIUM_DARK } from "emoji-picker-react";

const SendMessage = ({ roomId }) => {
    const [messageToSend, setmessageToSend] = useState("");
    const [chosenEmoji, setChosenEmoji] = useState(null);
    const [isShowEmojiExpress, setisShowEmojiExpress] = useState(false);
    const dispatch = useDispatch();

    const onEmojiClick = (event, emojiObject) => {
        setChosenEmoji(emojiObject);
        setmessageToSend(messageToSend + " " + emojiObject.emoji);
    };
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
            setisShowEmojiExpress(false);
            dispatch({
                type: SCROLL_BOTTOM_WHEN_SEND_MESSAGE,
                status: true,
            });
        }
        
        if (e.key === "Escape") {
            setisShowEmojiExpress(false);
        }
    };

    const toggleEmojiExpressShowed = (currentStatus) => setisShowEmojiExpress(!currentStatus);
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
                <SendImage roomId={roomId} />
                <i
                    className="far fa-grin-tongue-squint text-warning"
                    onClick={() => toggleEmojiExpressShowed(isShowEmojiExpress)}
                ></i>
                <div
                    className={`send-message-container__icon-container__emoji-express ${
                        isShowEmojiExpress ? "" : "d-none"
                    } `}
                >
                    <Picker
                        onEmojiClick={onEmojiClick}
                        skinTone={SKIN_TONE_MEDIUM_DARK}
                        disableSearchBar={true}
                    />
                </div>
                <i
                    className="fas fa-angle-double-right text-primary"
                    onClick={() => sendMessageToFriend()}
                ></i>
            </div>
        </div>
    );
};

export default SendMessage;
