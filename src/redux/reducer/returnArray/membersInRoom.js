import { STORE_MEMBERS_IN_ROOM } from "../../constants/constants";

const initial = [];

const reducer = (state = initial, action) => {
    let { type, members } = action;
    switch (type) {
        case STORE_MEMBERS_IN_ROOM:
            return members;
     
        default:
            break;
    }

    return state;
};

export default reducer;
