import axios from "axios";
import { API_SIGN_IN, API_SIGN_OUT } from "../redux/constants/api";
// import cookieClient from 'react-cookie'

function LoginService() {}

LoginService.prototype = {
    login(user) {
        return axios.post(API_SIGN_IN, user, { withCredentials: true }).then((resp) => {
            if (resp.data.accessToken) {
                axios.interceptors.request.use(function (config) {
                    const token = `Bearer ${resp.data.accessToken}`;
                    config.headers.Authorization = token;
                    return config;
                });
            }
            return resp;
        });
    },
    logout() {
        return axios.post(API_SIGN_OUT, {}, { withCredentials: true });
    },
};

export default new LoginService();
