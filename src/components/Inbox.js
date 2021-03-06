import React from "react";
import { useDispatch } from "react-redux";
import ReadBy from "./ReadBy";
import { RESET_NEW_MESSAGE } from "../redux/constants/constants";
import {
    storeCurrentIdOfInbox,
    storeCurrentInbox,
    storeCurrentRoomId,
} from "../redux/action/actHome";
import newMessageSingleton from "../module/newMessageSingleton";

const Inbox = ({
    inboxId,
    imgUrl,
    displayName,
    lastMessage,
    isActive,
    roomId,
    senderName,
    newMessageOfInbox,
    typeOfRoom,
    senderId,
    inbox
}) => {
    
    const dispatch = useDispatch();
    const limitStringToShow = (string) => {
        if (string) {
            const MAX_OF_LENGTH = 20;
            return string.length >= MAX_OF_LENGTH ? string.slice(0, 17) + "..." : string;
        }
        return "";
    };

    const displayLastMessageTime = (time) => {
        const LAST_MESSAGE_TIME = new Date(time);
        const CURRENT_TIME = new Date();
        const DISPLAY_TIME = new Date(Math.abs(CURRENT_TIME - LAST_MESSAGE_TIME));

        const THE_FIRST_DAY = 1;

        const MILISECONDS = DISPLAY_TIME.getTime();
        const SECONDS = Math.floor(MILISECONDS / 1000);
        const MINUTE = Math.floor(SECONDS / 60);
        const HOURS = Math.floor(MINUTE / 60);

        const LAST_MESSAGE_TIME_OF_USER = {
            year: DISPLAY_TIME.getFullYear(),
            month: DISPLAY_TIME.getMonth(),
            date: DISPLAY_TIME.getDate() - THE_FIRST_DAY,
            hour: HOURS,
            minute: MINUTE,
        };

        if (LAST_MESSAGE_TIME_OF_USER.month) return LAST_MESSAGE_TIME_OF_USER.month + " tháng";
        if (LAST_MESSAGE_TIME_OF_USER.date) return LAST_MESSAGE_TIME_OF_USER.date + " ngày";
        if (LAST_MESSAGE_TIME_OF_USER.hour) return LAST_MESSAGE_TIME_OF_USER.hour + " giờ";
        if (LAST_MESSAGE_TIME_OF_USER.minute) return LAST_MESSAGE_TIME_OF_USER.minute + " phút";
        return "vài giây";
    };

    const gotoChatInbox = () => {
        dispatch(storeCurrentIdOfInbox(inboxId));
        dispatch(storeCurrentRoomId(roomId));

        //reset number of new Message when click into inbox
        let newMessage = newMessageSingleton.getInsance();
        newMessage.resetNewMessageRealTime();
        let currentInbox = {
            id: inboxId,
            senderId,
            imgUrl,
            displayName,
            type: typeOfRoom,
            inbox
        };
        dispatch(storeCurrentInbox(currentInbox));

        dispatch({
            type: RESET_NEW_MESSAGE,
            inboxId,
        });

        document.title = "DKC App";
    };

    const checkActiveOfInbox = () => {
        return isActive ? "inbox--active" : "";
    };

    const isExistNewMessage = () => {
        return newMessageOfInbox.countNewMessage > 0 && !newMessageOfInbox.isMyself
            ? "inbox__new-message"
            : "";
    };

    const isGroup = (type) => {
        return type === 'GROUP' ? "" : "d-none"
    };

    return (
        <div className={`inbox row p-3 ${checkActiveOfInbox()} `} onClick={() => gotoChatInbox()}>
            <div className="col-3 center inbox__img-container">
                <div className="inbox__img">
                    <img src={imgUrl} alt="" />
                </div>
                <i
                    className={`fas fa-users inbox__img-container__group-icon ${isGroup(
                        typeOfRoom
                    )}`}
                ></i>
            </div>

            <div className="col-7">
                <div className="d-flex flex-column">
                    <div className=" text-medium">{limitStringToShow(displayName)}</div>
                    <div
                        className={`text-small ${isExistNewMessage()} `}
                        style={{ opacity: `0.6` }}
                    >
                        {limitStringToShow(senderName + (lastMessage?.content ?? ""))}
                    </div>
                </div>
            </div>

            <div className=" col-2 p-0 m-0">
                <div className="d-flex flex-column ">
                    <div className="text-small mt-2 d-flex justify-content-end">
                        {displayLastMessageTime(lastMessage?.createAt ?? "")}
                    </div>
                    <ReadBy lastMessageReadBy={lastMessage?.readbyes ?? []} />
                    <div
                        className="text-small d-flex justify-content-end d-none"
                        style={{ opacity: `0.6` }}
                    >
                        ...
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Inbox;
