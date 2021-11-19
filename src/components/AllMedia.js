import React, { useEffect, useState } from "react";
import ModalImage from "react-modal-image";
import ModalVideo from "react-modal-video";
import "react-modal-video/scss/modal-video.scss";

const AllMedia = ({ messageMedia = [] }) => {
    const lengthOfMedia = messageMedia.length;
    const divisibleBy = (dividend) => (divisor) => dividend % divisor === 0 ? true : false;
    const [openVideo, setopenVideo] = useState([]);

    useEffect(() => {
        setopenVideo(new Array(messageMedia.length).fill(false));
    }, [messageMedia]);

    const openVideoHandle = (index) => {
        let openVideoClone = [...openVideo];
        openVideoClone[index] = true;
        setopenVideo(openVideoClone);
    };

    const closeVideoHandle = (index) => {
        let openVideoClone = [...openVideo];
        openVideoClone[index] = false;
        setopenVideo(openVideoClone);
    };

    const renderDenpendOnCol = (col, media, index) => {
        const MEDIA_TYPE_VIDEO = "VIDEO";
        const MEDIA_TYPE_IMAGE = "IMAGE";

        switch (media.type) {
            case MEDIA_TYPE_IMAGE:
                return (
                    <div className={`col-${col} mt-2`} key={index}>
                        <ModalImage
                            className="media__img w-100 h-100"
                            small={media.url}
                            large={media.url}
                            showRotate={true}
                            alt=""
                        />
                    </div>
                );
            case MEDIA_TYPE_VIDEO:
                return (
                    <div className={`col-${col} mt-2`} key={index}>
                        <video
                            className="media__img w-100"
                            src={media.url}
                            onClick={() => {
                                openVideoHandle(index);
                            }}
                            style={{ cursor: `pointer` }}
                            autoPlay
                            loop
                            muted
                        ></video>
                        <ModalVideo
                            channel="custom"
                            isOpen={openVideo[index]}
                            onClose={() => closeVideoHandle(index)}
                            url={media.url}
                            allowFullScreen
                        />
                    </div>
                );
            default:
                return <p key={index}> file </p>;
        }
    };

    const allMediaMap = messageMedia.map((media, index) => {
        const divideMediaBy = divisibleBy(lengthOfMedia);

        if (divideMediaBy(3) || lengthOfMedia > 4) return renderDenpendOnCol(4, media, index);
        if (divideMediaBy(2)) return renderDenpendOnCol(6, media, index);
        return renderDenpendOnCol(12, media, index);
    });

    return <div className="row media">{allMediaMap}</div>;
};

export default AllMedia;
