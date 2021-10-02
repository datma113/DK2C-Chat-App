import {
    STORE_FRIENDS_REQUEST
}
from "../../constants/constants";
const initial = [];
const reducer = (state = initial, action) => {
    let { type, friendsRequest } = action;

    switch (type) {
       
        case STORE_FRIENDS_REQUEST:
           state = friendsRequest
            return state;
        default:
            break;
    }
    return state;
};
export default reducer;
