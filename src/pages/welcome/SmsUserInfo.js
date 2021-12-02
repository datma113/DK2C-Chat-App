import React from "react";
import TextInput from "../../components/TextInput";
import regexInputModule from "../../module/regexInputModule";
import { storeUserInfoWhenRegister } from "../../redux/action/actRegister";
import { CLEAR_USER_INFO_WHEN_DONE_REGISTER } from "../../redux/constants/constants";

const SmsUserInfo = ({ userRegister = {}, setregisterStep, history, dispatch }) => {
    const isEnableNextBtn = () => {
        if (
            userRegister.displayName &&
            userRegister.password &&
            userRegister.email &&
            userRegister["confirmPassword"] === userRegister.password
        )
            return "";
        return "disabled";
    };
    return (
        <div className="center flex-column">
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
                id="email"
                label="Email"
                type="text"
                functionToDispatch={storeUserInfoWhenRegister}
                keyStoreToReducer={"email"}
                initialValue={userRegister.email}
                checkRegex={regexInputModule.checkRegexOfUserEmail}
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
                label="Xác nhận Mật khẩu"
                type="password"
                functionToDispatch={storeUserInfoWhenRegister}
                keyStoreToReducer={"confirmPassword"}
                initialValue=""
                checkRegex={regexInputModule.checkRegexOfUserPassword}
            />
            <button
                type="button"
                className={`btn btn-welcome btn-secondary ${isEnableNextBtn()}`}
                onClick={() => {
                    setregisterStep(1);
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
