import { CLEAR_ROOM_NAME, STORE_ROOM_NAME } from "../../constants/constants";

const initial = {};

const reducer = (state = initial, action) => {
    let { type, key, value } = action;
    switch (type) {
        case STORE_ROOM_NAME:
            let roomName = { ...state };
            roomName[key] = value;
            return roomName;
       
            case CLEAR_ROOM_NAME:
            return {};
        default:
            break;
    }

    return state;
};

export default reducer;
