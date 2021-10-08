import React from "react";
import socketModule from "../../module/socketModule";
import { getURLOfFileWhenSended } from "../../redux/action/actHome";

const SendImage = ({roomId}) => {
    const handleSendImageEvent = (e) => {
        const IMAGES = e.target.files;
        const formData = new FormData();

        IMAGES.forEach((file) => {
            formData.append("files", file);
        });

        getURLOfFileWhenSended(formData).then((fileUrls) => {
            const TYPE_OF_MESSAGE = 'FILE'
            const REGEX_TYPE_IMAGE = /\.(gif|jpe?g|jpg|tiff?|png|webp|bmp)$/
            
            //socketModule.sendMessageToOneFriend(roomId, fileUrls, )
        });
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
