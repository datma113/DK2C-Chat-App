import { STORE_PHONE_AND_PASSWORD_WHEN_LOGIN } from "../constants/constants";

const initial = {};

const reducer = (state = initial, action) => {
    let { type, key, value } = action;
    if (type === STORE_PHONE_AND_PASSWORD_WHEN_LOGIN) {
        let currentUserLoginData = { ...state };
        currentUserLoginData[key] = value;
        console.log(currentUserLoginData)
        return currentUserLoginData;
    }
    return state;
};

export default reducer;
