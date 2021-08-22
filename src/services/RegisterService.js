import axios from "axios";

function RegisterService() {}

const URL = "http://localhost:8080/api/auth/signup/";
const SAVE_IMFORMATION = "save_information";
const CHECK_EMAIL = 'send_vetification_code'
const VERIFY = 'verify'

RegisterService.prototype = {
    registerUserAccountStep1(user) {
        return axios.post(URL + SAVE_IMFORMATION, user);
    },
    
    registerUserAccountStep1Redo(user) {
        return axios.put(URL + SAVE_IMFORMATION, user);
    },

    registerUserAccountStep2(user) {
        return axios.put(URL + CHECK_EMAIL, user);
    },

    registerUserAccountStep3(user) {
        return axios.post(URL + VERIFY, user)
    }
};

export default new RegisterService();
