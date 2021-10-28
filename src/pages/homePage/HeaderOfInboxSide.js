import React from "react";
import AddFriend from "../../modal/AddFriend";
import CreateRoomWithMemsModal from "../../modal/CreateRoomWithMemsModal";

const HeaderOfInboxSide = () => {
    return (
        <div className="header-inbox-container center">
            <input type="text" className="form-control" placeholder="Tìm kiếm..." />
            <CreateRoomWithMemsModal />
            <AddFriend />
        </div>
    );
};

export default HeaderOfInboxSide;
