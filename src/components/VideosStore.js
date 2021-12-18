import React, { useEffect, useState } from "react";
import { LOAD_MORE_VIDEOS, STORE_VIDEO } from "../redux/constants/constants";
import ModalVideo from "react-modal-video";
const VideosStore = ({ roomId, videos = [], loadMediaByType }) => {
    const TYPE_MEDIA_VIDEO = "VIDEO";
    const INITIAL_PAGE = 0;
    const [pageOfVideos, setpageOfVideos] = useState(INITIAL_PAGE);
    const [openVideo, setopenVideo] = useState([]);
    useEffect(() => {
        loadMediaByType(TYPE_MEDIA_VIDEO, STORE_VIDEO);

        setpageOfVideos(INITIAL_PAGE);
        setopenVideo(new Array(videos.length).fill(false));
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [ roomId, videos.length]);

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

    const videosMap = videos.map((video, index) => {
        const { url } = video;
        return (
            <div className="col-4 media-store__image " key={index}>
                <video
                    src={url}
                    className="media-store__image__modal-image"
                    muted
                    onClick={() => openVideoHandle(index)}
                ></video>
                <ModalVideo
                    channel="custom"
                    isOpen={openVideo[index]}
                    onClose={() => closeVideoHandle(index)}
                    url={url}
                    allowFullScreen
                />
            </div>
        );
    });

    const loadMoreVideos = () => {
        setpageOfVideos((pageOfVideos) => pageOfVideos + 1);
        loadMediaByType(TYPE_MEDIA_VIDEO, LOAD_MORE_VIDEOS, pageOfVideos);
    };

    return (
        <div className="media-store">
            <p className="media-store__title">Tất cả Video</p>
            <div className="row">
                {videosMap}
                {videos.length > 5 && (
                    <p className="text-center media-store__more" onClick={() => loadMoreVideos()}>
                        xem thêm
                    </p>
                )}
            </div>
        </div>
    );
};

export default VideosStore;
