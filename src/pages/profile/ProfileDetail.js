import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import DateSelected from "../../components/DateSelected";

const ProfileDetail = ({ user, setDOB, setGender }) => {
    const DOB_TIME = Object.entries(user).length ? new Date(user.dateOfBirth) : new Date();
    const USER_DOB = {
        year: DOB_TIME.getFullYear(),
        day: DOB_TIME.getDate(),
        month: DOB_TIME.getMonth() + 1,
    };
    const GENDER = ["Nữ", "Nam"];

    const [selectValue, setselectValue] = useState("");

    useEffect(() => {
        setselectValue(user.gender);
    }, [user]);

    const genderMap = GENDER.map((gender, index) => {
        return (
            <option key={index} value={gender}>
                {gender}
            </option>
        );
    });

    return (
        <div className="container row ">
            <div className="profile__detail col-12">
                <div className="mb-2">
                    {" "}
                    <h4>Số điện thoại đăng ký:</h4>
                    <input value={user.phoneNumber || "đang tải"} disabled className="text-small" />
                </div>
                <div className="mb-2">
                    <h4>Email:</h4>
                    <input value={user.email || "đang tải"} disabled className="text-small" />
                </div>

                <DateSelected userDOB={USER_DOB} setDOB={setDOB} />

                <select
                    className="form-control text-medium mt-5 text-center"
                    value={selectValue}
                    onChange={(e) => {
                        setselectValue(e.target.value);
                        setGender(e.target.value);
                    }}
                >
                    {genderMap}
                </select>

                <Link to="/changePassword">
                    <div
                        className="mt-3"
                        onClick={() => window.$("#openMyInfoModal").modal("hide")}
                    >
                        <i className="fas fa-key text-primary"></i> &nbsp; Đổi mật khẩu
                    </div>
                </Link>
            </div>
        </div>
    );
};

export default ProfileDetail;
