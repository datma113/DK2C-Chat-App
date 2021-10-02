import {
    STORE_GROUPS_LIST
}
from "../../constants/constants";
const initial = [];
const reducer = (state = initial, action) => {
    let { type, groups } = action;

    switch (type) {
       
        case STORE_GROUPS_LIST:
            state = groups
            return state;
        default:
            break;
    }
    return state;
};
export default reducer;
