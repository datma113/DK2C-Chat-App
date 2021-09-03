import {
    CLEAR_MESSAGE_FROM_SERVER,
    LOGIN_FAILED,
    LOGIN_SUCCESSFUL,
    LOGOUT_FAILED,
    LOGOUT_SUCCESSFUL,
    SET_MESSAGE_FROM_SERVER,
    STORE_PHONE_AND_PASSWORD_WHEN_LOGIN,
} from "../constants/constants";
import { API_GET_REFRESH_TOKEN, API_GET_USER_WHEN_EXISTS_REFRESH_TOKEN } from "../constants/api";
import LoginService from "../../services/LoginService";
import axios from "axios";

export const storePhoneAndPasswordWhenLogin = (key, value) => {
    //key and value was created to save a dynamic object
    return {
        type: STORE_PHONE_AND_PASSWORD_WHEN_LOGIN,
        key,
        value
    };
};

export const login = (user) => {
    return (dispatch) => {
        return LoginService.login(user)
            .then((resp) => {
                dispatch({
                    type: CLEAR_MESSAGE_FROM_SERVER,
                });

                dispatch({
                    type: LOGIN_SUCCESSFUL,
                    user: resp.data,
                });
                return Promise.resolve();
            })
            .catch((err) => {
                const MESSAGE =
                    (err.response && err.response.data && err.response.data.message) ||
                    err.message ||
                    err.toString();

                dispatch({
                    type: SET_MESSAGE_FROM_SERVER,
                    message: MESSAGE,
                });

                dispatch({
                    type: LOGIN_FAILED,
                });

                return Promise.reject(MESSAGE);
            });
    };
};

export const getTokenWhenRefreshPage = () => {
    return async (dispatch) => {
        const token = await axios
            .get(API_GET_REFRESH_TOKEN, { withCredentials: true })
            .then((resp) => {
                axios.interceptors.request.use(function (config) {
                    const token = `Bearer ${resp.data}`;
                    config.headers.Authorization = token;
                    return config;
                });
                return resp.data;
            })
            .catch(() => "");

        //get user when have token
        axios
            .get(API_GET_USER_WHEN_EXISTS_REFRESH_TOKEN, { token })
            .then((resp) => {
                dispatch({
                    type: LOGIN_SUCCESSFUL,
                    user: resp.data,
                });
                return Promise.resolve();
            })
            .catch(() => {
                dispatch({
                    type: LOGIN_FAILED,
                });
                return Promise.reject();

            });
    };
};

export const logout = () => {
    return (dispatch) => {
        return LoginService.logout()
            .then((resp) => {
                dispatch({
                    type: CLEAR_MESSAGE_FROM_SERVER,
                });

                dispatch({
                    type: LOGOUT_SUCCESSFUL,
                    user: resp.data,
                });
                console.log("succ")
                return Promise.resolve();
            })
            .catch((err) => {
                const MESSAGE =
                    (err.response && err.response.data && err.response.data.message) ||
                    err.message ||
                    err.toString();
                console.log(MESSAGE)
                dispatch({
                    type: SET_MESSAGE_FROM_SERVER,
                    message: MESSAGE,
                });

                dispatch({
                    type: LOGOUT_FAILED,
                });

                return Promise.reject(MESSAGE);
            });
    };
};
