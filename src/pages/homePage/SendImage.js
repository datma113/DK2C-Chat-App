import React from "react";
import { useDispatch } from "react-redux";
import { createAction, STORE_IMAGES_SENDING } from "../../redux/constants/constants";

const SendImage = () => {
    const dispatch = useDispatch()
    const handleSendImageEvent = (e) => {
        const images = e.target.files;

        dispatch(createAction(STORE_IMAGES_SENDING, images))
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
