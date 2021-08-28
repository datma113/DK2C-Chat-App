import axios from "axios";

function LoginService() {}

const URL = "http://localhost:8080/api/auth/signin";
LoginService.prototype = {
    login(user) {
        return axios.post(URL, user, { withCredentials: true }).then((resp) => {
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
