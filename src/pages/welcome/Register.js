import React from "react";
import logo from "../../assets/image/LOGO.png";
import MyCustomButton from "../../components/MyCustomButton";

import { ANIMATE_ZOOM_IN } from "../../animate";
import { useState } from "react";
import CompetedStep from "../../components/CompetedStep";
import VerifyEmail from "./VerifyEmail";
import {
    registerUserAccountStep1,
    registerUserAccountStep1Redo,
    storeUserInfoWhenDoneARegisterStep,
} from "../../redux/action/actRegister";
import { useDispatch, useSelector } from "react-redux";
import OTPCode from "./OTPCode";
import UserInfoRegister from "./UserInfoRegister";

const Register = () => {
    const dispatch = useDispatch();
    const userRegister = useSelector((state) => state.userRegister);
    const [registerStep, setregisterStep] = useState(0);

    const REGISTER_FIELDS = [
        { label: "Họ tên", type: "text", regexPattern: /./, keyStoreToReducer: "displayName" },
        {
            label: "Số điện thoại",
            type: "text",
            regexPattern: /[\D]/g,
            keyStoreToReducer: "phoneNumber",
        },
        {
            label: "Mật khẩu",
            type: "password",
            regexPattern: /[\w]/g,
            keyStoreToReducer: "password",
        },
    ];

    const gotoNextStepOfRegister = () => {
        setregisterStep((step) => step + 1);
    };

    const gotoPreviousStepOfRegister = () => {
        setregisterStep((step) => step - 1);
    };

    const isEntitledGotoNextStep = () => {
        if (!userRegister.id) {
            dispatch(registerUserAccountStep1(userRegister))
                .then((data) => {
                    dispatch(storeUserInfoWhenDoneARegisterStep(data));
                    gotoNextStepOfRegister();
                })
                .catch(() => {
                    window.alert(` result thất bại `);
                });
        } else {
            dispatch(registerUserAccountStep1Redo(userRegister))
                .then((data) => {
                    dispatch(storeUserInfoWhenDoneARegisterStep(data));
                    gotoNextStepOfRegister();
                })
                .catch(() => {
                    window.alert(` result redo thất bại `);
                });
        }
    };

    return (
        <div className={`d-flex justify-content-center mt-5 ${ANIMATE_ZOOM_IN}`}>
            <div className="col-lg-4 d-flex flex-column align-items-center justify-content-center welcome-container">
                <img src={logo} alt="" className="welcome-container__logo " />
                <p className="text-title mt-3">Đăng ký</p>
                <CompetedStep numberStep={3} currentStep={registerStep} />

                {/* authentication step 1 */}
                {registerStep === 0 && (
                    <UserInfoRegister
                        registerFields={REGISTER_FIELDS}
                        userRegister={userRegister}
                        isEntitledGotoNextStep={isEntitledGotoNextStep}
                    />
                )}

                {registerStep === 1 && (
                    <VerifyEmail
                        gotoPreviousStepOfRegister={gotoPreviousStepOfRegister}
                        gotoNextStepOfRegister={gotoNextStepOfRegister}
                    />
                )}
                {registerStep === 2 && (
                    <OTPCode gotoPreviousStepOfRegister={gotoPreviousStepOfRegister} />
                )}
            </div>
        </div>
    );
};

export default Register;
