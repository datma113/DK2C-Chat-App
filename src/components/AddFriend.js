import React from "react";
import { useDispatch } from "react-redux";
import { declineFriendRequest } from "../redux/action/actFriends";

const AddFriend = ({ users, handleOnChange, functionWhenClick, isMyself }) => {
    const dispatch = useDispatch()
    const notEmptyUser = () => {
        return Object.keys(users).length !== 0 && !isMyself;
    };

    const recallFriendRequestHandle = (user) => {
        dispatch(declineFriendRequest(user.id))
    }

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
                    <div className="d-flex center flex-column">
                        <button type="button" className="btn btn-primary w-75 text-small disabled">
                            đã gữi lời mời
                        </button>
                        <button
                            type="button"
                            className="btn btn-outline-danger w-75 text-small mt-2"
                            onClick={() => recallFriendRequestHandle(users)}
                        >
                            hủy lời mời
                        </button>
                    </div>
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
                    placeholder="Tìm kiếm người dùng"
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
                    <p className="text-danger">Nhập email hoặc số điện thoại!</p>
                )}
            </div>
        </div>
    );
};

export default AddFriend;
