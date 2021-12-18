import React from "react";
import FriendProfile from "../components/FriendProfile";

const ViewFriendProfile = ({ viewProfile, id, friendProfile, onMouseLeave }) => {
    return (
        <>
            <div
                type="button"
                data-mdb-toggle="modal"
                data-mdb-target={`#viewProfile${id}`}
                className={`option-friend-inbox__options__element text-small`}
                onClick={viewProfile}
            >
                xem thông tin
            </div>

            <div
                className="modal fade"
                id={`viewProfile${id}`}
                tabIndex="1"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
                onMouseLeave={onMouseLeave}
            >
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">
                               Trang cá nhân
                            </h5>
                            <button
                                type="button"
                                className="btn-close"
                                data-mdb-dismiss="modal"
                                aria-label="Close"
                            ></button>
                        </div>
                        <div className="modal-body">
                            <FriendProfile  friendProfile={friendProfile}  />
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
                                className={`btn btn-primary btn-lg `}
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

export default ViewFriendProfile;
