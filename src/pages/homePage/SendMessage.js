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
import mediaModule from "../../module/mediaModule";
import ModalVideo from "react-modal-video";
import "react-modal-video/scss/modal-video.scss";

const SendMessage = ({ roomId }) => {
    const allMediaSending = useSelector((state) => state.allMediaSending);
    const [messageToSend, setmessageToSend] = useState("");
    const [isShowEmojiExpress, setisShowEmojiExpress] = useState(false);
    const ref = useRef(null);
    const dispatch = useDispatch();
    const [isOpen, setisOpen] = useState(false);
    const typeOfMedia = {
        video: "video",
        image: "image",
        word: ["doc", "docx"],
        pdf: ".pdf",
        rar: ".rar",
        exe: ".exe",
    };

    const IMAGE_FILE = 1;
    const VIDEO_FILE = 2;
    const WORD_FILE = 3;
    const PDF_FILE = 4;
    const RAR_FILE = 5;
    const EXE_FILE = 6;

    const isImage = (type) => type.includes(typeOfMedia.image);

    const isVideo = (type) => type.includes(typeOfMedia.video);

    const isWordFile = (name) => name.includes(typeOfMedia.word[0] || typeOfMedia.word[1]);

    const isPDFFile = name => name.includes(typeOfMedia.pdf)

    const renderVideo = (url) => {
        return (
            <>
                <ModalVideo
                    channel="custom"
                    url={url}
                    isOpen={isOpen}
                    onClose={() => setisOpen(false)}
                    allowFullScreen
                />
                <video
                    src={url}
                    className="imgs-sending__imgs__media"
                    autoPlay
                    muted
                    loop
                    onClick={() => setisOpen(true)}
                ></video>
            </>
        );
    };

    const filterMediaToRender = (media, status) => {
        switch (status) {
            case IMAGE_FILE:
                return mediaModule.renderImage(media);
            case VIDEO_FILE:
                return renderVideo(media);
            case WORD_FILE:
                return mediaModule.renderWordFile();
            case PDF_FILE:
                return mediaModule.renderPDFFile();
            default:
                return "";
        }
    };

    const renderMedia = (media, index) => {
        let renderContent;

        return (fileStatus) => {
            renderContent = filterMediaToRender(media, fileStatus);

            return (
                <div className="imgs-sending__imgs col-2" key={index}>
                    {renderContent}
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
        };
    };

    const allMediaSendingMap = allMediaSending.map((img, index) => {
        const url = URL.createObjectURL(img);

        const renderMediaBy = renderMedia(url, index);
        if (isImage(img.type)) return renderMediaBy(IMAGE_FILE);

        if (isVideo(img.type)) return renderMediaBy(VIDEO_FILE);

        if (isWordFile(img.name)) return renderMediaBy(WORD_FILE);

        if(isPDFFile(img.name)) return renderMediaBy(PDF_FILE);

        return "";
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
    }, [allMediaSending]);

    const handleEnterTextarea = (e) => {
        if (e.key === "Enter") {
            if (allMediaSending.length) {
                const formData = new FormData();

                allMediaSending.forEach((file) => {
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
            {allMediaSending.length > 0 && (
                <div className="imgs-sending row">{allMediaSendingMap}</div>
            )}
        </div>
    );
};

export default SendMessage;
