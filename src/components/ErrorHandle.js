import React from "react";
import PropTypes from "prop-types";

const ErrorHandle = ({ message }) => {
    const hasError = () => {
        return message ? "" : "d-none";
    };
    return (
        <div className={`alert alert-danger err-message text-center  ${hasError()}`}>
            <i className="fas fa-exclamation-triangle"></i>

            <p className="text-small"> {message}</p>
        </div>
    );
};

export default ErrorHandle;

ErrorHandle.propTypes = {
    message: PropTypes.string,
};
