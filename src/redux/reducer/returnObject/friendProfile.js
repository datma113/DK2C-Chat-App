import { STORE_FRIEND_PROFILE } from "../../constants/constants";
const initial = {};
const reducer = (state = initial, action) => {
    let { type, data } = action;

    switch (type) {
        case STORE_FRIEND_PROFILE:
            return data;
        default:
            break;
    }
    return state;
};
export default reducer;
