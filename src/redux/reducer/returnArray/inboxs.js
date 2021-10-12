import {
    RESET_NEW_MESSAGE,
    STORE_INBOXS,
    STORE_OLDER_INBOXS,

    UPDATE_LAST_MESSAGE_IN_INBOX,
    UPDATE_NEW_ROOM_REALTIME,
    UPDATE_ROOM_NAME,
} from "../../constants/constants";

const initial = [];

const reducer = (state = initial, action) => {
    let { type, inboxs, lastMessage, inboxId, olderInboxs, newRoomName, roomId, newRoom } =
        action;

    switch (type) {
        case STORE_INBOXS:
            return inboxs;
        case STORE_OLDER_INBOXS:
            return [...state, ...olderInboxs];

        case UPDATE_LAST_MESSAGE_IN_INBOX:
            let realTimeInbox = [...state];
            realTimeInbox.forEach((inbox, index) => {
                if (inbox.room.id === lastMessage.roomId) {
                    realTimeInbox[index].lastMessage = lastMessage;
                    realTimeInbox[index].lastMessage.readbyes = [];
                    realTimeInbox[index].countNewMessage++;
                }
            });
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

     

        default:
            break;
    }
    return state;
};

export default reducer;
