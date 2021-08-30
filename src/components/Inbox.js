import React from "react";
import { useDispatch } from "react-redux";
import ReadBy from "./ReadBy";
import { GET_CURRENT_NUMBER_ID_BOX_CHAT, STORE_CURRENT_INBOX } from "../redux/constants/constants";

const Inbox = ({
    boxChatId,
    imgUrl,
    displayName,
    lastMessage,
    senderName,
    type,
    lastMessageTime,
    lastMessageReadBy,
}) => {
    const dispatch = useDispatch();
    const customStringToShow = (name) => {
        const MAX_OF_LENGTH = 20;
        return name.length >= MAX_OF_LENGTH ? name.slice(0, 17) + "..." : name;
    };

    const displaySenderName = (senderName) => {
        const TYPE_OF_GROUP = "GROUP";
        return type === TYPE_OF_GROUP ? senderName + ": " : "";
    };

    const displayLastMessageTime = (time) => {
        let convertTime = new Date(time);
        let currentTime = new Date().getTime() - convertTime;
        let realTime = new Date(currentTime);

        const HOUR = realTime.getHours();
        const MINUTES = realTime.getMinutes();

        const A_DAY = 24;
        const MIN_OF_HOUR = 1;
        const MIN_OF_MINUTE = 1;

        if (HOUR >= A_DAY) return Math.floor(HOUR / 24) + "ngày";

        //a few hours
        if (HOUR < A_DAY && HOUR >= MIN_OF_HOUR) return HOUR + " giờ";

        //a few minutes
        if (HOUR < MIN_OF_HOUR) return MINUTES + "phút";

        //a few seconds
        if (HOUR < MIN_OF_HOUR && MINUTES < MIN_OF_MINUTE) return "vài giây";

        return "";
    };

    const gotoChatInbox = () => {
        dispatch({
            type: GET_CURRENT_NUMBER_ID_BOX_CHAT,
            id: boxChatId,
        });

        let currentInbox = {
            imgUrl,
            displayName
        }

        dispatch({
            type: STORE_CURRENT_INBOX,
            currentInbox
        });
    };

    return (
        <div className="inbox row p-3" onClick={() => gotoChatInbox()}>
            <div className="col-3 center">
                <div className="inbox__img">
                    <img src={imgUrl} alt="" />
                </div>
            </div>

            <div className=" col-7 ">
                <div className="d-flex flex-column">
                    <div className=" text-medium">{customStringToShow(displayName)}</div>
                    <div className="text-small" style={{ opacity: `0.6` }}>
                        {displaySenderName(senderName) + customStringToShow(lastMessage)}
                    </div>
                </div>
            </div>

            <div className=" col-2 p-0 m-0">
                <div className="d-flex flex-column ">
                    <div className="text-small mt-2 d-flex justify-content-end">
                        {displayLastMessageTime(lastMessageTime)}
                    </div>
                    <ReadBy lastMessageReadBy={lastMessageReadBy} />
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
