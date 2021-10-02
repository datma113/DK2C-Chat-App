import {
    STORE_CURRENT_INBOX,
    UPDATE_NAME_OF_HEADER_CHAT_WHEN_EDIT_ROOM_NAME,
} from "../../constants/constants";

const initial = {};

const reducer = (state = initial, action) => {
    let { type, currentInbox, name } = action;
    if (type === STORE_CURRENT_INBOX) {
        return currentInbox;
    }
    if (type === UPDATE_NAME_OF_HEADER_CHAT_WHEN_EDIT_ROOM_NAME) {
        let newState = {...state};
        newState.displayName = name
        return newState;
    }
    return state;
};

export default reducer;
