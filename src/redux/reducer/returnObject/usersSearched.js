import {
    STORE_USERS,
    CLEAR_USERS_SEARCHED,
    UPDATE_USERS_AFTER_SENT_REQUEST,
} from "../../constants/constants";
const initial = {};

const reducer = (state = initial, action) => {
    let { type, users, data } = action;

    switch (type) {
        case STORE_USERS:
            return users[0] ?? {};
        case UPDATE_USERS_AFTER_SENT_REQUEST:
            const newUsersAfterSentRequest = data.to
            return newUsersAfterSentRequest;
        case CLEAR_USERS_SEARCHED:
            return {};
        default:
            return state;
    }
};
export default reducer;
