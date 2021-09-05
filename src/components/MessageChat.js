import React from "react";
import { useSelector } from "react-redux";

const MessageChat = ({ boxChat }) => {
    const authentication = useSelector((state) => state.authentication);

    const boxChatMap = boxChat.map((message, index) => {
        const SENDER_ID = message.sender.id;
        const MY_ID = authentication.user.id;
        const IS_SELF_SIDE = SENDER_ID === MY_ID ? true : false;
        const isSelfSideClass = () => {
            return IS_SELF_SIDE ? "single-chat-box--self" : "single-chat-box--other";
        };

        const addSelfBackgroundClassForMessage = () => {
            return IS_SELF_SIDE ? "single-chat-box__message--self" : "";
        };

        return (
            <div key={index} className={`single-chat-box mb-1 ${isSelfSideClass()}`}>
                <div>
                    <img
                        className="single-chat-box__img m-3"
                        src={message.sender.imageUrl}
                        alt=""
                    />
                </div>
                <div
                    className={`single-chat-box__message ${addSelfBackgroundClassForMessage()} mt-3`}
                >
                    {" "}
                    {message.content}{" "}
                </div>
            </div>
        );
    });
    return <div>{boxChatMap}</div>;
};

export default MessageChat;
