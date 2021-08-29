import axios from "axios";
import { STORE_INBOXS } from "../constants/constants";
import {API_GET_INBOXS} from '../constants/api'

const storeInboxs = (inboxs) => {
    return {
        type: STORE_INBOXS,
        inboxs
    };
};
export const getInboxsFromServer = () => {
     return dispatch => {
          return axios.get(API_GET_INBOXS)
          .then((resp) => {
               dispatch(storeInboxs(resp.data.content))
          })
          .catch(() => {
               dispatch(storeInboxs([]))
          })
     }
};
