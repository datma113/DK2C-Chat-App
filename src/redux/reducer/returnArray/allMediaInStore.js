import { STORE_FILES, STORE_IMAGES, STORE_LINKS, STORE_VIDEO } from "../../constants/constants";
const initial = {
    video: [],
    images: [],
    files: [],
    links: [],
};

const reducer = (state = initial, action) => {
    let { type, data } = action;

    switch (type) {
        case STORE_VIDEO:
            return { ...state, video: data };
        case STORE_IMAGES:
            return { ...state, images: data };
        case STORE_FILES:
            return { ...state, files: data };
        case STORE_LINKS:
            return { ...state, links: data };
        default:
            return state;
    }
};
export default reducer;
