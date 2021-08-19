import React from "react";
import welcome from "../../assets/image/welcome.jpg";
import { Link } from "react-router-dom";

const Welcome = () => {
    return (
        <div className="d-flex justify-content-center mt-5">
            <div className="col-lg-4 d-flex flex-column align-items-center justify-content-center welcome-container">
                <img src={welcome} alt="" className="welcome-container__image" />

                <div className="text-title">Xin chào !!</div>
                <p>Chat app umbala của tui nè ghê chưa má?</p>
                <Link to="/login">
                    <div className="btn btn-secondary btn-welcome mb-4">Đăng nhập</div>
                </Link>
                <div className="btn btn-light btn-welcome">Bạn chưa có tài khoản ?</div>
            </div>
        </div>
    );
};

export default Welcome;
