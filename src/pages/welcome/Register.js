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

const Register = () => {
    const [registerStep, setregisterStep] = useState(0);

    const REGISTER_FIELDS = [
        { label: "Họ tên", type: "text", regexPattern: /./, keyStoreToReducer: "fullname" },
        { label: "Số điện thoại", type: "text", regexPattern: /[\D]/g, keyStoreToReducer: "phone" },
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
                checkRegex = regexInputModule.checkRegexOfUserEmail;
                break;
            case 2:
                checkRegex = regexInputModule.checkRegexOfUserPhone;
                break;
            case 3:
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

    const changeRegisterStep = () => {
        setregisterStep((step) => step + 1);
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
                            changeRegisterStep={changeRegisterStep}
                        />
                        <MyCustomButton
                            label="Quay lại"
                            typeButton="light"
                            iconClass="fas fa-long-arrow-alt-left"
                            isGoBackHistory={true}
                        />
                    </div>
                )}

                {registerStep === 1 && <VerifyEmail  changeRegisterStep={changeRegisterStep}/>}
                {registerStep === 2 && <SendVerifyCode  />}

            </div>
        </div>
    );
};

export default Register;
