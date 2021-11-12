import React from "react";
import { useDispatch } from "react-redux";
import AddFriendModal from "../../modal/AddFriendModal";
import CreateRoomWithMemsModal from "../../modal/CreateRoomWithMemsModal";
import { searchInboxs } from "../../redux/action/actHome";

const HeaderOfInboxSide = () => {
    const dispatch = useDispatch();
    const searchInboxsHandle = (text) => {
        dispatch(searchInboxs(text));
    };

    return (
        <div className="header-inbox-container center">
            <input
                type="text"
                className="form-control"
                placeholder="Tìm kiếm..."
                onChange={(e) => searchInboxsHandle(e.target.value)}
            />
            <CreateRoomWithMemsModal />
            <AddFriendModal />
        </div>
    );
};

export default HeaderOfInboxSide;
