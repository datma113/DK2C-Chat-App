import React from "react";

const Welcome = () => {
    return (
        <div className="d-flex justify-content-center mt-5">
            <div className="col-lg-4 d-flex flex-column align-items-center justify-content-center welcome-container">
                <div className="welcome-container__image"></div>
                <div className="text-title">Xin chào !!</div>
                <p>Chat app umbala của tui nè ghê chưa má?</p>
               <div className="btn btn-secondary btn-welcome mb-4">Đăng nhập</div>
               <div className="btn btn-light btn-welcome">Bạn chưa có tài khoản ?</div>
            </div>
        </div>
    );
};

export default Welcome;
