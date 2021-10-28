import { STORE_FRIENDS_LIST, UPDATE_FRIENDS_AFTER_DELETE } from "../../constants/constants";
const initial = [];
const reducer = (state = initial, action) => {
    let { type, friends, friendId } = action;

    switch (type) {
        case STORE_FRIENDS_LIST:
            return friends;

        case UPDATE_FRIENDS_AFTER_DELETE:
            let friendsMap = state.map((el) => el.friend.id);
            const indexOffriendDeleted = friendsMap.indexOf(friendId);
            state.splice(indexOffriendDeleted, 1);
            return state;

        default:
            return state;
    }
};
export default reducer;
