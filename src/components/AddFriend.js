import React from "react";

const AddFriend = ({ users, handleOnChange, functionWhenClick, isMyself }) => {
    const notEmptyUser = () => {
        return Object.keys(users).length !== 0 && !isMyself;
    };

    const renderButtonAddFriend = (user) => {
        const WAS_FRIEND = "FRIEND";
        const SENDED = "SENT";

        switch (user.friendStatus) {
            case WAS_FRIEND:
                return (
                    <button type="button" className="btn btn-primary w-75 text-small disabled">
                        đã kết bạn
                    </button>
                );

            case SENDED:
                return (
                    <button type="button" className="btn btn-danger w-75 text-small disabled">
                        đã gữi lời mời
                    </button>
                );
            default:
                return (
                    <button
                        type="button"
                        className="btn btn-primary w-75 text-small"
                        onClick={functionWhenClick}
                    >
                        Kết bạn
                    </button>
                );
        }
    };

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
                {notEmptyUser() ? (
                    <div className="user-searched">
                        <img src={users.imageUrl} alt="" className="user-searched-img" />
                        <p>{users.displayName}</p>
                        {renderButtonAddFriend(users)}
                    </div>
                ) : (
                    <p className="text-danger">Vui lòng nhập chính xác nhập Số Điện Thoại!</p>
                )}
            </div>
        </div>
    );
};

export default AddFriend;
