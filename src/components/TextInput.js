import React, { useState } from "react";
import { useDispatch } from "react-redux";
import PropTypes from "prop-types";

const TextInput = ({
    id,
    label,
    type,
    checkRegex,
    regexPattern,
    functionToDispatch,
    keyStoreToReducer,
    initialValue,
}) => {
    const dispatch = useDispatch();
    const [messageOfRegex, setmessageOfRegex] = useState("");

    const isShowMessageOfRegex = (message) => {
        return message.length === 0 ? "d-none" : "";
    };

    const changeMessageStateWhenTriggered = (valueOfInput) => {
        if (checkRegex) setmessageOfRegex(checkRegex(valueOfInput, regexPattern));
        else setmessageOfRegex("");
    };

    const dispatchUserInput = (valueOfInput) => {
        if (functionToDispatch) dispatch(functionToDispatch(keyStoreToReducer, valueOfInput));
    };

    return (
        <div className="input-container mb-5">
            <input
                type={type}
                className="w-100 input-container__input text-center"
                placeholder=" "
                id={id}
                defaultValue={initialValue}
                autoComplete="off"
                onChange={(e) => {
                    dispatchUserInput(e.target.value);
                }}
                onBlur={(e) => changeMessageStateWhenTriggered(e.target.value)}
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

TextInput.propTypes = {
    id: PropTypes.number,
    label: PropTypes.string,
    type: PropTypes.string,
    checkRegex: PropTypes.func,
    regexPattern: PropTypes.any,
    functionToDispatch: PropTypes.func,
    keyStoreToReducer: PropTypes.string,
    initialValue: PropTypes.string
};
