import axios from "axios";
import { API_EDIT_ROOM_NAME } from "../constants/api";
import { STORE_ROOM_NAME } from "../constants/constants";

export const storeRoomName = (key, value) => {
    //key and value was created to save a dynamic object
    return {
        type: STORE_ROOM_NAME,
        key,
        value,
    };
};

export const editRoomName = (id, name) => {
    return axios.post(API_EDIT_ROOM_NAME + id, name);
};
