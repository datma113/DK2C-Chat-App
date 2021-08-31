import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Inbox from "../../components/Inbox";
import { getInboxsFromServer } from "../../redux/action/actHome";

const InboxList = () => {
    const dispatch = useDispatch();
    const inboxs = useSelector((state) => state.inboxs);
    const currentIdBoxChat = useSelector(state => state.currentIdBoxChat)

    useEffect(() => {
        dispatch(getInboxsFromServer());
    }, [dispatch]);

    const inboxsMap = inboxs.map((inbox, index) => {
        const TYPE_ROOM_ONE = "ONE";
        const TYPE_ROOM_GROUP = "GROUP";
        const IS_ACTIVE = currentIdBoxChat === inbox.id
        let imgUrl = "";
        let displayName = "";       

        switch (inbox.room.type) {
            case TYPE_ROOM_ONE:
                imgUrl = inbox.room.to.imageUrl;
                displayName = inbox.room.to.displayName;
                break;
            case TYPE_ROOM_GROUP:
                imgUrl = inbox.room.imageUrl;
                displayName = inbox.room.name;
                break;
            default:
                break;
        }

        return (
            <Inbox
                key={index}
                imgUrl={imgUrl}
                displayName={displayName}
                lastMessage={inbox.lastMessage.content}
                senderName={inbox.lastMessage.sender.displayName}
                type={inbox.room.type}
                lastMessageTime={inbox.lastMessage.createAt}
                lastMessageReadBy={inbox.lastMessageReadBy}
                boxChatId={inbox.id}
                isActive={IS_ACTIVE}
            />
        );
    });

    return <div> {inboxsMap} </div>;
};

export default InboxList;
