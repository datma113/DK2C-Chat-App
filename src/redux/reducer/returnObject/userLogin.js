import { CLEAR_USER_INFO_LOGIN, STORE_PHONE_AND_PASSWORD_WHEN_LOGIN } from "../../constants/constants";

const initial = {};

const reducer = (state = initial, action) => {
    let { type, key, value } = action;
    if (type === STORE_PHONE_AND_PASSWORD_WHEN_LOGIN) {
        let currentUserLoginData = { ...state };
        currentUserLoginData[key] = value;
        return currentUserLoginData;
    }

    if (type === CLEAR_USER_INFO_LOGIN) return {};
    return state;
};

export default reducer;
