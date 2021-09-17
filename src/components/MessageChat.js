import React from "react";
import { useSelector } from "react-redux";
import CurrentReactionExpressed from "./CurrentReactionExpressed";
import Reactions from "./Reactions";

const MessageChat = ({ boxChat }) => {
    const authentication = useSelector((state) => state.authentication);
    const boxChatMap = boxChat.map((message, index, originalBoxChat) => {
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
            const THE_FIRST_MESSAGE = 0;
            if (index > THE_FIRST_MESSAGE) {
                const PREVIOUS_SENDER_ID = originalBoxChat[index - 1].sender.id;
                return PREVIOUS_SENDER_ID === senderId ? "d-none" : "";
            }
            return "";
        };

        return (
            <div key={index} className={`single-chat-box mb-1 ${isSelfSideClass()}`}>
                <div className="single-chat-box__img m-3">
                    <img
                        src={message.sender.imageUrl}
                        alt=""
                        className={hideImageWhenDupplicateSender(SENDER_ID)}
                    />
                </div>
                <div
                    className={`single-chat-box__message ${addSelfBackgroundClassForMessage()} mt-3`}
                >
                    {" "}
                    {message.content}{" "}
                    <div className={`single-chat-box__message__reaction-container`}>
                        <div
                            className={`single-chat-box__message__reaction-container__reaction  ${addSelfSideReaction()}`}
                        ></div>
                        <div
                            className={`
                            single-chat-box__message__reaction-container__reaction-list
                             ${addSelfSideReactionList()}
                            `}
                        >
                            <Reactions />
                        </div>
                    </div>
                    <CurrentReactionExpressed
                            reactions={message.reactions}
                        />
                </div>
            </div>
        );
    });
    return <div>{boxChatMap}</div>;
};

export default MessageChat;
