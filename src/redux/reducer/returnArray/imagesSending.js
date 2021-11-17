import { CLEAR_IMAGES_SENDING, STORE_IMAGES_SENDING } from "../../constants/constants";
const initial = [];

const reducer = (state = initial, action) => {
    let { type, data } = action;

    switch (type) {
        case STORE_IMAGES_SENDING:
            return Array.from(data);
        case CLEAR_IMAGES_SENDING:
            return [];
        default:
            return state;
    }
};
export default reducer;
