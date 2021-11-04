import React from "react";
import { useSelector } from "react-redux";
import EditRoomName from "../modal/EditRoomName";

const InfoOfRoom = () => {
    const currentInbox = useSelector((state) => state.currentInbox);
    const limidDisplayName = (string) => {
        if (string) return string.length > 15 ? string.slice(0, 15) + "..." : string;
        return "";
    };

    const CURRENT_TYPE_ROOM = currentInbox.type;
    const TYPE_ROOM_ONE = "ONE";

    return (
        <div className="info-room center">
            <img className="info-room__img" src={currentInbox.imgUrl} alt="" />

            <div>
                {limidDisplayName(currentInbox.displayName)} &nbsp;
                {CURRENT_TYPE_ROOM !== TYPE_ROOM_ONE && (
                    <EditRoomName currentInbox={currentInbox} />
                )}
            </div>
        </div>
    );
};

export default InfoOfRoom;
