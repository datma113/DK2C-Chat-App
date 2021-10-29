import React from "react";
import AddFriendModal from "../../modal/AddFriendModal";
import CreateRoomWithMemsModal from "../../modal/CreateRoomWithMemsModal";

const HeaderOfInboxSide = () => {
    return (
        <div className="header-inbox-container center">
            <input type="text" className="form-control" placeholder="Tìm kiếm..." />
            <CreateRoomWithMemsModal />
            <AddFriendModal />
        </div>
    );
};

export default HeaderOfInboxSide;
