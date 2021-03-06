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
                    <div class="text-normal text-center text-danger"> S??? ??i???n tho???i kh??ng h???p l???!
                    <br /> Vui l??ng th??? l???i.
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
                                title: "????ng k?? th??nh c??ng!",
                                html: "T??? ?????ng tr??? l???i sau <b></b> gi??y.",
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
                        <div class="text-normal text-center text-danger"> C?? l???i x??y ra!
                        <br /> Vui l??ng th??? l???i
                         </div>
                        `,
                            });
                        });
                })
                .catch((error) => {
                    console.log(`error`);
                });
        } catch (error) {
            window.alert(" k???t n???i kh??ng ???n ?????nh. vui l??ng th??? l???i sau! ");
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
                G???i OTP
            </button>
            {isShowVerifyBtn && (
                <>
                    <p className="text-center text-small">
                        Ch??ng t??i ???? g???i m?? OTP ?????n S??? ??i???n tho???i c???a b???n.
                    </p>
                    <p className="text-danger">vui l??ng nh???p otp ????? ????ng k??!</p>
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
                        X??c th???c
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
                Quay l???i
            </button>
        </div>
    );
};

export default VerifySMSOTP;
