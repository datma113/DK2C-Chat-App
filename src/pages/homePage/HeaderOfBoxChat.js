import React from "react";
import { useSelector } from "react-redux";

const HeaderOfBoxChat = () => {
    const currentInbox = useSelector((state) => state.currentInbox);
    const limitDisplayName = (string) => {
        if (string) {
            return string.length > 20 ? string.slice(0, 25) + "..." : string;
        }
        return "";
    };
    return (
        <div>
            <div className="header-box-chat">
                <div className="header-box-chat__img bg-dark">
                    <img src={currentInbox.imgUrl} alt="" />
                </div>
                <div className="header-box-chat__title font-weight-bold">
                    {limitDisplayName(currentInbox.displayName)}
                </div>
                <div className=" header-box-chat__icon">
                 
                </div>
            </div>
        </div>
    );
};

export default HeaderOfBoxChat;
