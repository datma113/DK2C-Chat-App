import { RecaptchaVerifier, signInWithPhoneNumber } from "@firebase/auth";
import React, { useEffect, useState } from "react";
import OtpInput from "react-otp-input";
import Swal from "sweetalert2";
import { auth } from "../../firebase";
import { verifyWithPhone } from "../../redux/action/actRegister";

const VerifySMSOTP = ({ userRegister = [], dispatch, setregisterStep, history }) => {
    const [isShowGetOtpBtn, setisShowGetOtpBtn] = useState(false);
    const [isShowVerifyBtn, setisShowVerifyBtn] = useState(false);
    const [otp, setotp] = useState("");

    useEffect(() => {
        window.recaptchaVerifier = new RecaptchaVerifier(
            "recaptcha-container",
            {
                size: "normal",
                callback: (response) => {
                    // reCAPTCHA solved, allow signInWithPhoneNumber.
                    // ...
                    setisShowGetOtpBtn(true);
                },
                "expired-callback": () => {
                    // Response expired. Ask user to solve reCAPTCHA again.
                    // ...
                    setisShowGetOtpBtn(false);
                },
            },
            auth
        );
        window.recaptchaVerifier.render().then((widgetId) => {
            window.recaptchaWidgetId = widgetId;
        });
    }, []);

    const showGetOtpBtn = () => (isShowGetOtpBtn ? "" : "d-none");

    const sendOTPSMS = () => {
        const phoneNumber =
            "+84" + userRegister.phoneNumber.slice(1, userRegister.phoneNumber.length);
        const appVerifier = window.recaptchaVerifier;

        signInWithPhoneNumber(auth, phoneNumber, appVerifier)
            .then((confirmationResult) => {
                // SMS sent. Prompt user to type the code from the message, then sign the
                // user in with confirmationResult.confirm(code).
                window.confirmationResult = confirmationResult;
                // ...
                setisShowVerifyBtn(true);
            })
            .catch((error) => {
                // Error; SMS not sent
                // ...
                setisShowVerifyBtn(false);
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    html: `
                    <div class="text-normal text-center text-danger"> Số điện thoại không hợp lệ!
                    <br /> Vui lòng thử lại.
                     </div>
                    `,
                });
            });
    };

    const verifySMSHandle = () => {
        try {
            window.confirmationResult
                .confirm(otp)
                .then((result) => {
                    dispatch(verifyWithPhone(userRegister))
                        .then(() => {
                            let timerInterval;
                            Swal.fire({
                                title: "Đăng ký thành công!",
                                html: "Tự động trở lại sau <b></b> giây.",
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
                                if (result.dismiss === Swal.DismissReason.timer) {
                                    history.push("/");
                                }
                            });
                        })
                        .catch(() => {
                            Swal.fire({
                                icon: "error",
                                title: "Oops...",
                                html: `
                        <div class="text-normal text-center text-danger"> Có lỗi xãy ra!
                        <br /> Vui lòng thử lại
                         </div>
                        `,
                            });
                        });
                })
                .catch((error) => {
                    console.log(`error`);
                });
        } catch (error) {
            window.alert(" kết nối không ổn định. vui lòng thử lại sau! ");
        }
    };

    return (
        <div className="center flex-column">
            <div id="recaptcha-container"></div>

            <button
                type="button"
                className={`btn-welcome btn btn-primary ${showGetOtpBtn()} mt-2`}
                onClick={() => sendOTPSMS()}
            >
                Gữi OTP
            </button>
            {isShowVerifyBtn && (
                <>
                    <p className="text-center text-small">
                        Chúng tôi đã gữi mã OTP đến Số điện thoại của bạn.
                    </p>
                    <p className="text-danger">vui lòng nhập otp để đăng ký!</p>
                    <OtpInput
                        isInputNum={true}
                        value={otp}
                        onChange={setotp}
                        numInputs={6}
                        separator={<span> &nbsp;&nbsp; </span>}
                    />
                    <button
                        type="button"
                        className="btn-welcome btn btn-primary mt-2"
                        onClick={() => verifySMSHandle()}
                    >
                        Xác thực
                    </button>
                </>
            )}
            <button
                type="button"
                className="btn btn-welcome btn-outline-secondary mt-3"
                onClick={() => {
                    setregisterStep(0);
                }}
            >
                Quay lại
            </button>
        </div>
    );
};

export default VerifySMSOTP;
