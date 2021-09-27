import React from "react";
import { useSelector } from "react-redux";
import EditRoomName from "../modal/EditRoomName";

const InfoOfRoom = () => {
    const currentInbox = useSelector((state) => state.currentInbox);

    return (
        <div className="info-room center">
            <img className="info-room__img" src={currentInbox.imgUrl} alt="" />
            <div>
                {currentInbox.displayName} &nbsp;
                <EditRoomName currentInbox={currentInbox}/>
            </div>
        </div>
    );
};

export default InfoOfRoom;