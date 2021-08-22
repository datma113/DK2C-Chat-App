import React, { useState } from "react";
import OtpInput from "react-otp-input";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import MyCustomButton from "../../components/MyCustomButton";
import { registerUserAccountStep3 } from "../../redux/action/actRegister";

const OTPCode = ({gotoPreviousStepOfRegister}) => {
    const [otp, setotp] = useState("");
    const userRegister = useSelector(state => state.userRegister)
    const history = useHistory()
    
    const isEntitledGotoNextStep = () => {
         const user = {
              email: userRegister.email,
              verificationCode: otp
         }
       

          registerUserAccountStep3(user)
          .then(() => {
               window.alert(` đăng ký thành công `)
               history.push("/welcome")
          })
          .catch(() => {
               console.log(`dk thất bại`)
          })
    }
    return (
        <div>
            <div className="mb-5 d-flex justify-content-center">
                <OtpInput
                    isInputNum={true}
                    value={otp}
                    onChange={setotp}
                    numInputs={6}
                    separator={<span> &nbsp;&nbsp; </span>}
                />
            </div>

            <MyCustomButton label="xác thực" typeButton="secondary" 
             isEntitledGotoNextStep={isEntitledGotoNextStep}
            
            />
            <MyCustomButton
                label="gữi lại OTP"
                typeButton="light"
                iconClass="fas fa-sync-alt"           
            />
            <MyCustomButton
                label="chọn email khác"
                typeButton="light"
                iconClass="fas fa-long-arrow-alt-left"
                gotoPreviousStepOfRegister={gotoPreviousStepOfRegister}
            />
        </div>
    );
};

export default OTPCode;
