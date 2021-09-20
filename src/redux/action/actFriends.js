import axios from "axios";
import { API_GET_FRIENDS_LIST } from "../constants/api";
import {
   GET_FRIENDS_LIST_FROM_SERVER,STORE_FRIENDS_LIST
} from "../constants/constants";

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
               console.log(resp.data.content[0].friend.imageUrl)
               // console.log(API_GET_FRIENDS_LIST)
           })
           .catch(() => dispatch(storeFriendsList([])));
   };
}