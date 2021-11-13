import {
    STORE_MEMBERS_IN_ROOM,
    UPDATE_BUTTON_WHEN_SENT_REQUEST,
    UPDATE_MEMBER_AUTHORITY,
} from "../../constants/constants";

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
        case UPDATE_BUTTON_WHEN_SENT_REQUEST:
            const newStateAfterReceivedRequest = [...state];
            newStateAfterReceivedRequest.forEach((mem, index) => {
                if (mem.user.id === data.to.id) newStateAfterReceivedRequest[index].user = data.to;
            });
            return newStateAfterReceivedRequest;

        default:
            break;
    }

    return state;
};

export default reducer;
