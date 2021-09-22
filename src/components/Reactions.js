import React from "react";
import socketModule from "../module/socketModule";

const Reactions = ({ messageId, myId, roomId }) => {
    const REACTIONS_TYPE = [
        { type: "LIKE", className: "fas fa-thumbs-up  text-primary" },
        { type: "LOVE", className: " fas fa-heart text-danger " },
        { type: "HAHA", className: "fas fa-grin-squint-tears  text-light" },
        { type: "WOW", className: "fas fa-surprise text-warning" },
        { type: "SAD", className: "fas fa-sad-tear  text-light" },
        { type: "ANGRY", className: "fas fa-angry text-warning" },
    ];

    const expressReaction = (type) => {
        const REACTION = {
            roomId,
            messageId,
            type,
            userId: myId,
        };
        console.log(REACTION)
        socketModule.expressReaction(REACTION)

    };
    const reactionsMap = REACTIONS_TYPE.map((reaction, index) => {
        return (
            <i
                key={index}
                className={`${reaction.className} single-reaction-container__icon`}
                onClick={() => {
                    expressReaction(reaction.type);
                }}
            ></i>
        );
    });
    return <div className="single-reaction-container">{reactionsMap}</div>;
};

export default Reactions;
