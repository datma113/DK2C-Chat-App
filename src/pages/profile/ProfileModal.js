import React, { useState } from "react";

import ProfileDetail from "./ProfileDetail";
import UserNameInput from "./UserNameInput";
import UserNameLabel from "./UserNameLabel";

const ProfileModal = ({ userProfile }) => {
    const [isShowInputField, setisShowInputField] = useState(false);
    const DISPLAY_NAME_INPUT_ID = "displayNameInputId";

    const onNameChange = (e) => {
        setisShowInputField(!isShowInputField);
    };

    const notToggleDisplayNameInputField = (e) => {
        const ID_OF_INPUT_FIELD = e.target.id;
        if (isShowInputField && ID_OF_INPUT_FIELD !== DISPLAY_NAME_INPUT_ID) {
            setisShowInputField(false);
        }
    };

    return (
        <div
            onClick={(e) => {
                notToggleDisplayNameInputField(e);
            }}
        >
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
                                {isShowInputField ? (
                                    <UserNameInput user={userProfile} id={DISPLAY_NAME_INPUT_ID} />
                                ) : (
                                    <UserNameLabel
                                        user={userProfile}
                                        onNameChange={(e) => onNameChange(e)}
                                    />
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
