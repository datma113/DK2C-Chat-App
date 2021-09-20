import {
    STORE_FRIENDS_LIST
}
from "../../constants/constants";
const initial = [];
const reducer = (state = initial, action) => {
    let { type, friends } = action;

    switch (type) {
       
        case STORE_FRIENDS_LIST:
            let friendsList = [...state, ...friends];
            return friendsList;
        default:
            break;
    }
    return state;
};
export default reducer;
