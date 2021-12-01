import React, { useEffect, useState } from "react";
import { LOAD_MORE_FILES, STORE_FILES } from "../redux/constants/constants";
import wordIcon from "../assets/image/wordIcon.svg";
import pdfIcon from "../assets/image/pdfIcon.png";
import exeIcon from "../assets/image/exeIcon.jfif";
import rarIcon from "../assets/image/rarIcon.png";
import txtIcon from "../assets/image/txtIcon.png";
import fileIcon from "../assets/image/fileIcon.jpg";

const FilesStore = ({ roomId, files = [], loadMediaByType }) => {
    const TYPE_MEDIA_FILE = "FILE";
    const INITIAL_PAGE = 0;

    const [pageOfFiles, setpageOfFiles] = useState(INITIAL_PAGE);
    useEffect(() => {
        loadMediaByType(TYPE_MEDIA_FILE, STORE_FILES);
        setpageOfFiles(INITIAL_PAGE);
    }, [roomId]);

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

    const pairProcessor = [
        [(name) => isWordFile(name), wordIcon],
        [(name) => isPDFFile(name), pdfIcon],
        [(name) => isExeFile(name), exeIcon],
        [(name) => isRarFile(name), rarIcon],
        [(name) => isTxtFile(name), txtIcon],
    ];

    const renderFile = (url, index) => {
        return (type) => {
            return (
                <a className="row mt-2" key={index} href={url} target="_blank" rel="noreferrer">
                    <div className="col-2">
                        <img src={type} alt="" className="w-100 h-100" />
                    </div>
                    <div className="col-10 text-small">{url}</div>
                </a>
            );
        };
    };

    const filesMap = files.map((file, index) => {
        const { url } = file;
        const renderFileBy = renderFile(url, index);

        for (const [checkTypeOfMedia, type] of pairProcessor) {
            if (checkTypeOfMedia(url)) return renderFileBy(type);
        }
        return renderFileBy(fileIcon);
    });

    const loadMoreFiles = () => {
        setpageOfFiles((pageOfFiles) => pageOfFiles + 1);
        loadMediaByType(TYPE_MEDIA_FILE, LOAD_MORE_FILES, pageOfFiles);
    };

    return (
        <div className="media-store">
            <p className="media-store__title">Tất cả File</p>
            {filesMap}
            {files.length > 5 && (
                <p className="text-center media-store__more" onClick={() => loadMoreFiles()}>
                    xem thêm
                </p>
            )}
        </div>
    );
};

export default FilesStore;
