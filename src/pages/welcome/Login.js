import React, { useEffect } from "react";
import logo from "../../assets/image/LOGO.png";
import TextInput from "../../components/TextInput";
import MyCustomButton from "../../components/MyCustomButton";
import Swal from "sweetalert2";

import {
    storePhoneAndPasswordWhenLogin,
    login,
    getTokenWhenRefreshPage,
} from "../../redux/action/actLogin";
import { useDispatch, useSelector } from "react-redux";
import { ANIMATE_ZOOM_IN } from "../../animate";
import { useHistory } from "react-router-dom";
import Errorhandle from "../../components/ErrorHandle";
import { CLEAR_MESSAGE_FROM_SERVER, CLEAR_USER_INFO_LOGIN } from "../../redux/constants/constants";

const Login = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const userLogin = useSelector((state) => state.userLogin);
    const message = useSelector((state) => state.message);
    const authentication = useSelector((state) => state.authentication);

    const loginHandle = () => {
        dispatch(login(userLogin))
            .then(() => {
                history.push("/");
            })
            .catch((err) => {
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    html: `<div class="text-normal text-center text-danger"> ${err} </div>`,
                });
            });
    };

    const LOGIN_FIELDS = [
        {
            label: "Tài khoản",
            type: "text",
            regexPattern: /[\D]/g,
            keyStoreToReducer: "username",
        },
        {
            label: "Mật khẩu",
            type: "password",
            regexPattern: /[\w]/g,
            keyStoreToReducer: "password",
            eventWhenEnter: loginHandle,
        },
    ];

    const loginMap = LOGIN_FIELDS.map((field, index) => {
        return (
            <TextInput
                key={index}
                id={index}
                label={field.label}
                type={field.type}
                regexPattern={field.regexPattern}
                functionToDispatch={storePhoneAndPasswordWhenLogin}
                keyStoreToReducer={field.keyStoreToReducer}
                eventWhenEnter={field.eventWhenEnter}
            />
        );
    });

    useEffect(() => {
        dispatch(getTokenWhenRefreshPage());
        dispatch({
            type: CLEAR_USER_INFO_LOGIN,
        });

        dispatch({
            type: CLEAR_MESSAGE_FROM_SERVER,
        });
    }, [dispatch]);

    return (
        <div>
            {!authentication.isLoggin && (
                <div className={`d-flex justify-content-center mt-5 ${ANIMATE_ZOOM_IN} `}>
                    <div className="col-lg-4 d-flex flex-column align-items-center justify-content-center welcome-container">
                        <img src={logo} alt="" className="welcome-container__logo " />
                        <p className="text-title mt-3">Đăng nhập để tiếp tục !</p>
                        <div className="mt-3 ">{loginMap}</div>
                        <Errorhandle message={message.message} />
                        <MyCustomButton
                            label="đăng nhập"
                            typeButton="secondary"
                            login={loginHandle}
                        />
                        <MyCustomButton
                            label="Quay lại"
                            typeButton="light"
                            iconClass="fas fa-long-arrow-alt-left"
                            isGoBackHistory={true}
                        />
                    </div>
                </div>
            )}

            {authentication.isLoggin && (
                <div>
                   {history.push("/")}
                </div>
            )}
        </div>
    );
};

export default Login;
