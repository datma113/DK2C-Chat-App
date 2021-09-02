import React from "react";
import Carousel from "../../components/Carousel";

const Introducing = () => {
    return (
        <>
            <div className="text-large">
                Chào mừng đến với <b className="text-xlarge"> CDK Chat </b>{" "}
            </div>
            <div className="text-medium text-center w-50">
                Khám phá những tiện ích hỗ trợ làm việc và trò chuyện cùng người thân, bạn bè được
                tối ưu hoá cho máy tính của bạn.
            </div>
            <Carousel />
        </>
    );
};

export default Introducing;
