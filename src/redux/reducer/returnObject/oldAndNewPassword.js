import { STORE_OLD_AND_NEW_PASSWORD } from "../../constants/constants";

const initial = {};

const reducer = (state = initial, action) => {
    let { type, key, value } = action;
    if (type === STORE_OLD_AND_NEW_PASSWORD) {
        let currentUserLoginData = { ...state };
        currentUserLoginData[key] = value;
        return currentUserLoginData;
    }

   
    return state;
};

export default reducer;
