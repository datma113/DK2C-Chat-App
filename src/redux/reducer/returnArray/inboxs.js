import { STORE_INBOXS, UPDATE_LAST_MESSAGE_IN_INBOX } from "../../constants/constants";

const initial = [];

const reducer = (state = initial, action) => {
    let { type, inboxs, lastMessage, inboxId } = action;
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
                realTimeInbox[index].countNewMessage++;
            }
        });
        realTimeInbox.sort((a, b) => {
            const timeA = new Date(a.lastMessage.createAt);
            const timeB = new Date(b.lastMessage.createAt);

            return timeB - timeA;
        });

        return realTimeInbox;
    }

    if (type === "RESET_NEW_MESSAGE") {
        let newStateWhenResetNewMessage = [...state];
        state.forEach((inbox, index) => {
            if (inbox.id === inboxId) {
                newStateWhenResetNewMessage[index].countNewMessage = 0;
            }
        });
        return newStateWhenResetNewMessage;
    }

    return state;
};

export default reducer;
