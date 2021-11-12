import {
    STORE_USER_INFO,
    UPDATE_USER_INFO_IMAGE,
    UPDATE_USER_INFO_DISPLAY_NAME,
} from "../../constants/constants";
const initial = {};
const reducer = (state = initial, action) => {
    let { type, user_info, newImageUrl, displayName } = action;

    switch (type) {
        case STORE_USER_INFO:
            return user_info;
        case UPDATE_USER_INFO_IMAGE:
            return {
                ...state,
                imageUrl: newImageUrl,
            };
        case UPDATE_USER_INFO_DISPLAY_NAME:
            return {
                ...state,
                displayName,
            };
        default:
            break;
    }
    return state;
};
export default reducer;
