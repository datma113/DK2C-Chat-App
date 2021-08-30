import {GET_CURRENT_NUMBER_ID_BOX_CHAT} from "../../constants/constants"
const initial = 0;

const reducer = (state = initial, action) => {
    let { type, id } = action;
    if (type === GET_CURRENT_NUMBER_ID_BOX_CHAT) {
        return id;
    }
    return state;
};

export default reducer;
