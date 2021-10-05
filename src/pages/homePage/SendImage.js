import React from "react";

const SendImage = () => {
    const handleSendImageEvent = (e) => {
         const IMAGES = e.target.files
        console.log(e.target.files);
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
                multiple
                data-original-title="upload photos"
                onChange={(e) => handleSendImageEvent(e)}
            />
        </label>
    );
};

export default SendImage;
