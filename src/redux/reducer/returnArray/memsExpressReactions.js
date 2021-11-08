import { STORE_MEMBERS_EXPRESS_REACTIONS } from "../../constants/constants";

const initial = [];

const reducer = (state = initial, action) => {
    let { type, members } = action;
    switch (type) {
        case STORE_MEMBERS_EXPRESS_REACTIONS:
            return members;
     
        default:
            break;
    }

    return state;
};

export default reducer;
