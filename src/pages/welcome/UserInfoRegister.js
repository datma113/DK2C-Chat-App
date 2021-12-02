import React from "react";
import { useSelector } from "react-redux";
import ErrorHandle from "../../components/ErrorHandle";
import MyCustomButton from "../../components/MyCustomButton";
import TextInput from "../../components/TextInput";
import regexInputModule from "../../module/regexInputModule";
import { storeUserInfoWhenRegister } from "../../redux/action/actRegister";
const UserInfoRegister = ({ registerFields = [], userRegister = {}, isEntitledGotoNextStep }) => {
    const message = useSelector((state) => state.message);

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

    const registerMap = registerFields.map((field, index) => {
        let checkRegex = function () {};
        let initialValue = null;

        switch (index) {
            case 0:
                checkRegex = regexInputModule.checkRegexOfUserFullname;
                initialValue = userRegister.displayName;
                break;
            case 1:
                checkRegex = regexInputModule.checkRegexOfUserPhone;
                initialValue = userRegister.phoneNumber;
                break;
            case 2:
                checkRegex = regexInputModule.checkRegexOfUserPassword;
                initialValue = userRegister.password;
                break;
            case 3:
                checkRegex = regexInputModule.checkRegexOfUserPassword;
                initialValue = "";
                break;
            default:
                break;
        }
        return (
            <TextInput
                key={index}
                id={index}
                label={field.label}
                type={field.type}
                checkRegex={checkRegex}
                regexPattern={field.regexPattern}
                functionToDispatch={storeUserInfoWhenRegister}
                keyStoreToReducer={field.keyStoreToReducer}
                initialValue={initialValue}
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
            />
        </div>
    );
};

export default UserInfoRegister;
