import React from "react";
import EditRoomName from "../modal/EditRoomName";

const InfoOfRoom = ({ currentInbox = {} }) => {
    const limidDisplayName = (string) => {
        const LIMITED_LENGTH = 40;
        if (string)
            return string.length > LIMITED_LENGTH
                ? string.slice(0, LIMITED_LENGTH) + "..."
                : string;
        return "";
    };

    const CURRENT_TYPE_ROOM = currentInbox.type;
    const TYPE_ROOM_ONE = "ONE";

    return (
        <div className="info-room center">
            <img className="info-room__img" src={currentInbox.imgUrl} alt="" />

            <div className="info-room__name text-center">
                {limidDisplayName(currentInbox.displayName)} &nbsp;
                {CURRENT_TYPE_ROOM !== TYPE_ROOM_ONE && (
                    <EditRoomName currentInbox={currentInbox} />
                )}
            </div>
        </div>
    );
};

export default InfoOfRoom;
