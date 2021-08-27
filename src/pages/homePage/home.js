import axios from "axios";
import React from "react";
import Cookies from "universal-cookie";
const home = () => {
    const getRefreshToken = () => {

        axios
            .get("http://localhost:8080/api/auth/refreshtoken", {
                withCredentials: true,
            })
            .then((resp) => {       
                console.log(resp);
            })
            .catch((err) => {
                   const MESSAGE =
                    (err.response && err.response.data && err.response.data.message) ||
                    err.message ||
                    err.toString();
                    console.log(MESSAGE)
                
            })
    };
    return (
        <div>
            <div className="btn btn-danger btn-welcome" onClick={() => getRefreshToken()}>
                get refresh token
            </div>
        </div>
    );
};

export default home;
