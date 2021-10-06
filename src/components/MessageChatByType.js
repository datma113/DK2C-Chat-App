import React from "react";
import CurrentReactionExpressed from "./CurrentReactionExpressed";
import Reactions from "./Reactions";
import VideoSended from "./VideoSended";

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

    const addSelfSideReaction = () => {
        const REACTION_CLASS = "single-chat-box__message__reaction-container__reaction";
        return IS_SELF_SIDE ? REACTION_CLASS + "--self" : REACTION_CLASS + "--other";
    };
    const addSelfSideReactionList = () => {
        const REACTION_CLASS = "single-chat-box__message__reaction-container__reaction-list";
        return IS_SELF_SIDE ? REACTION_CLASS + "--self" : REACTION_CLASS + "--other";
    };

    const hideImageWhenDupplicateSender = (senderId) => {
        const THE_FIRST_INDEX_MESSAGE = 0;
        const IS_EXIST_PREVIOUS_MESSAGE = originalBoxChat[index - 1].sender ?? false;
        if (index > THE_FIRST_INDEX_MESSAGE && IS_EXIST_PREVIOUS_MESSAGE) {
            const PREVIOUS_SENDER_ID = originalBoxChat[index - 1].sender.id;
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

        if (index === THE_LAST_INDEX_MESSAGE) return TIME_SHOWED;
        else if (index > THE_FIRST_INDEX_MESSAGE) {
            const NEXT_SENDER_ID = originalBoxChat[index + 1].sender.id;
            const CURRENT_SENDER_ID = message.sender.id;
            return CURRENT_SENDER_ID !== NEXT_SENDER_ID ? TIME_SHOWED : "";
        }
        return "";
    };

    const showTheFirstReactionsIfExists = () => {
        const REACTION = {
            HAHA: "far fa-grin-squint text-warning",
            SAD: "fas fa-sad-tear ",
            ANGRY: "fas fa-angry text-warning",
            LIKE: "fas fa-thumbs-up  text-primary",
            LOVE: "fas fa-heart text-danger ",
            WOW: "fas fa-surprise text-warning",
        };
        let iconClassName = "fas fa-thumbs-up  text-primary";
        const THE_FIRST_REACTION = 0;
        const MIN_OF_REACTIONS_LENGTH = 0;
        if (message.reactions.length > MIN_OF_REACTIONS_LENGTH)
            iconClassName = REACTION[message.reactions[THE_FIRST_REACTION].type];
        return iconClassName;
    };

    const renderMessageContent = () => {
        if (videoSended) return <VideoSended src={videoSended} />;
        if (imageSended) return <img src={imageSended} className="w-100" alt="" />;
        return <p>{message.content}</p>;
    };

    return (
        <div key={index} className={`single-chat-box mb-1 ${isSelfSideClass()}`} id={message.id}>
            <div className="single-chat-box__img m-3">
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
                        <i className={showTheFirstReactionsIfExists()}></i>
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
                <CurrentReactionExpressed reactions={message.reactions} />
                <p className="single-chat-box__message__time-send-message text-small mt-2">
                    {showTimeSendMessage()}
                </p>
            </div>
        </div>
    );
};

export default MessageChatByType;
