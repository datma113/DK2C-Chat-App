import React from "react";
import welcome from "../../assets/image/welcome.jpg";
import { Link } from "react-router-dom";
import { ANIMATE_ZOOM_IN } from "../../animate";

const Welcome = () => {
    return (
        <div className={`center ${ANIMATE_ZOOM_IN} `}>
            <div className="col-xl-4 col-lg-5 col-sm-6 center flex-column welcome-container">
                <img src={welcome} alt="" className="welcome-container__image" />

                <div className="text-title ">Xin chào !!</div>
                <p className="text-center">Chào mừng bạn đến với ứng dụng chat DKC</p>
                <Link to="/login">
                    <div className="btn btn-secondary btn-welcome mb-4">Đăng nhập</div>
                </Link>
                <Link to="/register">
                    <div className="btn btn-light btn-welcome">Bạn chưa có tài khoản ?</div>
                </Link>
            </div>
        </div>
    );
};

export default Welcome;
