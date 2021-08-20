import React from "react";
import logo from "../../assets/image/LOGO.png";
import TextInput from "../../components/TextInput";
import regexInputModule from "../../module/regexInputModule";
import MyCustomButton from "../../components/MyCustomButton";
import { storePhoneAndPasswordWhenLogin } from "../../redux/action/actLogin";
const Login = () => {
    const LOGIN_FIELDS = [
        { label: "Số điện thoại", type: "text", regexPattern: /[\D]/g, keyStoreToReducer: "phone" },
        {
            label: "Mật khẩu",
            type: "password",
            regexPattern: /[\w]/g,
            keyStoreToReducer: "password",
        },
    ];

    const loginMap = LOGIN_FIELDS.map((field, index) => {
        let checkRegex = function () {};
        switch (index) {
            case 0:
                checkRegex = regexInputModule.checkRegexOfUserPhone;
                break;
            case 1:
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
                functionToDispatch={storePhoneAndPasswordWhenLogin}
                keyStoreToReducer={field.keyStoreToReducer}
            />
        );
    });

    return (
        <div className="d-flex justify-content-center mt-5">
            <div className="col-lg-4 d-flex flex-column align-items-center justify-content-center welcome-container">
                <img src={logo} alt="" className="welcome-container__logo " />
                <p className="text-title mt-3">Đăng nhập để tiếp tục !</p>
                <div className="mt-3 col-6 ">{loginMap}</div>
                <MyCustomButton label="đăng nhập" typeButton="secondary" />
            </div>
        </div>
    );
};

export default Login;
