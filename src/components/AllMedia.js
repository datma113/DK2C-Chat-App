import React, { useEffect, useState } from "react";
import ModalImage from "react-modal-image";
import ModalVideo from "react-modal-video";
import "react-modal-video/scss/modal-video.scss";
import FileMessage from "./FileMessage";
import wordIcon from "../assets/image/wordIcon.svg";
import pdfIcon from "../assets/image/pdfIcon.png";
import exeIcon from "../assets/image/exeIcon.jfif";
import rarIcon from "../assets/image/rarIcon.png";
import txtIcon from "../assets/image/txtIcon.png";
import fileIcon from "../assets/image/fileIcon.jpg";

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

    const typeOfMedia = {
        word: ["doc", "docx"],
        pdf: ".pdf",
        rar: ".rar",
        txt: ".txt",
        exe: ".exe",
    };

    const isWordFile = (name) => name.includes(typeOfMedia.word[0] || typeOfMedia.word[1]);
    const isPDFFile = (name) => name.includes(typeOfMedia.pdf);
    const isExeFile = (name) => name.includes(typeOfMedia.exe);
    const isRarFile = (name) => name.includes(typeOfMedia.rar);
    const isTxtFile = (name) => name.includes(typeOfMedia.txt);

    const renderMediaMessage = (fileName, urlFile, index) => {
        return (iconUrl) => {
            return (
                <div key={index} style={{ width: `45rem` }}>
                    <FileMessage iconUrl={iconUrl} fileName={fileName} urlFile={urlFile} />
                </div>
            );
        };
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
                const nameFile = media.name;
                const { url } = media;
                const iconClasses = {
                    word: wordIcon,
                    pdf: pdfIcon,
                    txt: txtIcon,
                    file: fileIcon,
                    rar: rarIcon,
                    exe: exeIcon,
                };
                const renderMediaMessageWith = renderMediaMessage(nameFile, url, index);

                if (isWordFile(nameFile)) return renderMediaMessageWith(iconClasses.word);
                if (isPDFFile(nameFile)) return renderMediaMessageWith(iconClasses.pdf);
                if (isRarFile(nameFile)) return renderMediaMessageWith(iconClasses.rar);
                if (isExeFile(nameFile)) return renderMediaMessageWith(iconClasses.exe);
                if (isTxtFile(nameFile)) return renderMediaMessageWith(iconClasses.txt);
                return renderMediaMessageWith(iconClasses.file);
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
