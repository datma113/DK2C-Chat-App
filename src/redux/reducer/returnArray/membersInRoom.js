import { STORE_MEMBERS_IN_ROOM, UPDATE_MEMBER_AUTHORITY } from "../../constants/constants";

const initial = [];

const reducer = (state = initial, action) => {
    let { type, members, data } = action;
    switch (type) {
        case STORE_MEMBERS_IN_ROOM:
            return members;
        case UPDATE_MEMBER_AUTHORITY:
            let newStateAfterUpdateMemAuthor = [...state];

            newStateAfterUpdateMemAuthor.forEach((mem, index) => {
                if (mem.user.id === data.memberId)
                    newStateAfterUpdateMemAuthor[index].isAdmin = true;
            });
            return newStateAfterUpdateMemAuthor;
        default:
            break;
    }

    return state;
};

export default reducer;
