import React, { useState } from "react";
import ModalImage from "react-modal-image";
import ModalVideo from "react-modal-video";
import "react-modal-video/scss/modal-video.scss";

const AllMedia = ({ messageMedia = [] }) => {
    const lengthOfMedia = messageMedia.length;
    const divisibleBy = (dividend) => (divisor) => dividend % divisor === 0 ? true : false;
    const [isOpen, setisOpen] = useState(false);

    const renderDenpendOnCol = (col, media, index) => {
        const MEDIA_TYPE_VIDEO = "VIDEO";
        const MEDIA_TYPE_IMAGE = "IMAGE";

        switch (media.type) {
            case MEDIA_TYPE_IMAGE:
                return (
                    <div className={`col-${col} mt-2`} key={index}>
                        <ModalImage
                            className="media__img w-100"
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
                            src={media.url}
                            onClick={() => setisOpen(true)}
                            style={{ cursor: `pointer` }}
                        ></video>
                        <ModalVideo
                            channel="custom"
                            isOpen={isOpen}
                            onClose={() => setisOpen(false)}
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
