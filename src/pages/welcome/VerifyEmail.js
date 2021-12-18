import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ErrorHandle from "../../components/ErrorHandle";
import MyCustomButton from "../../components/MyCustomButton";
import TextInput from "../../components/TextInput";
import regexInputModule from "../../module/regexInputModule";
import { storeUserInfoWhenRegister } from "../../redux/action/actRegister";
import { CLEAR_MESSAGE_FROM_SERVER } from "../../redux/constants/constants";

const VerifyEmail = ({ gotoPreviousStepOfRegister, isEntitledGotoNextStep }) => {
    const dispatch = useDispatch();
    const userRegister = useSelector((state) => state.userRegister);
    const message = useSelector((state) => state.message);

    const isDisabled = () => {
        if (
            userRegister.email &&
            userRegister.password &&
            userRegister.confirmPassword === userRegister.password
        )
            return "";
        return "disabled";
    };

    useEffect(() => {
        dispatch({
            type: CLEAR_MESSAGE_FROM_SERVER,
        });
    }, [dispatch]);

    return (
        <div>
            <TextInput
                label="Email của bạn"
                regexPattern={
                    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                }
                checkRegex={regexInputModule.checkRegexOfUserEmail}
                id={0}
                type="email"
                keyStoreToReducer="email"
                functionToDispatch={storeUserInfoWhenRegister}
                initialValue={userRegister.email}
            />
            <TextInput
                label="Mật khẩu"
                id={1}
                type="password"
                keyStoreToReducer="password"
                regexPattern={/[\w]/g}
                checkRegex={regexInputModule.checkRegexOfUserPassword}
                functionToDispatch={storeUserInfoWhenRegister}
                initialValue={userRegister.password}
            />
            <TextInput
                label="xác nhận mật khẩu"
                id={2}
                type="password"
                keyStoreToReducer="confirmPassword"
                functionToDispatch={storeUserInfoWhenRegister}
                initialValue=""
            />
            <ErrorHandle message={message.message} />

            <MyCustomButton
                label="Tiếp tục"
                typeButton="secondary"
                isEntitledGotoNextStep={isEntitledGotoNextStep}
                disabled={isDisabled()}
            />
            <MyCustomButton
                label="Quay lại"
                typeButton="light"
                iconClass="fas fa-long-arrow-alt-left"
                gotoPreviousStepOfRegister={gotoPreviousStepOfRegister}
            />
        </div>
    );
};

export default VerifyEmail;
