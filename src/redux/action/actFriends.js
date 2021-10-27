import axios from "axios";
import {
    API_FRIENDS,
    API_GET_FRIENDS_REQUEST,
    API_GET_INBOX_BY_FRIEND_ID,
    API_GET_USER_PROFILE,
    API_INBOXS,
} from "../constants/api";
import {
    STORE_FRIENDS_LIST,
    STORE_FRIENDS_REQUEST,
    STORE_FRIEND_PROFILE,
    STORE_GROUPS_LIST,
    UPDATE_FRIENDS_AFTER_DELETE,
    UPDATE_FRIEND_AFTER_REQUEST,
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
            .get(API_FRIENDS)
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
            .then(() => {
                
                dispatch({
                    type: UPDATE_FRIEND_AFTER_REQUEST,
                    id,
                });
            })
            .catch(() => dispatch(storeGroupsChatList([])));
    };
};
export const declineFriendRequest = (id) => {
    return (dispatch) => {
        return axios
            .delete(API_GET_FRIENDS_REQUEST + id)
            .then((resp) => {
               
                dispatch({
                    type: UPDATE_FRIEND_AFTER_REQUEST,
                    id,
                });
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
                    return Promise.reject();
                }
            });
    };
};

const storeFriendProfile = (profile) => {
    return {
        type: STORE_FRIEND_PROFILE,
        profile,
    };
};

export const getUserProfile = (userId) => {
    return (dispatch) =>
        axios
            .get(API_GET_USER_PROFILE + userId)
            .then((resp) => {
                dispatch(storeFriendProfile(resp.data));
                return Promise.resolve();
            })
            .catch((err) => {
                console.log(err);
            });
};

export const deleteFriends = (friendId) => {
    return (dispatch) =>
        axios
            .delete(API_FRIENDS + friendId)
            .then((resp) => {
                dispatch({
                    type: UPDATE_FRIENDS_AFTER_DELETE,
                    friendId,
                });
                return Promise.resolve();
            })
            .catch((err) => {
                console.log(err);
            });
};
