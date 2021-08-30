import axios from "axios";
import { STORE_INBOXS, STORE_MESSAGE_IN_BOX_CHAT } from "../constants/constants";
import { API_GET_INBOXS, API_GET_MESSAGE_IN_CHAT_BOX } from "../constants/api";

const storeInboxs = (inboxs) => {
    return {
        type: STORE_INBOXS,
        inboxs,
    };
};

export const getInboxsFromServer = () => {
    return (dispatch) => {
        return axios
            .get(API_GET_INBOXS)
            .then((resp) => {
                dispatch(storeInboxs(resp.data.content));
            })
            .catch(() => dispatch(storeInboxs([])));
    };
};

const storeMessageInBoxChat = (message) => {
    return {
        type: STORE_MESSAGE_IN_BOX_CHAT,
        message,
    };
};

export const getMessageInBoxChat = (inboxId) => {
    return (dispatch) => {
        return axios
            .get(API_GET_MESSAGE_IN_CHAT_BOX + inboxId)
            .then((resp) => {
                dispatch(storeMessageInBoxChat(resp.data.content));
            })
            .catch(() => dispatch(storeMessageInBoxChat([])));
    };
};
