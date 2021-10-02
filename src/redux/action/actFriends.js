import axios from "axios";
import { API_GET_FRIENDS_LIST,API_GET_FRIENDS_REQUEST ,API_GET_INBOXS} from "../constants/api";
import {
   STORE_FRIENDS_LIST, STORE_FRIENDS_REQUEST, STORE_GROUPS_LIST,
} from "../constants/constants";

export const storeFriendsList = (friends) => {
    console.log("store actFriend:"+ friends.length)
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
               console.log("api:"+ resp.data.content.length)
         
           })
           .catch(() => dispatch(storeFriendsList([])));
   };
}
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
                console.log(resp.data.content)
            })
            .catch(() => dispatch(storeFriendsRequest([])));
    };
 }
 export const storeGroupsChatList = (groups) => {
    return {
        type: STORE_GROUPS_LIST,
        groups,
    };
 };
 export const getGroupsChatList = () => {
    return (dispatch) => {
        return axios
            .get(API_GET_INBOXS+"?type=GROUP")
            .then((resp) => {
                dispatch(storeGroupsChatList(resp.data.content));
               
               
            })
            .catch(() => dispatch(storeGroupsChatList([])));
    };
 }
 export const acceptFriendRequest = (id) => {
    return (dispatch) => {
        return axios
            .put(API_GET_FRIENDS_REQUEST+id)
            .then((resp) => {
                // console.log("thành công")
               
            })
            .catch(() => dispatch(storeGroupsChatList([])));
    };
 }
 export const declineFriendRequest = (id) => {
    return (dispatch) => {
        return axios
            .delete(API_GET_FRIENDS_REQUEST+id)
            .then((resp) => {
                // console.log("thành công")
               
            })
            .catch(() => dispatch(storeGroupsChatList([])));
    };
 }