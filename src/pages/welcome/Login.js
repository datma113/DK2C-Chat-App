import React from "react";
import logo from "../../assets/image/LOGO.png";
import TextInput from "../../components/TextInput";
const Login = () => {
    const LOGIN_FIELDS = [
        { label: "Số điện thoại", type: "text" },
        { label: "Mật khẩu", type: "password" },
    ];
    const loginMap = LOGIN_FIELDS.map((field, index) => {
        return (
            <TextInput key={index} idOfInput={index} labelOfInput={field.label} type={field.type} />
        );
    });

    return (
        <div className="d-flex justify-content-center mt-5">
            <div className="col-lg-4 d-flex flex-column align-items-center justify-content-center welcome-container">
                <img src={logo} alt="" className="welcome-container__logo " />
                <p className="text-title mt-3">Đăng nhập để tiếp tục !</p>
                <div className="mt-3 col-6 ">{loginMap}</div>
                <div className="btn btn-secondary btn-welcome">Đăng nhập</div>
            </div>
        </div>
    );
};

export default Login;
