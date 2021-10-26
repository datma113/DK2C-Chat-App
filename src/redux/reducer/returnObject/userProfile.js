import { STORE_USER_INFO, UPDATE_USER_INFO_IMAGE } from "../../constants/constants";
const initial = {};
const reducer = (state = initial, action) => {
    let { type, user_info, newImageUrl } = action;

    switch (type) {
        case STORE_USER_INFO:
            return user_info;
        case UPDATE_USER_INFO_IMAGE:
            return {
                ...state,
                imageUrl: newImageUrl,
            };
        default:
            break;
    }
    return state;
};
export default reducer;
