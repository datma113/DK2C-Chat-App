import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useHistory } from "react-router";
import logo from "../../assets/image/LOGO.png";
import CompetedStep from "../../components/CompetedStep";
import SmsUserInfo from "./SmsUserInfo";
import VerifySMSOTP from "./VerifySMSOTP";

const SmsRegister = () => {
    const history = useHistory();
    const dispatch = useDispatch();
    const authentication = useSelector((state) => state.authentication);
    const [registerStep, setregisterStep] = useState(0);
    const userRegister = useSelector((state) => state.userRegister);
    const message = useSelector((state) => state.message);

    return (
        <div>
            {!authentication.isLoggin ? (
                <div className={`d-flex justify-content-center mt-5`}>
                    <div className="col-lg-4 d-flex flex-column align-items-center welcome-container">
                        <img src={logo} alt="" className="welcome-container__logo " />
                        <p className="text-title text-large mt-3 text-center">
                            Đăng ký bằng Số điện thoại
                        </p>
                        <CompetedStep numberStep={2} currentStep={registerStep} />

                        {registerStep === 0 && (
                            <SmsUserInfo
                                userRegister={userRegister}
                                history={history}
                                dispatch={dispatch}
                                setregisterStep={setregisterStep}
                                message={message}
                            />
                        )}
                        {registerStep === 1 && (
                            <VerifySMSOTP
                                history={history}
                                userRegister={userRegister}
                                dispatch={dispatch}
                                setregisterStep={setregisterStep}
                            />
                        )}
                    </div>
                </div>
            ) : (
                <div> {history.push("/not-found")} </div>
            )}
        </div>
    );
};

export default SmsRegister;
