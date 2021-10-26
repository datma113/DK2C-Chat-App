import React from "react";
import { useSelector } from "react-redux";
import MessageChatByType from "./MessageChatByType";
import SystemMessageInChat from "./SystemMessageInChat";

const MessageChat = ({ boxChat }) => {
    const authentication = useSelector((state) => state.authentication);
    const currentRoomId = useSelector((state) => state.currentRoomId);
    
    const TYPE_OF_MESSAGE = {
        SYSTEM: 'SYSTEM',
        TEXT: 'TEXT',
        VIDEO: 'VIDEO',
        IMAGE: 'IMGAE'
    }

    const boxChatMap = boxChat.map((message, index, originalBoxChat) => {
        switch (message.type) {
            case TYPE_OF_MESSAGE.SYSTEM:
                return <SystemMessageInChat key={index} message={message} />;
            case TYPE_OF_MESSAGE.TEXT:
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
            case TYPE_OF_MESSAGE.VIDEO:
                const VIDEO_SENDED = message.content;
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
            case TYPE_OF_MESSAGE.IMAGE:
                const IMAGE_SENDED = message.content;
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
                return <div key={index}> </div>;
        }
    });
    return <div className="mb-5">{boxChatMap}</div>;
};

export default MessageChat;
