import React, { useState } from "react";
import { useEffect } from "react";
import OtpInput from "react-otp-input";
import { useDispatch, useSelector } from "react-redux";
import ErrorHandle from "../../components/ErrorHandle";
import MyCustomButton from "../../components/MyCustomButton";   
import { storeUserInfoWhenRegister } from "../../redux/action/actRegister";

const OTPCode = ({ gotoPreviousStepOfRegister, isEntitledGotoNextStep, resendOTP }) => {
    const dispatch = useDispatch();
    const message = useSelector((state) => state.message);

    const [otp, setotp] = useState("");

    useEffect(() => {
        dispatch(storeUserInfoWhenRegister("verificationCode", otp));
    }, [dispatch(storeUserInfoWhenRegister("verificationCode", otp))]);

   

    return (
        <div>
            <div className="mb-5 d-flex justify-content-center">
                <OtpInput
                    isInputNum={true}
                    value={otp}
                    onChange={setotp}
                    numInputs={6}
                    separator={<span> &nbsp;&nbsp; </span>}
                />
            </div>
            <p> Vui lòng Check Email:  </p>
            <ErrorHandle message={message.message} />

            <MyCustomButton
                label="xác thực"
                typeButton="secondary"
                isEntitledGotoNextStep={isEntitledGotoNextStep}
            />
            <MyCustomButton
                label="gữi lại OTP"
                typeButton="light"
                iconClass="fas fa-sync-alt"
                isEntitledGotoNextStep={resendOTP}
            />
            <MyCustomButton
                label="chọn email khác"
                typeButton="light"
                iconClass="fas fa-long-arrow-alt-left"
                gotoPreviousStepOfRegister={gotoPreviousStepOfRegister}
            />
        </div>
    );
};

export default OTPCode;
