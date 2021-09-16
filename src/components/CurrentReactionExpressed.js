import React from "react";

const CurrentReactionExpressed = ({ reactions = [] }) => {
    const checkReactions = (type) => {
        const REACTION = {
            HAHA: "far fa-grin-squint text-warning",
            SAD: "fas fa-thumbs-up  text-primary",
            DISLIKE: "fas fa-thumbs-down  text-ligh",
            LIKE: "fas fa-thumbs-down  text-ligh",
            LOVE: "fas fa-heart text-danger",
            WOW: "fas fa-angry text-warning",
        };
        return REACTION[type] || [];
    };

    const isEmptyReaction = () => {
        return reactions.length ? "" : "d-none";
    };
    
    const REACTIONS_UNIQUE = [...new Set(reactions)];

    console.log(REACTIONS_UNIQUE)

    const reactionsMap = reactions.map((reaction, index) => {
        return <i className={checkReactions(reaction.type)}> </i>;
    });
    return <div className={`current-reactions-expressed ${isEmptyReaction()}`}>{reactionsMap}</div>;
};

export default CurrentReactionExpressed;
