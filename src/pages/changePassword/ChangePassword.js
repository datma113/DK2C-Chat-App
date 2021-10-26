import React from "react";
import TextInput from "../../components/TextInput";
import ErrorHandle from "../../components/ErrorHandle";
import Swal from "sweetalert2";

import { changePassword, storeOldAndNewPassword } from "../../redux/action/actProfile";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
const ChangePassword = () => {
    const oldAndNewPassword = useSelector((state) => state.oldAndNewPassword);
    const history = useHistory();
    const dispatch = useDispatch();
    const FIELDS = [
        {
            label: "Mật khẩu cũ",
            id: "oldPassword",
            type: "password",
        },
        {
            label: "Mật khẩu mới",
            id: "newPassword",
            type: "password",
        },
        {
            label: "Xác nhận mật khẩu",
            id: "confirmNewPassword",
            type: "password",
        },
    ];

    const isDisabledBtnWhenNotMatchPass = () => {
        const { newPassword, confirmNewPassword } = oldAndNewPassword;
        return newPassword !== confirmNewPassword ? "disabled" : "";
    };

    const isDisabledWhenEmpty = () => {
        const { oldPassword, newPassword, confirmNewPassword } = oldAndNewPassword;
        if (oldPassword && newPassword && confirmNewPassword) return "";
        return "disabled";
    };

    const changePasswordHandle = () => {
        const USER_PASSWORD = {
            oldPass: oldAndNewPassword.oldPassword,
            newPass: oldAndNewPassword.newPassword,
        };

        dispatch(changePassword(USER_PASSWORD))
            .then(() => {
                Swal.fire({
                    icon: "success",
                    title: "Đổi mật khẩu thành công!",
                    text: " Hệ thống sẽ tự đọng quay về trang chủ",
                    showConfirmButton: false,
                });
                setTimeout(() => {
                    history.push("/");
                    window.location.reload();
                }, 2000);
            })
            .catch((err) => {
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    html: `<p class="text-normal text-center text-danger"> ${err} </p>`,
                });
            });
    };

    const changePassMap = FIELDS.map((field, index) => {
        return (
            <TextInput
                key={index}
                label={field.label}
                id={field.id}
                type="password"
                keyStoreToReducer={field.id}
                functionToDispatch={storeOldAndNewPassword}
            />
        );
    });

    return (
        <div className="center">
            <div className="change-pass-container col-4 mt-5">
                <p className="text-large text-center">
                    <i className="fas fa-key text-danger"></i> &nbsp; Đổi mật khẩu
                </p>
                <div className="center flex-column mt-5">
                    {changePassMap}
                    <ErrorHandle />
                    <div
                        className={`btn btn-dark btn-welcome ${isDisabledBtnWhenNotMatchPass()} ${isDisabledWhenEmpty()} `}
                        onClick={() => {
                            changePasswordHandle();
                        }}
                    >
                        Đổi mật khẩu
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ChangePassword;
