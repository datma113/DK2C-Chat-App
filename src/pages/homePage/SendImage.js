import React from "react";

const SendImage = () => {
    const test = (e) => {
        console.log(e.target.file);
    };

    return (
        <label htmlFor="sendingFile">
            <i className="fas fa-paperclip"></i>
            <input
                className="d-none"
                type="file"
                id="sendingFile"
                name="image"
                accept="image/gif,image/jpeg,image/jpg,image/png"
                multiple=""
                data-original-title="upload photos"
                onChange={(e) => test(e)}
            />
        </label>
    );
};

export default SendImage;
