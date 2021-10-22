import React, { useState } from "react";

import ProfileDetail from "./ProfileDetail";
import UserNameInput from "./UserNameInput";
import UserNameLabel from "./UserNameLabel";


const ProfileModal = (props) => {

    let userProfile = props.userProfile;
    const [nameChange, setnameChange] = useState(0);
    const onNameChange = () => {
        if (nameChange === 0) setnameChange(1);
        else setnameChange(0);
    };

    return (
        <div onClick={() => onNameChange(0)}>
            <div
                className="modal fade"
                id="exampleModal"
                tabIndex="-1"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
            >
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">
                                Thông tin cá nhân
                            </h5>
                        </div>
                        <div className="modal-body " style={{ height: "500px" }}>
                            <div className="text-center">
                                {" "}
                                <img
                                    type="button"
                                    className="profile__img"
                                    src={userProfile.imageUrl}
                                    alt="Avatar"
                                />
                                {nameChange === 0 ? (
                                    <UserNameLabel user={userProfile} onNameChange={onNameChange} />
                                ) : (
                                    <UserNameInput user={userProfile} />
                                )}
                            </div>

                            <ProfileDetail user={userProfile} />
                           

                        </div>
                        <div className="modal-footer">
                            <button
                                type="button"
                                className="btn btn-danger btn-lg"
                                data-mdb-dismiss="modal"
                            >
                                {" "}
                                Đóng
                            </button>
                            <button
                                type="button"
                                className="btn btn-primary btn-lg"
                                data-mdb-dismiss="modal"
                            >
                                xác nhận
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProfileModal;
