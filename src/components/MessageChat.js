import React from "react";
import { useSelector } from "react-redux";
import MessageChatByType from "./MessageChatByType";

const MessageChat = ({ boxChat }) => {
    const authentication = useSelector((state) => state.authentication);
    const currentRoomId = useSelector((state) => state.currentRoomId);

    const boxChatMap = boxChat.map((message, index, originalBoxChat) => {
        switch (message.type) {
            case "SYSTEM":
                return <div>system</div>;
            case "TEXT":
                return (
                    <MessageChatByType
                        key={index}
                        message={message}
                        index={index}
                        originalBoxChat={originalBoxChat}
                        authentication={authentication}
                        currentRoomId={currentRoomId}
                    />
                );
            case "VIDEO":
                const VIDEO_SENDED = message.content
                return (
                    <MessageChatByType
                        key={index}
                        message={message}
                        index={index}
                        originalBoxChat={originalBoxChat}
                        authentication={authentication}
                        currentRoomId={currentRoomId}
                        videoSended={VIDEO_SENDED}
                    />
                );
                case "IMAGE": 
                const IMAGE_SENDED = message.content
                return (
                    <MessageChatByType
                        key={index}
                        message={message}
                        index={index}
                        originalBoxChat={originalBoxChat}
                        authentication={authentication}
                        currentRoomId={currentRoomId}
                        imageSended={IMAGE_SENDED}
                    />
                );
            default:
                return <> </>
        }
    });
    return <div>{boxChatMap}</div>;
};

export default MessageChat;
