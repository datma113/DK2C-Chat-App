import axios from "axios";
import { API_GET_USER_INFO } from "../constants/api";
import { STORE_USER_INFO } from "../constants/constants";
export const storeUserInfo = (user_info) => {
    return {
        type: STORE_USER_INFO,
        user_info,
    };
};
export const getUserInfoFromServer = () => {
    return async (dispatch) => {
        const user_info = await axios
            .get(API_GET_USER_INFO)
            .then((resp) => {

                return resp.data
            })
            .catch(() => dispatch(storeUserInfo({})));
        dispatch(storeUserInfo(user_info))
    };
}