import React from "react";

const Friend = ({friend, functionWhenClick}) => {
    return (
        <div className="friend row p-3 " onClick={functionWhenClick}>
            <div className="col-3 center">
                <div className="friend__img">
                    <img src={friend.friend.imageUrl} alt="" />
                </div>
            </div>

            <div className="col-9 d-flex align-items-center">
                <div className=" text-medium">{friend.friend.displayName}</div>
            </div>
        </div>
    );
};

export default Friend;
