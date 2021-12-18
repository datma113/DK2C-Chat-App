import {
    CLEAR_USER_INFO_WHEN_DONE_REGISTER,
    STORE_USER_INFO_WHEN_DONE_A_REGISTER_STEP,
    SET_MESSAGE_FROM_SERVER,
    CLEAR_MESSAGE_FROM_SERVER,
    STORE_USER_INFO_WHEN_REGISTER,
} from "../constants/constants";
import RegisterService from "../../services/RegisterService";

export const registerUserAccountInitialStep = (user) => {
    return (dispatch) => {
        return RegisterService.registerUserAccountInitialStep(user)
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
                return Promise.reject(MESSAGE);
            });
    };
};

export const registerUserAccountInitialStepRedo = (user) => {
    return (dispatch) => {
        return RegisterService.registerUserAccountInitialStepRedo(user)
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
                return Promise.reject(MESSAGE);
            });
    };
};

export const registerUserAccountVerifyEmailStep = (user) => {
    return (dispatch) => {
        return RegisterService.registerUserAccountVerifyEmailStep(user)
            .then(resp => {
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

                return Promise.reject(MESSAGE);
            });
    };
};

export const registerUserAccountVerifyOtpStep = (user) => {
    return (dispatch) => {
        return RegisterService.registerUserAccountVerifyOtpStep(user)
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

                return Promise.reject(MESSAGE);
            });
    };
};

export const resendOTPMail = (user) => {
    return (dispatch) => {
        return RegisterService.resendOTPEmail(user)
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

                return Promise.reject(MESSAGE);
            });
    };
};

export const verifyWithPhone = (user) => {
    return (dispatch) => {
        return RegisterService.verifyWithPhone(user)
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

                return Promise.reject(MESSAGE);
            });
    };
};

export const storeUserInfoWhenDoneARegisterStep = (user) => {
    return {
        type: STORE_USER_INFO_WHEN_DONE_A_REGISTER_STEP,
        user,
    };
};

export const clearUserInfoWhenDoneRegister = () => {
    return {
        type: CLEAR_USER_INFO_WHEN_DONE_REGISTER,
    };
};

export const storeUserInfoWhenRegister = (key, value) => {
    //key and value was created to save a dynamic object
    return {
        type: STORE_USER_INFO_WHEN_REGISTER,
        key,
        value,
    };
};
