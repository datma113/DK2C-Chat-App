import { ADD_FRIEND_TO_CREATE_ROOM, CLEAR_FRIEND_TO_CREATE_ROOM } from "../../constants/constants";

const initial = {};

const reducer = (state = initial, action) => {
    let { type, data } = action;
    switch (type) {
        case ADD_FRIEND_TO_CREATE_ROOM:
            return data;
        case CLEAR_FRIEND_TO_CREATE_ROOM:
            return {};
        default:
            return state;
    }
};

export default reducer;
