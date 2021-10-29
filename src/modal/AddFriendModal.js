import React from "react";
import AddFriend from "../components/AddFriend";
import { getUsers } from "../redux/action/actHome";

const AddfriendModal = () => {

    const getUsersHandle = (query = "") => {
        const MINIMUM_OF_PHONE_NUMBER = 10
        if(query.length >= MINIMUM_OF_PHONE_NUMBER)
            getUsers(query);
    };

    return (
        <>
            <i
                className="header-inbox-container__icon fas fa-user-plus  text-small"
                data-mdb-toggle="modal"
                data-mdb-target={`#addfriendModal`}
            ></i>

            <div
                className="modal fade"
                id={`addfriendModal`}
                tabIndex="1"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
            >
                <div className="modal-dialog add-friends-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">
                                Tìm người dùng
                            </h5>
                            <button
                                type="button"
                                className="btn-close"
                                data-mdb-dismiss="modal"
                                aria-label="Close"
                            ></button>
                        </div>
                        <div className="modal-body text-center">
                            <AddFriend
                                handleOnChange={(e) => {
                                    getUsersHandle(e.target.value);
                                }}
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
                                className={`btn btn-success btn-lg `}
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

export default AddfriendModal;
