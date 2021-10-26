import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { changeUserImage } from "../../redux/action/actProfile";

import ProfileDetail from "./ProfileDetail";
import UserNameInput from "./UserNameInput";
import UserNameLabel from "./UserNameLabel";

const ProfileModal = ({ userProfile }) => {
    const [isShowInputField, setisShowInputField] = useState(false);
    const dispatch = useDispatch();
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

    const handleChangeUserImage = (e) => {
        const IMAGES = e.target.files;
        const formData = new FormData();

        formData.append("files", IMAGES[0]);
        
        dispatch(changeUserImage(formData));
    };

    return (
        <div
            onClick={(e) => {
                notToggleDisplayNameInputField(e);
            }}
        >
            <div
                className="modal fade"
                id="openMyInfoModal"
                tabIndex="-1"
                aria-labelledby="openMyInfoModallabel"
                aria-hidden="true"
            >
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="openMyInfoModallabel">
                                Thông tin cá nhân
                            </h5>
                            <button
                                type="button"
                                className="btn-close"
                                data-mdb-dismiss="modal"
                                aria-label="Close"
                            ></button>
                        </div>
                        <div className="modal-body " style={{ height: "500px" }}>
                            <div className="text-center">
                                {" "}
                                <label htmlFor="userImage">
                                    <img
                                        type="button"
                                        className="profile__img"
                                        src={userProfile.imageUrl}
                                        alt="Avatar"
                                    />
                                    <i className="fas fa-camera m-1"></i>
                                    <input
                                        className="d-none"
                                        type="file"
                                        id="userImage"
                                        name="image"
                                        accept="image/gif,image/jpeg,image/jpg,image/png"
                                        multiple
                                        data-original-title="upload photos"
                                        onChange={(e) => handleChangeUserImage(e)}
                                    />
                                </label>
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
