import {
    STORE_MEMBERS_IN_ROOM,
    UPDATE_BUTTON_WHEN_SENT_REQUEST,
    UPDATE_MEMBERS_WHEN_DELETE_MEM,
    UPDATE_MEMBER_AUTHORITY,
    UPDATE_MEMBER_AFTER_RECALL_ROLE,
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
        case UPDATE_MEMBER_AFTER_RECALL_ROLE:
            let newStateAfterRecallRole = [...state];

            newStateAfterRecallRole.forEach((mem, index) => {
                if (mem.user.id === data.memberId) newStateAfterRecallRole[index].isAdmin = false;
            });

            return newStateAfterRecallRole;
        case UPDATE_BUTTON_WHEN_SENT_REQUEST:
            const newStateAfterReceivedRequest = [...state];
            newStateAfterReceivedRequest.forEach((mem, index) => {
                if (mem.user.id === data.to.id) newStateAfterReceivedRequest[index].user = data.to;
            });
            return newStateAfterReceivedRequest;

        case UPDATE_MEMBERS_WHEN_DELETE_MEM:
            return data;
        default:
            break;
    }

    return state;
};

export default reducer;
