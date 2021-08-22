import React from "react";
import logo from "../../assets/image/LOGO.png";
import MyCustomButton from "../../components/MyCustomButton";
import TextInput from "../../components/TextInput";
import regexInputModule from "../../module/regexInputModule";
import { storeUserInfoWhenRegister } from "../../redux/action/actLogin";
import { ANIMATE_ZOOM_IN } from "../../animate";
import { useState } from "react";
import CompetedStep from "../../components/CompetedStep";
import VerifyEmail from "./VerifyEmail";
import SendVerifyCode from "./SendVerifyCode";
import {
    registerUserAccountStep1,
    registerUserAccountStep1Redo,
    storeUserInfoWhenDoneRegisterStep1,
} from "../../redux/action/actRegister";
import { useDispatch, useSelector } from "react-redux";

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

    const registerMap = REGISTER_FIELDS.map((field, index) => {
        let checkRegex = function () {};
        switch (index) {
            case 0:
                checkRegex = regexInputModule.checkRegexOfUserFullname;
                break;
            case 1:
                checkRegex = regexInputModule.checkRegexOfUserPhone;
                break;
            case 2:
                checkRegex = regexInputModule.checkRegexOfUserPassword;
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
            />
        );
    });

    const gotoNextStepOfRegister = () => {
        setregisterStep((step) => step + 1);
    };

    const isEntitledGotoNextStep = () => {
        if (!userRegister.id) {
            registerUserAccountStep1(userRegister)
                .then((data) => {
                    dispatch(storeUserInfoWhenDoneRegisterStep1(data));
                    gotoNextStepOfRegister()
                })
                .catch(() => {
                    window.alert(` result thất bại `);
                });
        } else {
            registerUserAccountStep1Redo(userRegister)
                .then((data) => {
                    dispatch(storeUserInfoWhenDoneRegisterStep1(data));
                    gotoNextStepOfRegister()
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
                    <div>
                        <div className="mt-3 col-12 ">{registerMap}</div>
                        <MyCustomButton
                            label="Tiếp tục"
                            typeButton="secondary"
                            isEntitledGotoNextStep={isEntitledGotoNextStep}
                        />
                        <MyCustomButton
                            label="Quay lại"
                            typeButton="light"
                            iconClass="fas fa-long-arrow-alt-left"
                            isGoBackHistory={true}
                        />
                    </div>
                )}

                {registerStep === 1 && <VerifyEmail changeRegisterStep={gotoNextStepOfRegister} />}
                {registerStep === 2 && <SendVerifyCode />}
            </div>
        </div>
    );
};

export default Register;
