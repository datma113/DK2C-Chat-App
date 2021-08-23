import {
    CLEAR_USER_INFO_WHEN_DONE_REGISTER,
    STORE_USER_INFO_WHEN_DONE_A_REGISTER_STEP,
    SET_MESSAGE_FROM_SERVER,
    CLEAR_MESSAGE_FROM_SERVER,
} from "../constants/constants";
import RegisterService from "../../services/RegisterService";

export const registerUserAccountStep1 = (user) => {
    return (dispatch) => {
        return RegisterService.registerUserAccountStep1(user)
            .then((resp) => {
                dispatch({
                    type: CLEAR_MESSAGE_FROM_SERVER,
                });
                return Promise.resolve(resp.data);
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
                return Promise.reject();
            });
    };
};

export const registerUserAccountStep1Redo = (user) => {
    return (dispatch) => {
        return RegisterService.registerUserAccountStep1Redo(user)
            .then((resp) => {
                dispatch({
                    type: CLEAR_MESSAGE_FROM_SERVER,
                });
                return Promise.resolve(resp.data);
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
                return Promise.reject();
            });
    };
};

export const registerUserAccountStep2 = (user) => {
    return (dispatch) => {
        return RegisterService.registerUserAccountStep2(user)
            .then(() => {
                dispatch({
                    type: CLEAR_MESSAGE_FROM_SERVER,
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

                return Promise.reject();
            });
    };
};

export const registerUserAccountStep3 = (user) => {
    console.log(user)
    return (dispatch) => {
        return RegisterService.registerUserAccountStep3(user)
            .then(() => {
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

                return Promise.reject();
            });
    };
};

export const storeUserInfoWhenDoneARegisterStep = (user) => {
    return {
        type: STORE_USER_INFO_WHEN_DONE_A_REGISTER_STEP,
        user
    };
};

export const clearUserInfoWhenDoneRegister = () => {
    return {
        type: CLEAR_USER_INFO_WHEN_DONE_REGISTER,
    };
};
