import React from "react";
import { useSelector } from "react-redux";
import MessageChatByType from "./MessageChatByType";
import SystemMessageInChat from "./SystemMessageInChat";

const MessageChat = ({ boxChat }) => {
    const authentication = useSelector((state) => state.authentication);
    const currentRoomId = useSelector((state) => state.currentRoomId);
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
