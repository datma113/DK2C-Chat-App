import { CLEAR_MESSAGE_FROM_SERVER, SET_MESSAGE_FROM_SERVER } from "../../constants/constants";

const initial = {};

const reducer = (state = initial, action) => {
    let { type, message } = action;
    if (type === SET_MESSAGE_FROM_SERVER) {
        return { message };
    }
    if (type === CLEAR_MESSAGE_FROM_SERVER) return {};
    return state;
};

export default reducer;
