import ModalImage from "react-modal-image";
import wordIcon from '../assets/image/wordIcon.svg'
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

    const renderWordFile = () => {
          return <img alt="" className="imgs-sending__imgs__media" src={wordIcon} />  
    };

    return {
        renderImage: function (url) {
            return renderImage(url);
        },
        renderWordFile: function () {
            return renderWordFile();
        },
    };
})();

export default mediaModule;
