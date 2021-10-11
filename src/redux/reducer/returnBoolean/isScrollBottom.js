import {
    RESET_STATUS_OF_SCROLL_BOTTOM_IN_BOX_CHAT,
    SCROLL_BOTTOM_WHEN_SEND_MESSAGE,
} from "../../constants/constants";

const initial = false;

const reducer = (state = initial, action) => {
    let { type, status } = action;

    if (type === SCROLL_BOTTOM_WHEN_SEND_MESSAGE) {
        return status;
    }
    
    if (type === RESET_STATUS_OF_SCROLL_BOTTOM_IN_BOX_CHAT) return status;
    return state;
};

export default reducer;
