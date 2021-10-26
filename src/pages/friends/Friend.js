import React from "react";

const Friend = ({ friend, functionWhenClick, gotoChat }) => {
    return (
        <div className="friend row p-3 center" onClick={functionWhenClick}>
            <div className="col-3 center">
                <div className="friend__img">
                    <img src={friend.friend.imageUrl} alt="" />
                </div>
            </div>

            <div className="col-8 d-flex align-items-center">
                <div className=" text-medium">{friend.friend.displayName}</div>
            </div>

            <div
                className="col-1 option-friend-inbox"
                onClick={(e) => {
                    e.stopPropagation();
                    console.log(e.target, this);
                }}
            >
                <div className="center flex-column option-friend-inbox__options">
                    <div
                        className="option-friend-inbox__options__element text-small"
                        onClick={gotoChat}
                    >
                        Nhắn tin
                    </div>
                    <div className="option-friend-inbox__options__element text-small">
                        xem thông tin
                    </div>
                </div>
                ...
            </div>
        </div>
    );
};

export default Friend;
