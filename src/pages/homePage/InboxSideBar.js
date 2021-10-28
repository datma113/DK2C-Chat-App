import React from "react";
import HeaderOfInboxSide from "./HeaderOfInboxSide";
import InboxList from "./InboxList";

const InboxSideBar = () => {
    return (
        <div className="inbox-side-bar">
            <HeaderOfInboxSide />
            <InboxList />
        </div>
    );
};

export default InboxSideBar;
