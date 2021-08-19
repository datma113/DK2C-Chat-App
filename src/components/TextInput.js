import React, { useState } from "react";

const TextInput = ({ id, label, type, checkRegex, regexPattern }) => {
    const [messageOfRegex, setmessageOfRegex] = useState("");

    const isShowMessageOfRegex = (message) => {
        return message.length === 0 ? "d-none" : "";
    };

    return (
        <div className="input-container mb-5">
            <input
                type={type}
                className="w-100 input-container__input text-center"
                placeholder=" "
                id={id}
                autoComplete="off"
                onChange={(e) => {
                    setmessageOfRegex(checkRegex(e.target.value, regexPattern));
                }}
            />
            <label htmlFor={id} className="input-container__label">
                {label}
            </label>
            <p className={`text-danger ${isShowMessageOfRegex(messageOfRegex)}`}>
                {" "}
                {messageOfRegex}{" "}
            </p>
        </div>
    );
};

export default TextInput;
