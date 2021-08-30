import { STORE_MESSAGE_IN_BOX_CHAT } from "../../constants/constants";

const initial = [];

const reducer = (state = initial, action) => {
    let { type, message } = action;
    if (type === STORE_MESSAGE_IN_BOX_CHAT) {
        return message;
    }
    return state;
};

export default reducer;
