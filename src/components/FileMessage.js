import React from "react";

const FileMessage = ({ iconUrl, fileName, urlFile }) => {
    const limitedString = (string = "") => {
        const MAXIMUM_LENGTH = 50;
        return string.length > MAXIMUM_LENGTH ? string.slice(0, MAXIMUM_LENGTH) + "..." : string;
    };
    return (
        <div className="col-12 media-message">
            <div className="row">
                <div className="col-3 center ">
                    <img src={iconUrl} className="media-message__img" alt="" />
                </div>
                <div className="col-7 center">
                    <p className="w-100 text-small">{limitedString(fileName)}</p>
                </div>
                <a
                    className="col-2 center media-message__download"
                    href={urlFile}
                    rel="noreferrer"
                    target="_blank"
                >
                    <i className="fas fa-download"></i>
                </a>
            </div>
        </div>
    );
};

export default FileMessage;
