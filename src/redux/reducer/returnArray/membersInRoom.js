import { STORE_MEMBERS_IN_ROOM, UPDATE_MEMBERS_IN_ROOM } from "../../constants/constants";

const initial = [];

const reducer = (state = initial, action) => {
    let { type, members } = action;
    switch (type) {
        case STORE_MEMBERS_IN_ROOM:
            return members;
        case UPDATE_MEMBERS_IN_ROOM:
            console.log(members);
            return members;
        default:
            break;
    }

    return state;
};

export default reducer;
