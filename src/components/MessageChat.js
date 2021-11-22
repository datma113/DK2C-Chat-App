import React from "react";
import MessageChatByType from "./MessageChatByType";
import SystemMessageInChat from "./SystemMessageInChat";

const MessageChat = ({ boxChat, currentRoomId, authentication }) => {
    const TYPE_SYSTEM = "SYSTEM";
   
    const boxChatMap = boxChat.map((message, index, originalBoxChat) => {
        if (message.type === TYPE_SYSTEM)
            return <SystemMessageInChat key={index} message={message} />;
        else
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
    });
    return <div className="mb-5">{boxChatMap}</div>;
};

export default MessageChat;
