import React, { useEffect } from "react";
import logo from "../../assets/image/LOGO.png";
import { ANIMATE_ZOOM_IN } from "../../animate";
import { useState } from "react";
import CompetedStep from "../../components/CompetedStep";
import {
    registerUserAccountInitialStep,
    storeUserInfoWhenDoneARegisterStep,
    registerUserAccountVerifyEmailStep,
    clearUserInfoWhenDoneRegister,
    registerUserAccountVerifyOtpStep,
    resendOTPMail,
} from "../../redux/action/actRegister";
import { useDispatch, useSelector } from "react-redux";
import OTPCode from "./OTPCode";
import Loading from "../../components/Loading";
import UserInfoRegister from "./UserInfoRegister";
import { useHistory } from "react-router-dom";
import { CLEAR_MESSAGE_FROM_SERVER } from "../../redux/constants/constants";
import Swal from "sweetalert2";
import regexInputModule from "../../module/regexInputModule";

const Register = () => {
    const dispatch = useDispatch();
    const userRegister = useSelector((state) => state.userRegister);
    const authentication = useSelector((state) => state.authentication);
    const [registerStep, setregisterStep] = useState(0);
    const [isLoading, setisLoading] = useState(false);
    const history = useHistory();

    const REGISTER_FIELDS = [
        {
            label: "Họ tên",
            type: "text",
            regexPattern: /./,
            keyStoreToReducer: "displayName",
            checkRegex: regexInputModule.checkRegexOfUserFullname,
            initialValue: userRegister.displayName,
        },
        {
            label: "Email của bạn",
            type: "text",
            regexPattern:
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            keyStoreToReducer: "email",
            checkRegex: regexInputModule.checkRegexOfUserEmail,
            initialValue: userRegister.email,
        },
        {
            label: "Mật khẩu",
            type: "password",
            regexPattern: /[\w]/g,
            keyStoreToReducer: "password",
            checkRegex: regexInputModule.checkRegexOfUserPassword,
            initialValue: userRegister.password,
        },
        {
            label: "Xác nhận mật khẩu",
            type: "password",
            keyStoreToReducer: "confirmPassword",
            checkRegex: regexInputModule.checkRegexOfUserPassword,
            initialValue: "",
        },
    ];

    const gotoNextStepOfRegister = () => {
        setregisterStep((step) => step + 1);
    };

    const gotoPreviousStepOfRegister = () => {
        setregisterStep((step) => step - 1);
    };

    const isEntitledGotoNextStep_step1 = () => {
        setisLoading(true);
        dispatch(registerUserAccountInitialStep(userRegister))
            .then((data) => {
                dispatch(storeUserInfoWhenDoneARegisterStep(data));

                dispatch(registerUserAccountVerifyEmailStep(userRegister))
                    .then((data) => {
                        dispatch(storeUserInfoWhenDoneARegisterStep(data));
                        gotoNextStepOfRegister();
                        setisLoading(false);
                    })
                    .catch((err) => {
                        setisLoading(false);
                        Swal.fire({
                            icon: "error",
                            title: "Oops...",
                            html: `<div class="text-normal text-center text-danger"> ${err} </div>`,
                        });
                    });
            })
            .catch((err) => {
                setisLoading(false);
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    html: `<div class="text-normal text-center text-danger"> ${err} </div>`,
                });
            });
    };

    const confirmOTPAndCompletedRegister = () => {
        const user = {
            ...userRegister,
            verificationCode: userRegister.verificationCode,
        };
        dispatch(registerUserAccountVerifyOtpStep(user))
            .then(() => {
                dispatch(clearUserInfoWhenDoneRegister());
                let timerInterval;
                Swal.fire({
                    title: "Đăng ký thành cộng!",
                    html: "Tự động chuyển trang trong <b></b>s",
                    timer: 3000,
                    timerProgressBar: true,
                    didOpen: () => {
                        Swal.showLoading();
                        const b = Swal.getHtmlContainer().querySelector("b");
                        timerInterval = setInterval(() => {
                            b.textContent = Swal.getTimerLeft();
                        }, 100);
                    },
                    willClose: () => {
                        clearInterval(timerInterval);
                    },
                }).then((result) => {
                    /* Read more about handling dismissals below */
                    if (result.dismiss === Swal.DismissReason.timer) {
                        history.push("/");
                    }
                });
            })
            .catch((err) => {
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    html: `<div class="text-normal text-center text-danger"> ${err} </div>`,
                });
            });
    };

    useEffect(() => {
        if (registerStep > 2) setregisterStep(2);
    }, [registerStep, dispatch]);

    const test = () => {
        dispatch(resendOTPMail(userRegister));
    };

    return (
        <div>
            {!authentication.isLoggin ? (
                <div className={`d-flex justify-content-center mt-5 ${ANIMATE_ZOOM_IN}`}>
                    <div className="col-lg-4 d-flex flex-column align-items-center welcome-container">
                        <img src={logo} alt="" className="welcome-container__logo " />
                        <p className="text-title mt-3">Đăng ký</p>
                        <CompetedStep numberStep={2} currentStep={registerStep} />

                        {/* authentication step 1 */}
                        {registerStep === 0 && (
                            <UserInfoRegister
                                registerFields={REGISTER_FIELDS}
                                userRegister={userRegister}
                                isEntitledGotoNextStep={isEntitledGotoNextStep_step1}
                            />
                        )}

                        {registerStep === 1 && (
                            <OTPCode
                                gotoPreviousStepOfRegister={gotoPreviousStepOfRegister}
                                isEntitledGotoNextStep={confirmOTPAndCompletedRegister}
                                resendOTP={test}
                            />
                        )}
                        {isLoading && <Loading />}
                    </div>
                </div>
            ) : (
                <div> {history.push("/not-found")} </div>
            )}
        </div>
    );
};

export default Register;
