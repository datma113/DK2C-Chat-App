import {STORE_CURRENT_NUMBER_ID_INBOX} from "../../constants/constants"
const initial = 0;

const reducer = (state = initial, action) => {
    let { type, id } = action;
    if (type === STORE_CURRENT_NUMBER_ID_INBOX) {
        return id;
    }
    return state;
};

export default reducer;
