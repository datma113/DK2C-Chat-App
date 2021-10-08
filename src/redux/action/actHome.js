import axios from "axios";
import {
    INITIALIZE_MESSAGE_IN_BOX_CHAT,
    STORE_CURRENT_INBOX,
    STORE_CURRENT_NUMBER_ID_INBOX,
    STORE_CURRENT_ROOM_ID,
    STORE_INBOXS,
    STORE_MESSAGE_IN_BOX_CHAT,
    STORE_OLDER_INBOXS,
} from "../constants/constants";
import {
    API_GET_FILE_URL_WHEN_SENDED,
    API_GET_INBOXS,
    API_GET_MESSAGE_IN_CHAT_BOX,
} from "../constants/api";

export const storeInboxs = (inboxs) => {
    return {
        type: STORE_INBOXS,
        inboxs,
    };
};

const storeOlderInboxs = (olderInboxs) => {
    return {
        type: STORE_OLDER_INBOXS,
        olderInboxs,
    };
};

export const getOlderInboxsFromServer = (page) => {
    return (dispatch) => {
        return axios
            .get(API_GET_INBOXS + "?page=" + page)
            .then((resp) => {
                dispatch(storeOlderInboxs(resp.data.content));
            })
            .catch(() => dispatch(storeInboxs([])));
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

export const storeMessageInBoxChat = (message) => {
    return {
        type: STORE_MESSAGE_IN_BOX_CHAT,
        message,
    };
};

export const getMessageInBoxChat = (inboxId, page = 0) => {
    return (dispatch) => {
        return axios
            .get(API_GET_MESSAGE_IN_CHAT_BOX + inboxId + `?page=${page}`)
            .then((resp) => {
                if (page === 0)
                    dispatch({
                        type: INITIALIZE_MESSAGE_IN_BOX_CHAT,
                        message: resp.data.content,
                    });
                else dispatch(storeMessageInBoxChat(resp.data.content));
            })
            .catch(() => dispatch(storeMessageInBoxChat([])));
    };
};

export const storeCurrentIdOfInbox = (id) => {
    return {
        type: STORE_CURRENT_NUMBER_ID_INBOX,
        id,
    };
};

export const storeCurrentRoomId = (id) => {
    return {
        type: STORE_CURRENT_ROOM_ID,
        id,
    };
};

export const storeCurrentInbox = (currentInbox) => {
    return {
        type: STORE_CURRENT_INBOX,
        currentInbox,
    };
};

export const getURLOfFileWhenSended = (files) => {
    const CONFIG_HEADER_MULTIPART_FORM_DATA = {
        headers: {
            "Content-Type": "multipart/form-data",
        },
    };
    return axios
        .post(API_GET_FILE_URL_WHEN_SENDED, files, CONFIG_HEADER_MULTIPART_FORM_DATA)
        .then((resp) => {
            return Promise.resolve(resp.data);
        })
        .catch((err) => {
            const MESSAGE =
                (err.response && err.response.data && err.response.data.message) ||
                err.message ||
                err.toString();

            return Promise.reject(MESSAGE);
        });
};
