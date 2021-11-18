import React, { useEffect, useRef, useState } from "react";
import socketModule from "../../module/socketModule";
import SendImage from "./SendImage";
import Picker from "emoji-picker-react";
import shotcutEmojiMap from "../../module/emoji";
import { allEmojiShotcut } from "../../module/emoji";
import { useSelector } from "react-redux";
import { getURLOfFileWhenSended } from "../../redux/action/actHome";
import { useDispatch } from "react-redux";
import {
    CLEAR_IMAGES_SENDING,
    createAction,
    REMOVE_AN_IMAGES_SENDING_BY_INDEX,
} from "../../redux/constants/constants";
import ModalImage from "react-modal-image";

const SendMessage = ({ roomId }) => {
    const imagesSending = useSelector((state) => state.imagesSending);
    const [messageToSend, setmessageToSend] = useState("");
    const [isShowEmojiExpress, setisShowEmojiExpress] = useState(false);
    const ref = useRef(null);
    const dispatch = useDispatch();

    const imagesSendingMap = imagesSending.map((img, index) => {
        return (
            <div className="imgs-sending__imgs col-2" key={index}>
                <ModalImage
                    className="imgs-sending__imgs__img"
                    small={URL.createObjectURL(img)}
                    large={URL.createObjectURL(img)}
                    showRotate={true}
                    alt=""
                />
                <div
                    className="imgs-sending__imgs__remove center"
                    onClick={() => {
                        dispatch(createAction(REMOVE_AN_IMAGES_SENDING_BY_INDEX, index));
                    }}
                >
                    x
                </div>
            </div>
        );
    });

    const onEmojiClick = (event, emojiObject) => {
        setmessageToSend(messageToSend + " " + emojiObject.emoji);
    };
    const sendMessageToFriend = () => {
        if (messageToSend.length) {
            socketModule.sendMessageToOneFriend(roomId, messageToSend, "TEXT");
            setmessageToSend("");
        }
    };

    useEffect(() => {
        ref.current.focus();
    }, [imagesSending]);

    const handleEnterTextarea = (e) => {
        if (e.key === "Enter") {
            if (imagesSending.length) {
                const formData = new FormData();

                imagesSending.forEach((file) => {
                    formData.append("files", file);
                });

                getURLOfFileWhenSended(formData).then((urls) => {
                    socketModule.sendFiles(roomId, urls, "MEDIA");
                    dispatch(createAction(CLEAR_IMAGES_SENDING));
                });
            }

            if (!e.target.value) e.preventDefault();

            if (e.target.value) {
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
                    ref={ref}
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
            {imagesSending.length > 0 && <div className="imgs-sending row">{imagesSendingMap}</div>}
        </div>
    );
};

export default SendMessage;
