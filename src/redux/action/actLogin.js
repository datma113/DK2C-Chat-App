import {
    STORE_PHONE_AND_PASSWORD_WHEN_LOGIN,
    STORE_USER_INFO_WHEN_REGISTER,
} from "../constants/constants";

export const storePhoneAndPasswordWhenLogin = (key, value) => {
    //key and value was created to save a dynamic object
    return {
        type: STORE_PHONE_AND_PASSWORD_WHEN_LOGIN,
        key,
        value
    };
};

export const storeUserInfoWhenRegister = (key, value) => {
    //key and value was created to save a dynamic object
    return {
        type: STORE_USER_INFO_WHEN_REGISTER,
        key,
        value
    };
};
