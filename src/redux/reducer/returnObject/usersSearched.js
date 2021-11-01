import { STORE_USERS, CLEAR_USERS_SEARCHED } from "../../constants/constants";
const initial = {};

const reducer = (state = initial, action) => {
    let { type, users } = action;

    switch (type) {
        case STORE_USERS:
            return users[0] ?? {};
        case CLEAR_USERS_SEARCHED:
            return {};
        default:
            return state;
    }
};
export default reducer;
