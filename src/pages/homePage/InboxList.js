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
    const realTimeResponse = useSelector((state) => state.realTimeResponse);
    const authentication = useSelector((state) => state.authentication);
    const [loadingOlderInboxs, setloadingOlderInboxs] = useState(1);

    const loadingOlderFriendsInboxs = () => {
        setloadingOlderInboxs((n) => n + 1);
        dispatch(getInboxsFromServer(loadingOlderInboxs));
    };

    useEffect(() => {
        dispatch(getInboxsFromServer(0));
    }, [dispatch]);

    const isMyselfSendMessage = () => {
        if (realTimeResponse.sender) {
            const MY_ID = authentication.user.id;
            const SENDER_ID = realTimeResponse.sender.id;
            return MY_ID === SENDER_ID ? true : false;
        }
    };

    const isCorrectRoomIdOfRealTimeResponse = (currentRoomid, responseRoomId) => {
        return currentRoomid === responseRoomId ? true : false;
    };

    const inboxsMap = inboxs.map((inbox, index) => {
        const TYPE_ROOM_ONE = "ONE";
        const TYPE_ROOM_GROUP = "GROUP";
        const IS_ACTIVE = currentIdBoxChat === inbox.id;
        const CURRENT_ROOM_ID = inbox.room.id;
        const RESPONSE_ROOM_ID = realTimeResponse.roomId;

        const customLastMessage = () => {
            if (isCorrectRoomIdOfRealTimeResponse(CURRENT_ROOM_ID, RESPONSE_ROOM_ID)) {
                return isMyselfSendMessage()
                    ? "Bạn: " + realTimeResponse.content
                    : realTimeResponse.content;
            }

            return inbox.lastMessage.content;
        };

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
                lastMessage={customLastMessage()}
                senderName={inbox.lastMessage.sender.displayName}
                type={inbox.room.type}
                lastMessageTime={inbox.lastMessage.createAt}
                lastMessageReadBy={inbox.lastMessage.readbyes}
                inboxId={inbox.id}
                roomId={CURRENT_ROOM_ID}
                isActive={IS_ACTIVE}
                realTimeResponse={realTimeResponse}
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
