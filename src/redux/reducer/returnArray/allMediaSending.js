import {
    CLEAR_IMAGES_SENDING,
    REMOVE_AN_IMAGES_SENDING_BY_INDEX,
    STORE_IMAGES_SENDING,
} from "../../constants/constants";
const initial = [];

const reducer = (state = initial, action) => {
    let { type, data } = action;

    switch (type) {
        case STORE_IMAGES_SENDING:
            return Array.from(data);
        case CLEAR_IMAGES_SENDING:
            return [];
        case REMOVE_AN_IMAGES_SENDING_BY_INDEX:
            let newImgsWhenRemoveByIndex = [...state];
            newImgsWhenRemoveByIndex.splice(data, 1);
            return newImgsWhenRemoveByIndex;
        default:
            return state;
    }
};
export default reducer;
