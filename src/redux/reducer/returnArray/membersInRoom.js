import { STORE_MEMBERS_IN_ROOM } from "../../constants/constants";

const initial = [];

const reducer = (state = initial, action) => {
    let { type, members } = action;
    if (type === STORE_MEMBERS_IN_ROOM) {
        return members;
    }
    return state;
};

export default reducer;
