import React from "react";
import Carousel from "../../components/Carousel";

const Introducing = () => {
    return (
        <div className="introducing center flex-column"> 
            <div className=" text-large text-center">
                Chào mừng đến với <br/> <b className="text-large"> CDK Chat </b>{" "}
            </div>
            <div className="text-medium text-center introducing-text">
                Khám phá những tiện ích hỗ trợ làm việc và trò chuyện cùng người thân, bạn bè được
                tối ưu hoá cho máy tính của bạn.
            </div>
            <Carousel />
        </div>
    );
};

export default Introducing;
