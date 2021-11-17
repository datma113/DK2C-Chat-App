import React from "react";

const AllMedia = ({ messageMedia = [] }) => {
    const lengthOfMedia = messageMedia.length;
    const divisibleBy = (dividend) => (divisor) => dividend % divisor === 0 ? true : false;

    const renderDenpendOnCol = (col, media, index) => {
        return (
            <div className={`col-${col} mt-2`} key={index}>
                <img src={media.url} className="media__img w-100" alt="" />
            </div>
        );
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
