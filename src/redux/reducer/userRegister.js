import {
    STORE_USER_INFO_WHEN_REGISTER,
    STORE_USER_INFO_WHEN_DONE_REGISTER_STEP_1,
} from "../constants/constants";

const initial = {};

const reducer = (state = initial, action) => {
    let { type, key, value, user } = action;
    switch (type) {
        case STORE_USER_INFO_WHEN_REGISTER:
            let currentUserRegisterInfo = { ...state };
            currentUserRegisterInfo[key] = value;
            console.log(currentUserRegisterInfo)
            return currentUserRegisterInfo;
            
        case STORE_USER_INFO_WHEN_DONE_REGISTER_STEP_1:
            console.log(user)
            return user 
        default:
            break;
    }

    return state;
};

export default reducer;
