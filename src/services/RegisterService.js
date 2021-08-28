import axios from "axios";

function RegisterService() {}

const URL = "http://localhost:8080/api/auth/signup/";
const SAVE_IMFORMATION = "save_information";
const CHECK_EMAIL = 'send_vetification_code'
const VERIFY = 'verify'

RegisterService.prototype = {
    registerUserAccountInitialStep(user) {
        return axios.post(URL + SAVE_IMFORMATION, user);
    },
    
    registerUserAccountInitialStepRedo(user) {
        return axios.put(URL + SAVE_IMFORMATION, user);
    },

    registerUserAccountVerifyEmailStep(user) {
        return axios.put(URL + CHECK_EMAIL, user);
    },

    registerUserAccountVerifyOtpStep(user) {
        return axios.post(URL + VERIFY, user)
    }
};

export default new RegisterService();
