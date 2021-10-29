import React from "react";
import Carousel from "../../components/Carousel";

const Introducing = () => {
    return (
        <div className="introducing h-100">
            <div className="center text-large text-center mt-5">
                Chào mừng đến với &nbsp; <span className="text-large font-weight-bold"> CDK Chat </span>{" "}
            </div>
            <div className="center">
                <div className="center text-medium text-center introducing-text">
                    Khám phá những tiện ích hỗ trợ làm việc và trò chuyện cùng người thân, bạn bè
                    được tối ưu hoá cho máy tính của bạn.
                </div>
            </div>

            <Carousel />
        </div>
    );
};

export default Introducing;
