import React from "react";

const Welcome = () => {
    return (
        <div className="d-flex justify-content-center">
            <div className="col-lg-5 d-flex flex-column align-items-center justify-content-center welcome-container">
                <div className="welcome-container__image"></div>
                <p className="text-title">Xin chào !!</p>
                <p>Chat app umbala của tui nè ghê chưa má?</p>
               <div className="btn btn-primary btn-large">Bạn đã có tài khoản?</div>
            </div>
        </div>
    );
};

export default Welcome;
