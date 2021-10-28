import React from "react";

const FriendsToCreateRoom = ({ friend, functionWhenClick }) => {
    return (
        <div className="col-4">
            <div className="create-room-mems__friends__left__element" onClick={functionWhenClick} >
                <img className="header-img mt-2" src={friend.imageUrl} alt="" />
                <p className="text-small"> {friend.displayName} </p>
            </div>
        </div>
    );
};

export default FriendsToCreateRoom;
