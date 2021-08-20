import React from "react";

const MyCustomButton = ({ label, typeButton }) => {

    const handleEventWhenClick = () => {
        console.log(`event`);
    };
    return (
        <div className={`btn btn-${typeButton} btn-welcome`} onClick={() => handleEventWhenClick()}>
            {label}
        </div>
    );
};

export default MyCustomButton;
