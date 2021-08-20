import React from "react";
import AuthService from "../services/AuthService";
const MyCustomButton = ({ label, typeButton, data }) => {

    const handleEventWhenClick = (user) => {
        console.log(user)
        AuthService.login(user)
    };

    return (
        <div className={`btn btn-${typeButton} btn-welcome`} onClick={() => handleEventWhenClick(data)}>
            {label}
        </div>
    );
};

export default MyCustomButton;
