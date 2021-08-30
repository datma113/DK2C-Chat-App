import axios from "axios";
import {
    API_SIGN_UP_CHECK_MAIL,
    API_SIGN_UP_IMFORMATION,
    API_SIGN_UP_VERIFY,
} from "../redux/constants/api";
function RegisterService() {}

RegisterService.prototype = {
    registerUserAccountInitialStep(user) {
        return axios.post(API_SIGN_UP_IMFORMATION, user);
    },

    registerUserAccountInitialStepRedo(user) {
        return axios.put(API_SIGN_UP_IMFORMATION, user);
    },

    registerUserAccountVerifyEmailStep(user) {
        return axios.put(API_SIGN_UP_CHECK_MAIL, user);
    },

    registerUserAccountVerifyOtpStep(user) {
        return axios.post(API_SIGN_UP_VERIFY, user);
    },
};

export default new RegisterService();
