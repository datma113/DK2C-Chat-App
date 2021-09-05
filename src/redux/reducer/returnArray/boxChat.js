import {
    INITIALIZE_MESSAGE_IN_BOX_CHAT,
    STORE_MESSAGE_IN_BOX_CHAT,
    UPDATE_MESSAGE_REALTIME,
} from "../../constants/constants";

const initial = [];

const reducer = (state = initial, action) => {
    let { type, message, realTimeMessage } = action;

    switch (type) {
        case INITIALIZE_MESSAGE_IN_BOX_CHAT:
            return message;
        case STORE_MESSAGE_IN_BOX_CHAT:
            let olderMessage = [...message, ...state];
            return olderMessage;
        case UPDATE_MESSAGE_REALTIME:
            let updateRealTimeMessage = [...state, ...realTimeMessage];
            return updateRealTimeMessage;
        default:
            break;
    }
    return state;
};

export default reducer;
