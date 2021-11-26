import React from "react";
import TextInput from "../../components/TextInput";
import { storeUserInfoWhenRegister } from "../../redux/action/actRegister";
import { CLEAR_USER_INFO_WHEN_DONE_REGISTER } from "../../redux/constants/constants";

const SmsUserInfo = ({ userRegister = {}, setregisterStep, history, dispatch }) => {
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
            />
            <TextInput
                key={2}
                id="email"
                label="Email"
                type="text"
                functionToDispatch={storeUserInfoWhenRegister}
                keyStoreToReducer={"email"}
                initialValue={userRegister.email}
            />
            <TextInput
                key={3}
                id="password"
                label="Mật khẩu"
                type="password"
                functionToDispatch={storeUserInfoWhenRegister}
                keyStoreToReducer={"password"}
                initialValue={userRegister.password}
            />
            <button
                type="button"
                className="btn btn-welcome btn-secondary"
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
