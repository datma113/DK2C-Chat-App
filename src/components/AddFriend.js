import React from "react";

const AddFriend = ({ users, friends, handleOnChange, functionWhenClick }) => {
    const isEmptyUser = () => {
        return Object.keys(users).length === 0;
    };

    const wasFriends = () => {
        const USER_ID = users.id;
        const friendsIdMap = friends.map((friend) => friend.friend.id);

        if (friendsIdMap.includes(USER_ID)) return true;
        return false;
    };
    wasFriends();

    return (
        <div>
            <div className="center flex-column" style={{ userSelect: `none` }}>
                <input
                    type="text"
                    className="form-control text-medium text-center w-75"
                    placeholder="Tìm số điện thoại"
                    onChange={handleOnChange}
                />
                <hr />
                {!isEmptyUser() ? (
                    <div className="user-searched">
                        <img src={users.imageUrl} alt="" className="user-searched-img" />
                        <p>{users.displayName}</p>
                        {!wasFriends() ? (
                            <button
                                type="button"
                                className="btn btn-primary w-75 text-small"
                                onClick={functionWhenClick}
                            >
                                Kết bạn
                            </button>
                        ) : (
                            <button
                                type="button"
                                className="btn btn-primary w-75 text-small disabled"
                            >
                                đã kết bạn
                            </button>
                        )}
                    </div>
                ) : (
                    <p className="text-danger">Vui lòng nhập chính xác nhập Số Điện Thoại!</p>
                )}
            </div>
        </div>
    );
};

export default AddFriend;
