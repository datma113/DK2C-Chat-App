import { SCROLL_BOTTOM_WHEN_SEND_MESSAGE } from "../../constants/constants";

const initial = false;

const reducer = (state = initial, action) => {
    let { type, status } = action;
    switch (type) {
        case SCROLL_BOTTOM_WHEN_SEND_MESSAGE:
            return status;

        default:
            return state;
    }
};

export default reducer;
