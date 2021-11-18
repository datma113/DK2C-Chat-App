import ModalImage from "react-modal-image";
import wordIcon from "../assets/image/wordIcon.svg";
import pdfIcon from "../assets/image/pdfIcon.png";
import exeIcon from "../assets/image/exeIcon.jfif";

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
    };
})();

export default mediaModule;
