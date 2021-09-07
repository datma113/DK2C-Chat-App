import {STORE_CURRENT_ROOM_ID} from "../../constants/constants"
const initial = 0;

const reducer = (state = initial, action) => {
    let { type, id } = action;
    if (type === STORE_CURRENT_ROOM_ID) {
        return id;
    }
    return state;
};

export default reducer;
