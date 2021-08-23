import { LOGIN_FAILED, LOGIN_SUCCESSFUL } from "../constants/constants";

const initial = {
    isLoggin: false,
    user: null,
};

const reducer = (state = initial, action) => {
    let { type, user } = action;
    switch (type) {
        case LOGIN_SUCCESSFUL:
            return {
                isLoggin: true,
                user,
            };
        case LOGIN_FAILED:
            return {
                isLoggin: false,
                user: null
            };
        default:
            break;
    }

    return state;
};

export default reducer;
