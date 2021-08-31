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
    isActive,
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
        const CONVERT_TIME = new Date(time);
        const CURRENT_TIME = new Date();

        const LAST_MESSAGE_TIME_OF_USER = {
            year: CONVERT_TIME.getFullYear(),
            month: CONVERT_TIME.getMonth(),
            date: CONVERT_TIME.getDate(),
        };

        const REAL_TIME = {
            year: CURRENT_TIME.getFullYear() - LAST_MESSAGE_TIME_OF_USER.year,
            month: CURRENT_TIME.getMonth() - LAST_MESSAGE_TIME_OF_USER.month,
            date: CURRENT_TIME.getDate() - LAST_MESSAGE_TIME_OF_USER.date,
            hour: CURRENT_TIME.getHours(),
            minute: CURRENT_TIME.getMinutes()
        };

        //a few day
        const A_DAY = 1
        const MIN_OF_HOUR = 1
        const MIN_OF_MINUTE = 60
        if (REAL_TIME.date >= A_DAY) return REAL_TIME.date + " ngày";

        // //a few hours
        if (REAL_TIME.date < A_DAY && REAL_TIME.hour >= MIN_OF_HOUR) return REAL_TIME.hour + " giờ";

        // a few minutes
        if (REAL_TIME.hour < MIN_OF_HOUR) return REAL_TIME.minute + "phút";

        // //a few seconds
        if (REAL_TIME.hour < MIN_OF_HOUR && REAL_TIME.minute < MIN_OF_MINUTE) return "vài giây";

        return "";
    };

    const gotoChatInbox = () => {
        dispatch({
            type: GET_CURRENT_NUMBER_ID_BOX_CHAT,
            id: boxChatId,
        });

        let currentInbox = {
            imgUrl,
            displayName,
        };

        dispatch({
            type: STORE_CURRENT_INBOX,
            currentInbox,
        });
    };

    const checkActiveOfInbox = () => {
        return isActive ? "inbox--active" : "";
    };

    return (
        <div className={`inbox row p-3 ${checkActiveOfInbox()} `} onClick={() => gotoChatInbox()}>
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
