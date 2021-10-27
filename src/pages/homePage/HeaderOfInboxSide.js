import React from "react";
import AddFriend from "../../modal/AddFriend";
import CreateRoomWithMems from "../../modal/CreateRoomWithMems";

const HeaderOfInboxSide = () => {
    return (
        <div className="header-inbox-container center">
            <input type="text" className="form-control" placeholder="Tìm kiếm..." />
            <CreateRoomWithMems />
            <AddFriend />
        </div>
    );
};

export default HeaderOfInboxSide;
