import {
    RESET_NEW_MESSAGE,
    STORE_INBOXS,
    STORE_OLDER_INBOXS,
    UPDATE_LAST_MESSAGE_IN_INBOX,
} from "../../constants/constants";

const initial = [];

const reducer = (state = initial, action) => {
    let { type, inboxs, lastMessage, inboxId, olderInboxs } = action;

    switch (type) {
        case STORE_INBOXS:
            return inboxs;
        case STORE_OLDER_INBOXS:
            return [...state, ...olderInboxs];

        case UPDATE_LAST_MESSAGE_IN_INBOX:
            let realTimeInbox = [...state];
            state.forEach((inbox, index) => {
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
            state.forEach((inbox, index) => {
                if (inbox.id === inboxId) {
                    newStateWhenResetNewMessage[index].countNewMessage = 0;
                }
            });
            return newStateWhenResetNewMessage;
        default:
            break;
    }
    return state;
};

export default reducer;
