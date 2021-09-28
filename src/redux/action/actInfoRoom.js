import axios from "axios";
import { API_EDIT_ROOM_NAME } from "../constants/api";
import { STORE_ROOM_NAME, UPDATE_ROOM_NAME } from "../constants/constants";

export const storeRoomName = (key, value) => {
    //key and value was created to save a dynamic object
    return {
        type: STORE_ROOM_NAME,
        key,
        value,
    };
};

export const editRoomName = (id, name) => {
    return (dispatch) =>
        axios.post(API_EDIT_ROOM_NAME + id, name).then((resp) => {
            dispatch({
                type: UPDATE_ROOM_NAME,
                roomId: id,
                newRoomName: resp.data,
            });

            return Promise.resolve(resp.data);
        });
};
