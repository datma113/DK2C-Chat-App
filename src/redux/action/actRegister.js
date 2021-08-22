import { CLEAR_USER_INFO_WHEN_DONE_REGISTER, STORE_USER_INFO_WHEN_DONE_REGISTER_STEP_1 } from "../constants/constants";
import RegisterService from "../../services/RegisterService";

export const registerUserAccountStep1 = (user) => {
    return RegisterService.registerUserAccountStep1(user)
        .then((resp) => {
            return Promise.resolve(resp.data);
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

export const registerUserAccountStep1Redo = (user) => {
     return RegisterService.registerUserAccountStep1Redo(user)
         .then((resp) => {
             return Promise.resolve(resp.data);
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


export const registerUserAccountStep2 = (user) => {
    return RegisterService.registerUserAccountStep2(user)
    .then(() => {
        return Promise.resolve();
    })
    .catch((err) => {
        const MESSAGE =
            (err.response && err.response.data && err.response.data.message) ||
            err.message ||
            err.toString();

        console.log(MESSAGE);
        return Promise.reject();
    });
}

export const registerUserAccountStep3 = (user) => {
    return RegisterService.registerUserAccountStep3(user)
    .then(() => {
        return Promise.resolve();
    })
    .catch((err) => {
        const MESSAGE =
            (err.response && err.response.data && err.response.data.message) ||
            err.message ||
            err.toString();

        console.log(MESSAGE);
        return Promise.reject();
    });
}


export const storeUserInfoWhenDoneARegisterStep = (user) => {
    return {
         type: STORE_USER_INFO_WHEN_DONE_REGISTER_STEP_1,
         user
    }
}

export const clearUserInfoWhenDoneRegister = () => {
    return {
        type: CLEAR_USER_INFO_WHEN_DONE_REGISTER
    }
}
