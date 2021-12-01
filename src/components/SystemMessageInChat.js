import React from "react";

const SystemMessageInChat = ({ message }) => {
    return (
        <div className="system-message center">
            <p className="system-message__content text-center text-small">{message.content}</p>
        </div>
    );
};

export default SystemMessageInChat;
