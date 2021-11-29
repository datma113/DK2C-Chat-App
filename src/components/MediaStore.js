import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllMediaByType } from "../redux/action/actInfoRoom";
import {
    createAction,
    STORE_FILES,
    STORE_IMAGES,
    STORE_LINKS,
    STORE_VIDEO,
} from "../redux/constants/constants";

const MediaStore = ({ roomId }) => {
    const dispatch = useDispatch();
    const allMediaInStore = useSelector((state) => state.allMediaInStore);
    useEffect(() => {
        const typesMedia = {
            video: "VIDEO",
            image: "IMAGE",
            file: "FILE",
            link: "LINK",
        };
        getAllMediaByType(roomId, typesMedia.video)
            .then((video) => dispatch(createAction(STORE_VIDEO, video)))
            .catch(() => dispatch(createAction(STORE_VIDEO, [])));

        getAllMediaByType(roomId, typesMedia.file)
            .then((files) => dispatch(createAction(STORE_FILES, files)))
            .catch(() => dispatch(createAction(STORE_FILES, [])));

        getAllMediaByType(roomId, typesMedia.image)
            .then((images) => dispatch(createAction(STORE_IMAGES, images)))
            .catch(() => dispatch(createAction(STORE_IMAGES, [])));

        getAllMediaByType(roomId, typesMedia.link)
            .then((links) => dispatch(createAction(STORE_LINKS, links)))
            .catch(() => dispatch(createAction(STORE_LINKS, [])));
    }, [roomId, dispatch]);

    const imagesMap = allMediaInStore.images.map((image, index) => {
        console.log(image);
        return <img key={index} src="" alt="" />;
    });

    return (
        <div className="media-store">
            <p className="media-store__title">Tất cả ảnh</p>
            <div className="row"> {imagesMap} </div>
        </div>
    );
};

export default MediaStore;
