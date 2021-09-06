import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Inbox from "../../components/Inbox";
import { getInboxsFromServer } from "../../redux/action/actHome";
import Proptypes from "prop-types";

const InboxList = () => {
    const dispatch = useDispatch();
    const inboxs = useSelector((state) => state.inboxs);
    const currentIdBoxChat = useSelector((state) => state.currentIdBoxChat);
    const [loadingOlderInboxs, setloadingOlderInboxs] = useState(1);

    const loadingOlderFriendsInboxs = () => {
        setloadingOlderInboxs((n) => n + 1);
        dispatch(getInboxsFromServer(loadingOlderInboxs));

    };

    useEffect(() => {
        dispatch(getInboxsFromServer(0));
    }, [dispatch]);

    const inboxsMap = inboxs.map((inbox, index) => {
        const TYPE_ROOM_ONE = "ONE";
        const TYPE_ROOM_GROUP = "GROUP";
        const IS_ACTIVE = currentIdBoxChat === inbox.id;
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
                lastMessageReadBy={inbox.lastMessage.readbyes}
                inboxId={inbox.id}
                roomId={inbox.room.id}
                isActive={IS_ACTIVE}
            />
        );
    });

    return (
        <div className="home__inbox-list">
            {inboxsMap}
            <div
                className="home__inbox-list__older-inboxs center mb-5"
                onClick={() => loadingOlderFriendsInboxs()}
            >
                <p> xem thêm</p>
            </div>
        </div>
    );
};

InboxList.propTypes = {
    imgUrl: Proptypes.string,
    displayName: Proptypes.string,
    lastMessage: Proptypes.string,
    senderName: Proptypes.string,
    type: Proptypes.string,
    lastMessageTime: Proptypes.string,
    lastMessageReadBy: Proptypes.string,
    boxChatId: Proptypes.number,
    isActive: Proptypes.bool,
};

export default InboxList;
