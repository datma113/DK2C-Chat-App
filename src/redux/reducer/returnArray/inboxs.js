import { STORE_INBOXS, UPDATE_LAST_MESSAGE_IN_INBOX } from "../../constants/constants";

const initial = [];

const reducer = (state = initial, action) => {
    let { type, inboxs, lastMessage } = action;
    if (type === STORE_INBOXS) {
        let newState = [...state, ...inboxs];
        return newState;
    }
    if (type === UPDATE_LAST_MESSAGE_IN_INBOX) {
        let realTimeInbox = [...state];
        state.forEach((inbox, index) => {
            if (inbox.room.id === lastMessage.roomId) {
                realTimeInbox[index].lastMessage = lastMessage;
                realTimeInbox[index].lastMessage.readbyes = [];
            }
        });
        realTimeInbox.sort((a, b) => {
            const timeA = new Date(a.lastMessage.createAt);
            const timeB = new Date(b.lastMessage.createAt);

            return timeB - timeA;
        });

        return realTimeInbox;
    }

    return state;
};

export default reducer;
