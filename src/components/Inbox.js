import React from "react";

const Inbox = ({ imgUrl, displayName, lastMessage, senderName, type }) => {
    const customStringToShow = (name) => {
        const MAX_OF_LENGTH = 20;
        return name.length >= MAX_OF_LENGTH ? name.slice(0, 18) + "..." : name;
    };

    const displaySenderName = (senderName) => {
        const TYPE_OF_GROUP = "GROUP";
        return type === TYPE_OF_GROUP ? senderName + ": " : "";
    };

    return (
        <div className="inbox row p-3 ">
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

            <div className=" col-2 ">
                <div className="d-flex flex-column">
                    <div className="text-small mt-2 d-flex justify-content-end">30/7</div>
                    <div
                        className="text-small   d-flex justify-content-end"
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
