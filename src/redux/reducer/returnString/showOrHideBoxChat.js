import { HIDE_ELEMENT  } from "../../constants/constants";
const initial = "";

const reducer = (state = initial, action) => {
    let { type, id } = action;

    switch (type) {
        case HIDE_ELEMENT:
            return id;
     
        default:
            break;
    }

    return state;
};

export default reducer;
