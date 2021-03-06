import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Inbox from "../../components/Inbox";
import { getInboxsFromServer, getOlderInboxsFromServer } from "../../redux/action/actHome";
import Proptypes from "prop-types";

const InboxList = ({ authentication, currentInboxId }) => {
    const dispatch = useDispatch();
    const inboxs = useSelector((state) => state.inboxs);
    const [loadingOlderInboxs, setloadingOlderInboxs] = useState(0);

    const loadingOlderFriendsInboxs = () => {
        setloadingOlderInboxs((n) => n + 1);
        dispatch(getOlderInboxsFromServer(loadingOlderInboxs));
    };

    useEffect(() => {
        dispatch(getInboxsFromServer());
    }, [dispatch]);

    const senderNameOfTypeOne = (isMyself) => {
        return isMyself ? "Bạn: " : "";
    };

    const senderNameOfTypeGroup = (isMyself, senderName) => {
        return isMyself ? "Bạn: " : senderName + ": ";
    };

    const inboxsMap = inboxs.map((inbox, index) => {
        const TYPE_ROOM_ONE = "ONE";
        const TYPE_ROOM_GROUP = "GROUP";
        const IS_ACTIVE = currentInboxId === inbox.id;
        const CURRENT_ROOM_ID = inbox.room.id;

        const MY_ID = authentication.user.id;
        const SENDER_ID = inbox.lastMessage.sender?.id ?? "";
        const IS_MYSELF = MY_ID === SENDER_ID ? true : false;
        const NAME_OF_LAST_SENDER = inbox.lastMessage.sender?.displayName ?? "thông báo";

        let imgUrl = "";
        let displayName = "";
        let senderName = "";
        let senderId = "";

        switch (inbox.room.type) {
            case TYPE_ROOM_ONE:
                senderId = inbox.room.to.id;
                imgUrl = inbox.room.to.imageUrl;
                displayName = inbox.room.to.displayName;
                senderName = senderNameOfTypeOne(IS_MYSELF);
                break;
            case TYPE_ROOM_GROUP:
                imgUrl = inbox.room.imageUrl;
                displayName = inbox.room.name;
                senderName = senderNameOfTypeGroup(IS_MYSELF, NAME_OF_LAST_SENDER);
                break;
            default:
                break;
        }

        const newMessageOfInbox = {
            isMyself: IS_MYSELF,
            countNewMessage: inbox.countNewMessage,
        };

        return (
            <Inbox
                key={index}
                imgUrl={imgUrl}
                displayName={displayName}
                lastMessage={inbox.lastMessage}
                inboxId={inbox.id}
                roomId={CURRENT_ROOM_ID}
                isActive={IS_ACTIVE}
                senderName={senderName}
                newMessageOfInbox={newMessageOfInbox}
                typeOfRoom={inbox.room.type}
                senderId={senderId}
                inbox={inbox}
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
                {inboxs.length > 15 && <p> xem thêm</p>}
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
