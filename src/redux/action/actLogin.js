import {
    STORE_PHONE_AND_PASSWORD_WHEN_LOGIN,
    STORE_USER_INFO_WHEN_REGISTER,
} from "../constants/constants";
import LoginService from "../../services/LoginService";

export const storePhoneAndPasswordWhenLogin = (key, value) => {
    //key and value was created to save a dynamic object
    return {
        type: STORE_PHONE_AND_PASSWORD_WHEN_LOGIN,
        key,
        value,
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

export const login = (user) => {
    return LoginService.login(user)
        .then((resp) => {
            console.log(resp.data)
            return Promise.resolve()
        })
        .catch((err) => {
            const MESSAGE =
                (err.response && err.response.data && err.response.data.message) ||
                err.message ||
                err.toString();

            console.log(MESSAGE);
            return Promise.reject();
        });
};
