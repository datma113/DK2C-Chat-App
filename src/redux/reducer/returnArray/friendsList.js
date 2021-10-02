import {
    STORE_FRIENDS_LIST
}
from "../../constants/constants";
const initial = [];
const reducer = (state = initial, action) => {
    let { type, friends } = action;

    switch (type) {
       
        case STORE_FRIENDS_LIST:
            state = friends
            return state
        default:
            break;
    }
    return state;
};
export default reducer;
