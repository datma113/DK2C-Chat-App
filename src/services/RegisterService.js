import axios from "axios";

function RegisterService() {}

const URL = "http://localhost:8080/api/auth/signup/";
const SAVE_IMFORMATION = "save_information";

RegisterService.prototype = {
    registerUserAccountStep1(user) {
        return axios.post(URL + SAVE_IMFORMATION, user);
    },

    registerUserAccountStep1Redo(user) {
        return axios.put(URL + SAVE_IMFORMATION, user);
    },
};

export default new RegisterService();
