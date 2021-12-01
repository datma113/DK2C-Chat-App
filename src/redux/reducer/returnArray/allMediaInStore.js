import {
    LOAD_MORE_FILES,
    LOAD_MORE_IMAGES,
    STORE_FILES,
    STORE_IMAGES,
    STORE_LINKS,
    STORE_VIDEO,
} from "../../constants/constants";
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
        case LOAD_MORE_IMAGES:
            const newImages = [...state.images, ...data];
            return { ...state, images: newImages };
        case LOAD_MORE_FILES:
            const newFiles = [...state.files, ...data];
            return { ...state, files: newFiles };
        case STORE_FILES:
            return { ...state, files: data };
        case STORE_LINKS:
            return { ...state, links: data };
        default:
            return state;
    }
};
export default reducer;
