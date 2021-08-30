import React from "react";
import { useSelector } from "react-redux";

const HeaderOfBoxChat = () => {
    const currentInbox = useSelector(state => state.currentInbox)
    
    return (
        <div>
            <div className="row header-box-chat ">
                <div className="col-1 header-box-chat__img">
                    <img src={currentInbox.imgUrl} alt="" />
                </div>
                <div className="col-9 font-weight-bold">{currentInbox.displayName}</div>
                <div className="col-2 header-box-chat__icon">
                    <i className="fas fa-search"></i>
                    <i className="fas fa-toggle-off"></i>
                </div>
            </div>
        </div>
    );
};

export default HeaderOfBoxChat;
