import {
    OUT_ROOM,
    RESET_NEW_MESSAGE,
    STORE_INBOXS,
    STORE_OLDER_INBOXS,
    UPDATE_LAST_MESSAGE_IN_INBOX,
    UPDATE_NEW_ROOM_REALTIME,
    UPDATE_ROOM_IMAGE_OF_INBOXS,
    UPDATE_ROOM_NAME,
} from "../../constants/constants";

const initial = [];

const reducer = (state = initial, action) => {
    let {
        type,
        inbox,
        inboxs,
        lastMessage,
        inboxId,
        olderInboxs,
        newRoomName,
        roomId,
        newRoom,
        imgUrl,
    } = action;

    switch (type) {
        case STORE_INBOXS:
            inboxs.forEach((inbox) => {
                if (!inbox.lastMessage) inbox.lastMessage = {};
            });
            return inboxs;
        case STORE_OLDER_INBOXS:
            return [...state, ...olderInboxs];

        case UPDATE_LAST_MESSAGE_IN_INBOX:
            let realTimeInbox = [...state];

            let convertCurrentInboxToIdArray = realTimeInbox.map((inbox) => inbox.room.id);
            const checkNewMessageIsInsideInboxs = convertCurrentInboxToIdArray.includes(
                lastMessage.roomId
            );
            if (checkNewMessageIsInsideInboxs) {
                const indexOfInbox = convertCurrentInboxToIdArray.indexOf(lastMessage.roomId);
                realTimeInbox[indexOfInbox].lastMessage = lastMessage;
                realTimeInbox[indexOfInbox].lastMessage.readbyes = [];
                realTimeInbox[indexOfInbox].countNewMessage++;
            } else {
                return [inbox, ...realTimeInbox];
            }

            realTimeInbox.sort((a, b) => {
                const timeA = new Date(a.lastMessage.createAt);
                const timeB = new Date(b.lastMessage.createAt);

                return timeB - timeA;
            });
            return realTimeInbox;

        case RESET_NEW_MESSAGE:
            let newStateWhenResetNewMessage = [...state];
            newStateWhenResetNewMessage.forEach((inbox, index) => {
                if (inbox.id === inboxId) {
                    newStateWhenResetNewMessage[index].countNewMessage = 0;
                }
            });
            return newStateWhenResetNewMessage;

        case UPDATE_ROOM_NAME:
            let newStateWhenEditRoomName = [...state];
            newStateWhenEditRoomName.forEach((inbox, index) => {
                if (inbox.room.id === roomId) {
                    newStateWhenEditRoomName[index].room.name = newRoomName;
                }
            });
            return newStateWhenEditRoomName;

        case UPDATE_NEW_ROOM_REALTIME:
            return [newRoom, ...state];

        case OUT_ROOM:
            let newStateWhenOutRoom = [...state];
            newStateWhenOutRoom = newStateWhenOutRoom.filter((inbox) => inbox.id !== inboxId);
            return newStateWhenOutRoom;

        case UPDATE_ROOM_IMAGE_OF_INBOXS:
            let newInboxsAfterUpdateImage = [...state];
            const newInboxsIdMap = newInboxsAfterUpdateImage.map((inbox) => inbox.id);
            const indexOfInboxChanged = newInboxsIdMap.indexOf(inboxId);
            newInboxsAfterUpdateImage[indexOfInboxChanged].room.imageUrl = imgUrl;
            return newInboxsAfterUpdateImage;
        default:
            break;
    }
    return state;
};

export default reducer;
