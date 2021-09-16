import React from "react";

const Reactions = () => {
    const REACTIONS_TYPE = [
        { type: "HAHA", className: "far fa-grin-squint text-warning" },
        { type: "SAD", className: "fas fa-thumbs-up  text-primary" },
        { type: "DISLIKE", className: "fas fa-thumbs-down  text-light" },
        { type: "LIKE", className: "fas fa-sad-tear  text-light" },
        { type: "LOVE", className: "fas fa-heart text-danger" },
        { type: "WOW", className: "fas fa-angry text-warning" },
    ];

    const reactionsMap = REACTIONS_TYPE.map((reaction, index) => {
        return <i className={`${reaction.className} single-reaction-container__icon`}></i>;
    });
    return <div className="single-reaction-container">{reactionsMap}</div>;
};

export default Reactions;
