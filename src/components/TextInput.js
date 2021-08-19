import React, { useState } from "react";

const TextInput = ({ id, label, type, checkRegex, regexPattern }) => {
    const [messageOfRegex, setmessageOfRegex] = useState("");

    const isShowMessageOfRegex = (message) => {
        return message.length === 0 ? "d-none" : "";
    };

    const isValidationOfCheckRegexProp = (valueOfInput) => {
        const IS_VALID = typeof checkRegex(valueOfInput, regexPattern)
        return IS_VALID === "string" ? true : false
    }

    const changeStateWhenTriggered = (valueOfInput) => {
        if(isValidationOfCheckRegexProp(valueOfInput))
            setmessageOfRegex(checkRegex(valueOfInput, regexPattern));
        else setmessageOfRegex("")
    }

    return (
        <div className="input-container mb-5">
            <input
                type={type}
                className="w-100 input-container__input text-center"
                placeholder=" "
                id={id}
                autoComplete="off"
                onChange={(e) => {
                    changeStateWhenTriggered(e.target.value)
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
