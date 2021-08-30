import axios from "axios";
import { API_SIGN_IN } from "../redux/constants/api";
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
};

export default new LoginService();
