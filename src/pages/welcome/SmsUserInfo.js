import React from "react";
import Swal from "sweetalert2";
import TextInput from "../../components/TextInput";
import regexInputModule from "../../module/regexInputModule";
import {
    registerValidPhone,
    storeUserInfoWhenRegister,
} from "../../redux/action/actRegister";
import { CLEAR_USER_INFO_WHEN_DONE_REGISTER } from "../../redux/constants/constants";
import ErrorHandle from "../../components/ErrorHandle";

const SmsUserInfo = ({ userRegister = {}, setregisterStep, history, dispatch, message }) => {
    const isEnableNextBtn = () => {
        if (
            userRegister.displayName &&
            userRegister.password &&
            userRegister.phoneNumber &&
            userRegister["confirmPassword"] === userRegister.password
        )
            return "";
        return "disabled";
    };
    return (
        <div className="d-flex flex-column">
            <TextInput
                key={1}
                id="displayName"
                label="Họ tên"
                type="text"
                functionToDispatch={storeUserInfoWhenRegister}
                keyStoreToReducer={"displayName"}
                initialValue={userRegister.displayName}
                checkRegex={regexInputModule.checkRegexOfUserFullname}
            />
            <TextInput
                key={2}
                id="phoneNumber"
                label="số điến thoại"
                type="text"
                functionToDispatch={storeUserInfoWhenRegister}
                keyStoreToReducer={"phoneNumber"}
                initialValue={userRegister.phoneNumber}
                regexPattern={/[\D]/g}
                checkRegex={regexInputModule.checkRegexOfUserPhone}
            />
            <TextInput
                key={3}
                id="password"
                label="Mật khẩu"
                type="password"
                functionToDispatch={storeUserInfoWhenRegister}
                keyStoreToReducer={"password"}
                initialValue={userRegister.password}
                checkRegex={regexInputModule.checkRegexOfUserPassword}
            />
            <TextInput
                key={4}
                id="confirmPassword"
                label="Xác nhận mật khẩu"
                type="password"
                functionToDispatch={storeUserInfoWhenRegister}
                keyStoreToReducer={"confirmPassword"}
                initialValue={userRegister.confirmPassword}
                checkRegex={regexInputModule.checkRegexOfUserPassword}
            />
            <ErrorHandle message={message.message} />
            <button
                type="button"
                className={`btn btn-welcome btn-secondary ${isEnableNextBtn()}`}
                onClick={() => {
                    dispatch(registerValidPhone(userRegister))
                        .then((resp) => {
                            setregisterStep(1);
                        })
                        .catch((err) => {
                            Swal.fire({
                                icon: "error",
                                title: "Oops...",
                                html: `<div class="text-normal text-center text-danger"> ${err} </div>`,
                            });
                        });
                }}
            >
                tiếp tục
            </button>
            <button
                type="button"
                className="btn btn-welcome btn-outline-secondary mt-3"
                onClick={() => {
                    history.push("/");
                    dispatch({ type: CLEAR_USER_INFO_WHEN_DONE_REGISTER });
                }}
            >
                Quay lại
            </button>
        </div>
    );
};

export default SmsUserInfo;
