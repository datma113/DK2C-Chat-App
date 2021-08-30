import { STORE_INBOXS } from "../../constants/constants";

const initial = [];

const reducer = (state = initial, action) => {
    let { type, inboxs } = action;
    if (type === STORE_INBOXS) {
        return inboxs;
    }
    return state;
};

export default reducer;
