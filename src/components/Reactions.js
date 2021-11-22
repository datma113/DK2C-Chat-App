import React from "react";
import socketModule from "../module/socketModule";
import hahaIcon from "../assets/image/haha.png";
import angryIcon from "../assets/image/angry.png";
import sadIcon from "../assets/image/sad.png";
import likeIcon from "../assets/image/like.png";
import loveIcon from "../assets/image/love.png";
import wowIcon from "../assets/image/wow.png";
const Reactions = ({ messageId, myId, roomId }) => {
    const REACTIONS_TYPE = [
        { type: "LIKE", icon: likeIcon },
        { type: "LOVE", icon: loveIcon },
        { type: "HAHA", icon: hahaIcon },
        { type: "WOW", icon: wowIcon },
        { type: "SAD", icon: sadIcon },
        { type: "ANGRY", icon: angryIcon },
    ];

    const expressReaction = (e, type) => {
        console.log(roomId);
        const REACTION = {
            roomId,
            messageId,
            type,
            userId: myId,
        };
        socketModule.expressReaction(REACTION);
    };
    const reactionsMap = REACTIONS_TYPE.map((reaction, index) => {
        return (
            <img
                key={index}
                src={reaction.icon}
                alt={reaction.type}
                className={`single-reaction-container__icon image-expression`}
                onClick={(e) => {
                    expressReaction(e, reaction.type);
                }}
            ></img>
        );
    });
    return <div className="single-reaction-container">{reactionsMap}</div>;
};

export default Reactions;
