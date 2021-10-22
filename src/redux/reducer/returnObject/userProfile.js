import {
    STORE_USER_INFO
}
from "../../constants/constants";
const initial = {};
const reducer = (state = initial, action) => {
    let { type, user_info } = action;

    switch (type) {   
        case STORE_USER_INFO:
            state = user_info
            return state
        default:
            break;
    }
    return state;
};
export default reducer;
