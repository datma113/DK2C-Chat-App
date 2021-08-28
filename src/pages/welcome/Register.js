import React, { useEffect } from "react";
import logo from "../../assets/image/LOGO.png";
import { ANIMATE_ZOOM_IN } from "../../animate";
import { useState } from "react";
import CompetedStep from "../../components/CompetedStep";
import VerifyEmail from "./VerifyEmail";
import {
    registerUserAccountInitialStep,
    registerUserAccountInitialStepRedo,
    storeUserInfoWhenDoneARegisterStep,
    registerUserAccountVerifyEmailStep,
    clearUserInfoWhenDoneRegister,
    registerUserAccountVerifyOtpStep,
} from "../../redux/action/actRegister";
import { useDispatch, useSelector } from "react-redux";
import OTPCode from "./OTPCode";
import Loading from "../../components/Loading";
import UserInfoRegister from "./UserInfoRegister";
import { useHistory } from "react-router-dom";
import { CLEAR_MESSAGE_FROM_SERVER } from "../../redux/constants/constants";
import Swal from "sweetalert2";

const Register = () => {
    const dispatch = useDispatch();
    const userRegister = useSelector((state) => state.userRegister);
    const [registerStep, setregisterStep] = useState(0);
    const [isLoading, setisLoading] = useState(false);
    const history = useHistory();

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

    const isEntitledGotoNextStep_step1 = () => {
        setisLoading(true);
        if (!userRegister.id) {
            dispatch(registerUserAccountInitialStep(userRegister))
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
        } else {
            dispatch(registerUserAccountInitialStepRedo(userRegister))
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
        }
    };

    const isEntitledGotoNextStep_step2 = () => {
        setisLoading(true);

        dispatch(registerUserAccountVerifyEmailStep(userRegister))
            .then(() => {
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
    };

    const isEntitledGotoNextStep_step3 = () => {
        const user = {
            email: userRegister.email,
            verificationCode: userRegister.verificationCode,
        };
        dispatch(registerUserAccountVerifyOtpStep(user))
            .then(() => {
                dispatch(clearUserInfoWhenDoneRegister());
                Swal.fire({
                    icon: "success",
                    title: "Congratulation!",
                    html: `<div class="text-normal text-center text-danger"> Đăng ký thành công! </div>`,
                });
                history.push("/welcome");
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
        dispatch({
            type: CLEAR_MESSAGE_FROM_SERVER,
        });
        if (registerStep > 2) setregisterStep(2);
    }, [registerStep, dispatch]);

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
                        isEntitledGotoNextStep={isEntitledGotoNextStep_step1}
                    />
                )}

                {registerStep === 1 && (
                    <VerifyEmail
                        gotoPreviousStepOfRegister={gotoPreviousStepOfRegister}
                        gotoNextStepOfRegister={gotoNextStepOfRegister}
                        isEntitledGotoNextStep={isEntitledGotoNextStep_step2}
                    />
                )}
                {registerStep === 2 && (
                    <OTPCode
                        gotoPreviousStepOfRegister={gotoPreviousStepOfRegister}
                        isEntitledGotoNextStep={isEntitledGotoNextStep_step3}
                        resendOTP={isEntitledGotoNextStep_step2}
                    />
                )}
                {isLoading && <Loading />}
            </div>
        </div>
    );
};

export default Register;
