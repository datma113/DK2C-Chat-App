import { RESET_CURRENT_INBOX_ID, STORE_CURRENT_INBOX_ID } from "../../constants/constants";
const initial = 0;

const reducer = (state = initial, action) => {
    let { type, id } = action;

    switch (type) {
        case STORE_CURRENT_INBOX_ID:
            return id;
        case RESET_CURRENT_INBOX_ID:
            return 0;
        default:
            break;
    }

    return state;
};

export default reducer;
