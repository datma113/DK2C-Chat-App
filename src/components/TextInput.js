import React from "react";

const TextInput = ({ idOfInput, labelOfInput, type }) => {
    return (
        <div className="input-container mb-5">
            <input
                type={type}
                className="w-100 input-container__input text-center"
                placeholder=" "
                id={idOfInput}
                autoComplete="off"
            />
            <label htmlFor={idOfInput} className="input-container__label">
                {labelOfInput}
            </label>
        </div>
    );
};

export default TextInput;
