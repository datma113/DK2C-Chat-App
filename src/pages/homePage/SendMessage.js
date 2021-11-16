import React, { useState } from "react";
import socketModule from "../../module/socketModule";
import SendImage from "./SendImage";
import Picker from "emoji-picker-react";
import shotcutEmojiMap from "../../module/emoji";
import { allEmojiShotcut } from "../../module/emoji";

const SendMessage = ({ roomId }) => {
    const [messageToSend, setmessageToSend] = useState("");
    const [isShowEmojiExpress, setisShowEmojiExpress] = useState(false);

    const onEmojiClick = (event, emojiObject) => {
        setmessageToSend(messageToSend + " " + emojiObject.emoji);
    };
    const sendMessageToFriend = () => {
        if (messageToSend.length) {
            socketModule.sendMessageToOneFriend(roomId, messageToSend, "TEXT");
            setmessageToSend("");

        }
    };

    const handleEnterTextarea = (e) => {
        if (e.key === "Enter") {
            if (!e.target.value) e.preventDefault();
            else {
                e.preventDefault();
                socketModule.sendMessageToOneFriend(roomId, messageToSend, "TEXT");
                setmessageToSend("");
                setisShowEmojiExpress(false);
               
            
            }
        }

        if (e.key === "Escape") {
            setisShowEmojiExpress(false);
        }
    };

    const regexHotkeyExpressEmoji = (text) => {
        allEmojiShotcut.forEach((emoji) => {
            if (text.includes(emoji))
                setmessageToSend(text.replaceAll(emoji, shotcutEmojiMap.get(emoji)));
        });
    };

    const toggleEmojiExpressShowed = (currentStatus) => setisShowEmojiExpress(!currentStatus);
    return (
        <div className="d-flex flex-column bg-light">
            <div className="send-message-container">
                <textarea
                    className="send-message-container__ta"
                    autoFocus={true}
                    value={messageToSend}
                    onChange={(e) => {
                        setmessageToSend(e.target.value);
                        regexHotkeyExpressEmoji(e.target.value);
                    }}
                    onKeyDown={(e) => handleEnterTextarea(e)}
                    spellCheck={false}
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
                        <Picker onEmojiClick={onEmojiClick} disableSearchBar={true} />
                    </div>
                    <i
                        className="fas fa-angle-double-right text-primary"
                        onClick={() => sendMessageToFriend()}
                    ></i>
                </div>
            </div>
            <div className="imgs-sending">
                image sending
            </div>
        </div>
    );
};

export default SendMessage;
