import React from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import ErrorHandle from "../../components/ErrorHandle";
import MyCustomButton from "../../components/MyCustomButton";
import TextInput from "../../components/TextInput";
import { storeUserInfoWhenRegister } from "../../redux/action/actRegister";
import { CLEAR_USER_INFO_WHEN_DONE_REGISTER } from "../../redux/constants/constants";
const UserInfoRegister = ({ registerFields = [], userRegister = {}, isEntitledGotoNextStep }) => {
    const message = useSelector((state) => state.message);
    const dispatch = useDispatch();

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

    const clearUserRegisterInfo = () => {
        dispatch({
            type: CLEAR_USER_INFO_WHEN_DONE_REGISTER,
        });
    };

    const registerMap = registerFields.map((field, index) => {
        return (
            <TextInput
                key={index}
                id={index}
                label={field.label}
                type={field.type}
                checkRegex={field.checkRegex}
                regexPattern={field.regexPattern}
                functionToDispatch={storeUserInfoWhenRegister}
                keyStoreToReducer={field.keyStoreToReducer}
                initialValue={field.initialValue}
            />
        );
    });
    return (
        <div>
            <div className="mt-3">{registerMap}</div>
            <ErrorHandle message={message.message} />
            <MyCustomButton
                label="Tiếp tục"
                typeButton={`secondary ${isEnableNextBtn()}`}
                isEntitledGotoNextStep={isEntitledGotoNextStep}
            />
            <MyCustomButton
                label="Quay lại"
                typeButton="light"
                iconClass="fas fa-long-arrow-alt-left"
                isGoBackHistory={true}
                gotoPreviousStepOfRegister={clearUserRegisterInfo}
            />
        </div>
    );
};

export default UserInfoRegister;
