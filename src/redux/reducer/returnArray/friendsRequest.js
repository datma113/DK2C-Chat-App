import {
    STORE_FRIENDS_REQUEST,
    UPDATE_FRIENDS_REQUEST_AFTER_SENT_REQUEST,
    UPDATE_FRIEND_AFTER_REQUEST,
} from "../../constants/constants";
const initial = [];
const reducer = (state = initial, action) => {
    let { type, friendsRequest, id, data } = action;

    switch (type) {
        case STORE_FRIENDS_REQUEST:
            return friendsRequest;

        case UPDATE_FRIEND_AFTER_REQUEST:
            const newRequests = [...state];
            let requestMap = state.map((el) => el.from.id);

            const indexOfRqeuestsDeleted = requestMap.indexOf(id);
            newRequests.splice(indexOfRqeuestsDeleted, 1);
            return newRequests;

        case UPDATE_FRIENDS_REQUEST_AFTER_SENT_REQUEST:
            return [data , ...state];
        default:
            break;
    }
    return state;
};
export default reducer;
