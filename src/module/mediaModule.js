import ModalImage from "react-modal-image";
import wordIcon from "../assets/image/wordIcon.svg";
import pdfIcon from "../assets/image/pdfIcon.png";
import exeIcon from "../assets/image/exeIcon.jfif";
import rarIcon from "../assets/image/rarIcon.png";
import txtIcon from "../assets/image/txtIcon.png";
import fileIcon from "../assets/image/fileIcon.jpg";

const mediaModule = (function () {
    const renderImage = (url) => {
        return (
            <ModalImage
                className="imgs-sending__imgs__media"
                small={url}
                large={url}
                showRotate={true}
                alt=""
            />
        );
    };

    const renderWordFile = () => (
        <img alt="" className="imgs-sending__imgs__media" src={wordIcon} />
    );
    const renderPDFFile = () => <img alt="" className="imgs-sending__imgs__media" src={pdfIcon} />;
    const renderExeFile = () => <img alt="" className="imgs-sending__imgs__media" src={exeIcon} />;
    const renderRarFile = () => <img alt="" className="imgs-sending__imgs__media" src={rarIcon} />;
    const renderTxtFile = () => <img alt="" className="imgs-sending__imgs__media" src={txtIcon} />;
    const renderUndefinedFile = () => (
        <img alt="" className="imgs-sending__imgs__media" src={fileIcon} />
    );
    return {
        renderImage: function (url) {
            return renderImage(url);
        },
        renderWordFile: function () {
            return renderWordFile();
        },
        renderPDFFile: function () {
            return renderPDFFile();
        },
        renderExeFile: function () {
            return renderExeFile();
        },
        renderRarFile: function () {
            return renderRarFile();
        },
        renderTxtFile: function () {
            return renderTxtFile();
        },
        renderUndefinedFile: function () {
            return renderUndefinedFile();
        },
    };
})();

export default mediaModule;
