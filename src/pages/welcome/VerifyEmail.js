import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ErrorHandle from "../../components/ErrorHandle";
import MyCustomButton from "../../components/MyCustomButton";
import TextInput from "../../components/TextInput";
import regexInputModule from "../../module/regexInputModule";
import { storeUserInfoWhenRegister } from "../../redux/action/actLogin";
import { CLEAR_MESSAGE_FROM_SERVER } from "../../redux/constants/constants";

const VerifyEmail = ({ gotoPreviousStepOfRegister, isEntitledGotoNextStep }) => {
    const dispatch = useDispatch()
    const userRegister = useSelector((state) => state.userRegister);
    const message = useSelector((state) => state.message);
   
    useEffect(() => {
        dispatch({
            type: CLEAR_MESSAGE_FROM_SERVER
        })
    }, [])

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
            <ErrorHandle message={message.message} />

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
