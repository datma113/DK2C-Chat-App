import React from "react";
import hahaIcon from "../assets/image/haha.png";
import angryIcon from "../assets/image/angry.png";
import sadIcon from "../assets/image/sad.png";
import likeIcon from "../assets/image/like.png";
import loveIcon from "../assets/image/love.png";
import wowIcon from "../assets/image/wow.png";

const CurrentReactionExpressed = ({ reactions = [] }) => {
    const checkReactions = (type) => {
        const REACTION = {
            HAHA: hahaIcon,
            SAD: sadIcon,
            ANGRY: angryIcon,
            LIKE: likeIcon,
            LOVE: loveIcon,
            WOW: wowIcon,
        };
        return REACTION[type] || [];
    };
    const isEmptyReaction = () => {
        return reactions.length ? "" : "d-none";
    };
    const limitReactions = (reactions) => {
        return reactions.length > 3 ? reactions.slice(0, 3) : reactions;
    };

    const REACTIONS_UNIQUE = [...new Set(reactions.map((reaction) => reaction.type))];

    const reactionsMap = limitReactions(REACTIONS_UNIQUE).map((reaction, index) => {
        return (
            <img
                key={index}
                src={checkReactions(reaction)}
                alt={reaction.type}
                className="image-expression"
            />
        );
    });
    return <div className={`current-reactions-expressed ${isEmptyReaction()}`}>{reactionsMap}</div>;
};

export default CurrentReactionExpressed;
