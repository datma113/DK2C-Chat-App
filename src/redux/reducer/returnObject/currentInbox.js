import { STORE_CURRENT_INBOX } from "../../constants/constants";

const initial = {};

const reducer = (state = initial, action) => {
    let { type, currentInbox } = action;
    if (type === STORE_CURRENT_INBOX) {
        return currentInbox;
    }
    return state;
};

export default reducer;
