import ModalImage from "react-modal-image";

const mediaModule = (function () {
    const renderImage = (url) => {
       console.log(url);
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

    const renderFile = (url) => {
       
    };

    return {
        renderImage: function (url) {
            return renderImage(url);
        },
        renderFile: function (url) {
            return renderFile(url);
        },
    };
})();

export default mediaModule;
