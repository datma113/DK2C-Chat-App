import React from "react";
import logo from "../../assets/image/LOGO.png";
import MyCustomButton from "../../components/MyCustomButton";
import TextInput from "../../components/TextInput";
import regexInputModule from "../../module/regexInputModule";

const Register = () => {
    const REGISTER_FIELDS = [
        { label: "Họ tên", type: "text", regexPattern: "", keyStoreToReducer: "fullname" },
        {
            label: "Email",
            type: "text",
            regexPattern:
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            keyStoreToReducer: "email",
        },
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
            />
        );
    });

    return (
        <div className="d-flex justify-content-center mt-5">
            <div className="col-lg-4 d-flex flex-column align-items-center justify-content-center welcome-container">
                <img src={logo} alt="" className="welcome-container__logo " />
                <p className="text-title mt-3">Đăng ký</p>
                <div className="mt-3 col-6 ">{registerMap}</div>
                <MyCustomButton label="đăng Ký" typeButton="secondary" />
            </div>
        </div>
    );
};

export default Register;
