import React from "react";
import { useSelector } from "react-redux";
import MyCustomButton from "../../components/MyCustomButton";
import TextInput from "../../components/TextInput";
import regexInputModule from "../../module/regexInputModule";
import { storeUserInfoWhenRegister } from "../../redux/action/actLogin";
import {
    registerUserAccountStep2
} from "../../redux/action/actRegister";

const VerifyEmail = ({ gotoPreviousStepOfRegister, gotoNextStepOfRegister}) => {
    const userRegister = useSelector((state) => state.userRegister);

    const isEntitledGotoNextStep = () => {
        registerUserAccountStep2(userRegister)
            .then(() => {
                gotoNextStepOfRegister();
            })
            .catch((err) => {
                window.alert(err);
            });
    };
    return (
        <div>
            <TextInput
                label="Email của bạn"
                id={0}
                type="text"
                regexPattern={
                    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                }
                keyStoreToReducer="email"
                checkRegex={regexInputModule.checkRegexOfUserEmail}
                functionToDispatch={storeUserInfoWhenRegister}
                initialValue={userRegister.email}
            />
            <MyCustomButton
                label="xác nhận"
                typeButton="secondary"
                isEntitledGotoNextStep={isEntitledGotoNextStep}
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
