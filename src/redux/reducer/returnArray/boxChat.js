import {
    INITIALIZE_MESSAGE_IN_BOX_CHAT,
    STORE_MESSAGE_IN_BOX_CHAT,
} from "../../constants/constants";

const initial = [];

const reducer = (state = initial, action) => {
    let { type, message } = action;
    if (type === INITIALIZE_MESSAGE_IN_BOX_CHAT) return message;

    if (type === STORE_MESSAGE_IN_BOX_CHAT) {
        let newState = [...state, ...message];
        return newState;
    }

    return state;
};

export default reducer;
