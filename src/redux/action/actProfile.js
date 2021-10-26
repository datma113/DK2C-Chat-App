import axios from "axios";
import { API_CHANGE_PASSWORD, API_CHANGE_USER_IMAGE, API_GET_USER_INFO } from "../constants/api";
import { STORE_OLD_AND_NEW_PASSWORD, STORE_USER_INFO } from "../constants/constants";
export const storeUserInfo = (user_info) => {
    return {
        type: STORE_USER_INFO,
        user_info,
    };
};
export const getUserInfoFromServer = () => {
    return async (dispatch) => {
        const user_info = await axios
            .get(API_GET_USER_INFO)
            .then((resp) => {
                return resp.data;
            })
            .catch(() => dispatch(storeUserInfo({})));
        dispatch(storeUserInfo(user_info));
    };
};

export const storeOldAndNewPassword = (key, value) => {
    //key and value was created to save a dynamic object
    return {
        type: STORE_OLD_AND_NEW_PASSWORD,
        key,
        value,
    };
};

export const changePassword = (userPassword) => {
    return (dispatch) =>
        axios
            .put(API_CHANGE_PASSWORD, userPassword)
            .then((resp) => {
                dispatch(storeOldAndNewPassword(resp.data));
                return Promise.resolve();
            })
            .catch((err) => {
                const MESSAGE =
                    (err.response && err.response.data && err.response.data.message) ||
                    err.message ||
                    err.toString();

                return Promise.reject(MESSAGE);
            });
};

export const changeUserImage = (image) => {
    const CONFIG_HEADER_MULTIPART_FORM_DATA = {
        headers: {
            "Content-Type": "multipart/form-data",
        },
    };
    return (dispatch) =>
        axios
            .put(API_CHANGE_USER_IMAGE, image, CONFIG_HEADER_MULTIPART_FORM_DATA)
            .then((resp) => {
                console.log(resp.data);
            })
            .catch((err) => {
                console.log(err);
            });
};
