import React from "react";
import { useHistory } from "react-router-dom";
import PropTypes from "prop-types";
const MyCustomButton = ({
    label,
    typeButton,
    iconClass,
    isGoBackHistory,
    isEntitledGotoNextStep,
    gotoPreviousStepOfRegister,
    login,
    getOtp,
    disabled,
}) => {
    const history = useHistory();

    const checkGoBackHistory = (isGoBack) => {
        return isGoBack ? history.goBack() : null;
    };

    const changeStepWhenTriggered = async () => {
        if (isEntitledGotoNextStep) {
            isEntitledGotoNextStep();
        }

        if (gotoPreviousStepOfRegister) gotoPreviousStepOfRegister();

        
    };
    
    const triggeredLogin = () => {
        if( login ) login();
    }


    const triggeredGetOtp = () => {
        if (getOtp) getOtp();
    }

    return (
        <div
            className={`btn btn-${typeButton} mb-3 btn-welcome ${disabled}`}
            onClick={() => {
                checkGoBackHistory(isGoBackHistory);
                changeStepWhenTriggered();
                triggeredLogin();
                triggeredGetOtp();
                
            }}
        >
            <i className={`${iconClass} btn-welcome__icon`}></i>
            {label}
        </div>
    );
};

export default MyCustomButton;

MyCustomButton.propTypes = {
    label: PropTypes.string,
    typeButton: PropTypes.string,
    iconClass: PropTypes.string,
    isGoBackHistory: PropTypes.bool,
    isEntitledGotoNextStep: PropTypes.func,
    gotoPreviousStepOfRegister: PropTypes.func,
    login: PropTypes.func,
    getOtp: PropTypes.func,
};
