import { STORE_FRIEND_PROFILE } from "../../constants/constants";
const initial = {};
const reducer = (state = initial, action) => {
    let { type, profile } = action;

    switch (type) {
        case STORE_FRIEND_PROFILE:
            return profile;
        default:
            break;
    }
    return state;
};
export default reducer;
