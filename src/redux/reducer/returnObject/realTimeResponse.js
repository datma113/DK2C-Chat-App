import {STORE_REAL_TIME_RESPONSE } from "../../constants/constants";

const initial = {};

const reducer = (state = initial, action) => {
    let { type, data } = action;
    if (type === STORE_REAL_TIME_RESPONSE) {
        return data;
    }
    return state;
};

export default reducer;
