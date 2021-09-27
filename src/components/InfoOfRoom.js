import React from "react";
import { useSelector } from "react-redux";

const InfoOfRoom = () => {
    const currentInbox = useSelector((state) => state.currentInbox);

    return (
        <div className="info-room center">
            <img className="info-room__img" src={currentInbox.imgUrl} alt="" />
            <p>{currentInbox.displayName} &nbsp;
            <i className="fas fa-edit info-room__edit"></i>
            </p>
        </div>
    );
};

export default InfoOfRoom;
