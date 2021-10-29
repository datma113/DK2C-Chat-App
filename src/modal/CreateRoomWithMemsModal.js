import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import CreateRoomWithMems from "../pages/homePage/CreateRoomWithMems";
import { getFriendsListFromServer } from "../redux/action/actFriends";

const CreateRoomWithMemsModal = () => {
    const dispatch = useDispatch();
    const friendsList = useSelector((state) => state.friendsList);
    const [friendsAdded, setfriendsAdded] = useState([]);

    const getFriendsAdded = (friendsAdded) => {
        setfriendsAdded(friendsAdded);
    };

    const isDisabledConfirmBtn = () => {
        return !friendsAdded.length ? "disabled" : "";
    };

    return (
        <>
            <i
                className="header-inbox-container__icon fas fa-users text-small"
                data-mdb-toggle="modal"
                data-mdb-target={`#createRoomWithMemsModal`}
                onClick={() => dispatch(getFriendsListFromServer())}
            ></i>

            <div
                className="modal fade"
                id={`createRoomWithMemsModal`}
                tabIndex="1"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
            >
                <div className="modal-dialog create-room-mems-modal">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">
                                Tạo nhóm
                            </h5>
                            <button
                                type="button"
                                className="btn-close"
                                data-mdb-dismiss="modal"
                                aria-label="Close"
                            ></button>
                        </div>
                        <div className="modal-body text-center">
                            <CreateRoomWithMems
                                friends={friendsList}
                                getFriendsAdded={getFriendsAdded}
                            />
                        </div>
                        <div className="modal-footer">
                            <button
                                type="button"
                                className="btn btn-light btn-lg"
                                data-mdb-dismiss="modal"
                            >
                                Hủy
                            </button>
                            <button
                                type="button"
                                className={`btn btn-primary btn-lg ${isDisabledConfirmBtn()}`}
                                data-mdb-dismiss="modal"
                            >
                                xác nhận
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default CreateRoomWithMemsModal;
