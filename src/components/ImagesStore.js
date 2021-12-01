import React, { useEffect, useState } from "react";
import ModalImage from "react-modal-image";
import { LOAD_MORE_IMAGES, STORE_IMAGES } from "../redux/constants/constants";

const ImagesStore = ({ roomId, images = [], loadMediaByType }) => {
    const TYPE_MEDIA_IMAGE = "IMAGE";
    const INITIAL_PAGE = 0;

    const [pageOfImages, setpageOfImages] = useState(INITIAL_PAGE);

    useEffect(() => {
        loadMediaByType(TYPE_MEDIA_IMAGE, STORE_IMAGES);
        setpageOfImages(INITIAL_PAGE);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [roomId]);

    const imagesMap = images.map((image, index) => {
        const { url } = image;
        return (
            <div className="col-4 media-store__image" key={index}>
                <ModalImage
                    className="media-store__image__modal-image"
                    small={url}
                    large={url}
                    showRotate={true}
                    alt=""
                />
            </div>
        );
    });

    const loadMoreImages = () => {
        setpageOfImages((pageOfImages) => pageOfImages + 1);
        loadMediaByType(TYPE_MEDIA_IMAGE, LOAD_MORE_IMAGES, pageOfImages);
    };

    return (
        <div className="media-store">
            <p className="media-store__title">Tất cả ảnh</p>
            <div className="row">
                {imagesMap}
                {images.length > 5 && (
                    <p className="text-center media-store__more" onClick={() => loadMoreImages()}>
                        xem thêm
                    </p>
                )}
            </div>
        </div>
    );
};

export default ImagesStore;
