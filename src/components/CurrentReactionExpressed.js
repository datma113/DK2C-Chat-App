import React from "react";

const CurrentReactionExpressed = ({ reactions = [] }) => {
    const checkReactions = (type) => {
        const REACTION = {
            HAHA: "far fa-grin-squint text-warning",
            SAD: "fas fa-sad-tear ",
            ANGRY: "fas fa-angry text-warning",
            LIKE: "fas fa-thumbs-up  text-primary",
            LOVE: "fas fa-heart text-danger ",
            WOW: "fas fa-surprise text-warning",
        };
        return REACTION[type] || [];
    };

    const isEmptyReaction = () => {
        return reactions.length ? "" : "d-none";
    };

    const limitReactions = (reactions) => {
        return reactions.length > 3 ? reactions.slice(0, 3) : reactions
    }

    const REACTIONS_UNIQUE = [...new Set(reactions.map((reaction) => reaction.type))];

    const reactionsMap = limitReactions(REACTIONS_UNIQUE).map((reaction, index) => {
        return (
            <i key={index} className={checkReactions(reaction)}>
                {" "}
            </i>
        );
    });
    return <div className={`current-reactions-expressed ${isEmptyReaction()}`}>{reactionsMap}</div>;
};

export default CurrentReactionExpressed;
