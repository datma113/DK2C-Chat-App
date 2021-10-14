import axios from "axios";
import {
    API_GET_FRIENDS_LIST,
    API_GET_FRIENDS_REQUEST,
    API_GET_INBOX_BY_FRIEND_ID,
    API_INBOXS,
} from "../constants/api";
import {
    STORE_FRIENDS_LIST,
    STORE_FRIENDS_REQUEST,
    STORE_GROUPS_LIST,
} from "../constants/constants";
import { storeCurrentIdOfInbox, storeCurrentInbox, storeCurrentRoomId } from "./actHome";

export const storeFriendsList = (friends) => {
    return {
        type: STORE_FRIENDS_LIST,
        friends,
    };
};
export const getFriendsListFromServer = () => {
    return (dispatch) => {
        return axios
            .get(API_GET_FRIENDS_LIST)
            .then((resp) => {
                dispatch(storeFriendsList(resp.data.content));
                return Promise.resolve(resp.data.content);
            })
            .catch(() => dispatch(storeFriendsList([])));
    };
};
export const storeFriendsRequest = (friendsRequest) => {
    return {
        type: STORE_FRIENDS_REQUEST,
        friendsRequest,
    };
};
export const getFriendsRequestFromServer = () => {
    return (dispatch) => {
        return axios
            .get(API_GET_FRIENDS_REQUEST)
            .then((resp) => {
                dispatch(storeFriendsRequest(resp.data.content));
            })
            .catch(() => dispatch(storeFriendsRequest([])));
    };
};
export const storeGroupsChatList = (groups) => {
    return {
        type: STORE_GROUPS_LIST,
        groups,
    };
};
export const getGroupsChatList = () => {
    return (dispatch) => {
        return axios
            .get(API_INBOXS + "?type=GROUP")
            .then((resp) => {
                dispatch(storeGroupsChatList(resp.data.content));
            })
            .catch(() => dispatch(storeGroupsChatList([])));
    };
};
export const acceptFriendRequest = (id) => {
    return (dispatch) => {
        return axios
            .put(API_GET_FRIENDS_REQUEST + id)
            .then((resp) => {})
            .catch(() => dispatch(storeGroupsChatList([])));
    };
};
export const declineFriendRequest = (id) => {
    return (dispatch) => {
        return axios
            .delete(API_GET_FRIENDS_REQUEST + id)
            .then((resp) => {
                return resp;
            })
            .catch(() => dispatch(storeGroupsChatList([])));
    };
};

const gotoChatInfriendList = (inbox, dispatch) => {
    dispatch(storeCurrentIdOfInbox(inbox.id));
    dispatch(storeCurrentRoomId(inbox.room.id));

    const sender = inbox.room.to;
    const currentInbox = {
        senderId: sender.id,
        imgUrl: sender.imageUrl,
        displayName: sender.displayName,
        type: inbox.room.type,
    };
    dispatch(storeCurrentInbox(currentInbox));
};

export const getInboxByFriendId = (friendId) => {
    const THE_FIRST_TIME_INBOX = "THE_FIRST_TIME_INBOX";
    return (dispatch) => {
        return axios
            .get(API_GET_INBOX_BY_FRIEND_ID + friendId)
            .then((resp) => {
                const INBOX = resp.data;
                if (!INBOX.id) return Promise.reject(THE_FIRST_TIME_INBOX);
                else {
                    gotoChatInfriendList(INBOX, dispatch);
                }
                return Promise.resolve();
            })
            .catch((err) => {
                if (err === THE_FIRST_TIME_INBOX) {
                    axios.post(API_GET_INBOX_BY_FRIEND_ID + friendId).then((resp) => {
                        const NEW_INBOX = resp.data;
                        gotoChatInfriendList(NEW_INBOX, dispatch);
                    });
                } else {
                    console.log(err);
                    return Promise.reject()
                }
            });
    };
};
