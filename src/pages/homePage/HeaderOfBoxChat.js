import React from "react";
import { useSelector } from "react-redux";

const HeaderOfBoxChat = () => {
    const currentInbox = useSelector((state) => state.currentInbox);
    const limidDisplayName = (string) => {
        return string.length > 20 ? string.slice(0, 25) + "..." : string;
    };
    return (
        <div>
            <div className="header-box-chat">
                <div className="header-box-chat__img bg-dark">
                    <img src={currentInbox.imgUrl} alt="" />
                </div>
                <div className="header-box-chat__title font-weight-bold">
                    {limidDisplayName(currentInbox.displayName)}
                </div>
                <div className=" header-box-chat__icon">
                    <i className="fas fa-search"></i>
                    <i className="fas fa-toggle-off"></i>
                </div>
            </div>
        </div>
    );
};

export default HeaderOfBoxChat;
