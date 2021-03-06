import {
    STORE_CURRENT_INBOX,
    UPDATE_CURRENT_INBOX_WHEN_BLOCK,
    UPDATE_NAME_OF_HEADER_CHAT_WHEN_EDIT_ROOM_NAME,
    UPDATE_ROOM_IMAGE_OF_HEADER_CHAT,
} from "../../constants/constants";

const initial = {};

const reducer = (state = initial, action) => {
    let { type, status, currentInbox, name, imgUrl } = action;

    switch (type) {
        case STORE_CURRENT_INBOX:
            return currentInbox;
        case UPDATE_NAME_OF_HEADER_CHAT_WHEN_EDIT_ROOM_NAME:
            let newState = { ...state };
            newState.displayName = name;
            return newState;
        case UPDATE_CURRENT_INBOX_WHEN_BLOCK:
            const newInbox = state.inbox;
            newInbox.room.to.meBLock = status;
            return { ...state, inbox: newInbox };
        case UPDATE_ROOM_IMAGE_OF_HEADER_CHAT:
            let currentInboxAfterUpdateImage = { ...state };
            currentInboxAfterUpdateImage.imgUrl = imgUrl;
            return currentInboxAfterUpdateImage;
        default:
            return state;
    }
};

export default reducer;
