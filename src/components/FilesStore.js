import React, { useEffect } from "react";
import { getAllMediaByType } from "../redux/action/actInfoRoom";
import { createAction, STORE_IMAGES } from "../redux/constants/constants";
const FilesStore = ({ dispatch, roomId, files = [] }) => {
    useEffect(() => {
        const TYPE_MEDIA_FILE = "FILE";

    }, [roomId, dispatch]);

    const filesMap = files.map((file, index) => {
        const { url } = file;
        return <div className="col-4 media-store__image" key={index}></div>;
    });
    return <div></div>;
};

export default FilesStore;
