import React from "react";
import { useDispatch, useSelector } from "react-redux";
import FilesStore from "./FilesStore";
import { getAllMediaByType } from "../redux/action/actInfoRoom";
import { createAction } from "../redux/constants/constants";

import ImagesStore from "./ImagesStore";
const MediaStore = ({ roomId }) => {
    const dispatch = useDispatch();
    const allMediaInStore = useSelector((state) => state.allMediaInStore);

    const loadMedia = (idOfRoom) => {
        return (typeMedia, typeDispatch, page = 0) => {
            getAllMediaByType(idOfRoom, typeMedia, page)
                .then((media) => dispatch(createAction(typeDispatch, media)))
                .catch(() => dispatch(createAction(typeDispatch, [])));
        };
    };

    const loadMediaByType = loadMedia(roomId);

    return (
        <div>
            <ImagesStore
                roomId={roomId}
                images={allMediaInStore.images}
                dispatch={dispatch}
                loadMediaByType={loadMediaByType}
            />
            <FilesStore
                roomId={roomId}
                files={allMediaInStore.files}
                dispatch={dispatch}
                loadMediaByType={loadMediaByType}
            />
        </div>
    );
};

export default MediaStore;
