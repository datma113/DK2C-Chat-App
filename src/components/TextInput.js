import React, { useState } from "react";
import { useDispatch } from "react-redux";

const TextInput = ({
    id,
    label,
    type,
    checkRegex,
    regexPattern,
    functionToDispatch,
    keyStoreToReducer,
}) => {
    const dispatch = useDispatch();
    const [messageOfRegex, setmessageOfRegex] = useState("");

    const isShowMessageOfRegex = (message) => {
        return message.length === 0 ? "d-none" : "";
    };

    /**
     * This function can catch an undefined function pass as props
     */
    const isValidationOfCheckRegexProp = (valueOfInput) => {
        const IS_VALID = typeof checkRegex(valueOfInput, regexPattern);
        return IS_VALID === "string" ? true : false;
    };

    const changeStateWhenTriggered = (valueOfInput) => {
        if (isValidationOfCheckRegexProp(valueOfInput))
            setmessageOfRegex(checkRegex(valueOfInput, regexPattern));
        else setmessageOfRegex("");
    };

    const dispatchUserLoginToStore = (valueOfInput) => {
        if (functionToDispatch !== undefined)
            dispatch(functionToDispatch(keyStoreToReducer, valueOfInput));
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
                    changeStateWhenTriggered(e.target.value);
                    dispatchUserLoginToStore(e.target.value);
                }}
            />
            <label htmlFor={id} className="input-container__label">
                {label}
            </label>
            <p
                className={`text-danger text-message-danger ${isShowMessageOfRegex(
                    messageOfRegex
                )}`}
            >
                {" "}
                {messageOfRegex}{" "}
            </p>
        </div>
    );
};

export default TextInput;
