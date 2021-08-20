import { STORE_USER_INFO_WHEN_REGISTER } from "../constants/constants";

const initial = {};

const reducer = (state = initial, action) => {
    let { type, key, value } = action;
    if (type === STORE_USER_INFO_WHEN_REGISTER) {
        let currentUserRegisterInfo = { ...state };
        currentUserRegisterInfo[key] = value;
        return currentUserRegisterInfo;
    }
    return state;
};

export default reducer;
