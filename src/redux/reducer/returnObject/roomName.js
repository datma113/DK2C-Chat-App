import { STORE_ROOM_NAME } from "../../constants/constants";

const initial = {};

const reducer = (state = initial, action) => {
    let { type, key, value } = action;
    if (type === STORE_ROOM_NAME) {
        let roomName = { ...state };
        roomName[key] = value;
        return roomName;
    }

    return state;
};

export default reducer;
