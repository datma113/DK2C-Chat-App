import React from "react";
import CurrentReactionExpressed from "./CurrentReactionExpressed";
import DeleteMessage from "./DeleteMessage";
import Reactions from "./Reactions";
import VideoSended from "./VideoSended";
import hahaIcon from "../assets/image/haha.png";
import angryIcon from "../assets/image/angry.png";
import sadIcon from "../assets/image/sad.png";
import likeIcon from "../assets/image/like.png";
import loveIcon from "../assets/image/love.png";
import wowIcon from "../assets/image/wow.png";

const MessageChatByType = ({
    message,
    index,
    originalBoxChat,
    authentication,
    currentRoomId,
    videoSended = null,
    imageSended = null,
}) => {
  
    const SENDER_ID = message.sender.id;
    const MY_ID = authentication.user.id;
    const IS_SELF_SIDE = SENDER_ID === MY_ID ? true : false;
    const isSelfSideClass = () => {
        return IS_SELF_SIDE ? "single-chat-box--self" : "single-chat-box--other";
    };

    const addSelfBackgroundClassForMessage = () => {
        return IS_SELF_SIDE ? "single-chat-box__message--self" : "";
    };

    const addSelfOptionsMessage = () =>
        IS_SELF_SIDE
            ? "single-chat-box__message__delete--self"
            : "single-chat-box__message__delete--other";

    const addSelfElementInOptions = () =>
        IS_SELF_SIDE
            ? "single-chat-box__message__delete__options--self"
            : "single-chat-box__message__delete__options--other";

    const addSelfSideReaction = () => {
        const REACTION_CLASS = "single-chat-box__message__reaction-container__reaction";
        return IS_SELF_SIDE ? REACTION_CLASS + "--self" : REACTION_CLASS + "--other";
    };

  

    const addSelfSideReactionList = () => {
        const REACTION_CLASS = "single-chat-box__message__reaction-container__reaction-list";
        return IS_SELF_SIDE ? REACTION_CLASS + "--self" : REACTION_CLASS + "--other";
    };

    const hideImageWhenDupplicateSender = (senderId) => {
        const THE_PREVIOUS_MESSAGE = originalBoxChat[index - 1];
        const THE_FIRST_INDEX_MESSAGE = 0;

        const IS_EXIST_PREVIOUS_MESSAGE = THE_PREVIOUS_MESSAGE ?? false;
        const TYPE_SYSTEM_MESSAGE = "SYSTEM";
        if (
            index > THE_FIRST_INDEX_MESSAGE &&
            IS_EXIST_PREVIOUS_MESSAGE &&
            THE_PREVIOUS_MESSAGE.type !== TYPE_SYSTEM_MESSAGE
        ) {
            const PREVIOUS_SENDER_ID = THE_PREVIOUS_MESSAGE.sender.id;
            return PREVIOUS_SENDER_ID === senderId ? "d-none" : "";
        }
        return "";
    };

    const showTimeSendMessage = () => {
        const TIME_CREATED = new Date(message.createAt);
        const TIME_SHOWED = `${TIME_CREATED.getHours()}:${
            TIME_CREATED.getMinutes() < 9
                ? `0${TIME_CREATED.getMinutes()}`
                : TIME_CREATED.getMinutes()
        }`;

        const THE_LAST_INDEX_MESSAGE = originalBoxChat.length - 1;
        const THE_FIRST_INDEX_MESSAGE = 0;
        const THE_NEXT_MESSAGE = originalBoxChat[index + 1];
        const MESSAGE_SYSTEM = "SYSTEM";

        if (index === THE_LAST_INDEX_MESSAGE) return TIME_SHOWED;
        else if (index > THE_FIRST_INDEX_MESSAGE && THE_NEXT_MESSAGE.type !== MESSAGE_SYSTEM) {
            const NEXT_SENDER_ID = THE_NEXT_MESSAGE.sender.id;
            const CURRENT_SENDER_ID = message.sender.id;
            return CURRENT_SENDER_ID !== NEXT_SENDER_ID ? TIME_SHOWED : "";
        }
        return "";
    };

    const showTheFirstReactionsIfExists = () => {
        const REACTION = {
            HAHA: hahaIcon,
            SAD: sadIcon,
            ANGRY: angryIcon,
            LIKE: likeIcon,
            LOVE: loveIcon,
            WOW: wowIcon,
        };
        let icon = likeIcon;
        const THE_FIRST_REACTION = 0;
        const MIN_OF_REACTIONS_LENGTH = 0;
        if (message.reactions.length > MIN_OF_REACTIONS_LENGTH)
            icon = REACTION[message.reactions[THE_FIRST_REACTION].type];
        return icon;
    };

    const renderMessageContent = () => {
        if (videoSended) return <VideoSended src={videoSended} />;
        if (imageSended) return <img src={imageSended} className="w-100" alt="" />;
        return <p>{message.content}</p>;
    };

    return (
        <div key={index} className={`single-chat-box ${isSelfSideClass()}`} id={message.id}>
            <div className={`single-chat-box__img m-3`}>
                <img
                    src={message.sender.imageUrl}
                    alt=""
                    className={hideImageWhenDupplicateSender(SENDER_ID)}
                />
             
            </div>

            <div className={`single-chat-box__message ${addSelfBackgroundClassForMessage()} mt-3`}>
                {renderMessageContent()}
                <div className={`single-chat-box__message__reaction-container `}>
                    <div
                        className={`single-chat-box__message__reaction-container__reaction ${addSelfSideReaction()} center `}
                    >
                        <img
                            className={`image-expression`}
                            src={showTheFirstReactionsIfExists()}
                            alt={`defaultIcon`}
                        ></img>
                    </div>
                    <div
                        className={`
                     single-chat-box__message__reaction-container__reaction-list
                      ${addSelfSideReactionList()}
                     `}
                    >
                        <Reactions roomId={currentRoomId} messageId={message.id} myId={MY_ID} />
                    </div>
                </div>
                <DeleteMessage
                    messageId={message.id}
                    addSelfOptionsMessage={addSelfOptionsMessage()}
                    addSelfElementInOptions={addSelfElementInOptions()}
                />

                <CurrentReactionExpressed messageId={message.id} reactions={message.reactions} />
                <p className="single-chat-box__message__time-send-message text-small mt-2">
                    {showTimeSendMessage()}
                </p>
            </div>
        </div>
    );
};

export default MessageChatByType;
