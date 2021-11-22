import React from "react";
import ProfileImage from "../assets/image/anh-background-cho-ngay-giang-sinh_091043327.jpg";

const FriendProfile = ({ friendProfile = {} }) => {
    const convertDOB = (dob) => {
        const convertDOBDate = dob ? new Date(dob) : new Date();
        return `${convertDOBDate.getDate()}/${
            convertDOBDate.getMonth() + 1
        }/${convertDOBDate.getFullYear()}`;
    };

    return (
        <div className="friend-profile">
            <div className="friend-profile__header-img">
                <img className="friend-profile__header-img__big-img" src={ProfileImage} alt="" />
                <img
                    src={friendProfile.imageUrl}
                    className="friend-profile__header-img__small-img"
                    alt=""
                />
            </div>
            <div className="mt-5 flex-column  ">
                <p className="text-center"> {friendProfile.displayName} </p>

                <div className="row ">
                    <div className="col-4 text-small">Số điện thoại</div>
                    <div className="col-8 text-small">{friendProfile.phoneNumber} </div>
                </div>
                <div className="row">
                    <div className="col-4 text-small">Ngày sinh</div>
                    <div className="col-8 text-small">{convertDOB(friendProfile.dateOfBirth)} </div>
                </div>
                <div className="row">
                    <div className="col-4 text-small">Email</div>
                    <div className="col-8 text-small">{friendProfile.email} </div>
                </div>
                <div className="row">
                    <div className="col-4 text-small">Giới tính</div>
                    <div className="col-8 text-small">{friendProfile.gender} </div>
                </div>
            </div>
        </div>
    );
};

export default FriendProfile;
