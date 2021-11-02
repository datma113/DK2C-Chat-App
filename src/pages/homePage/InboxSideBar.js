import React from "react";
import HeaderOfInboxSide from "./HeaderOfInboxSide";
import InboxList from "./InboxList";

const InboxSideBar = ({responsiveClass}) => {
    return (
        <div className={`inbox-side-bar ${responsiveClass}`}>
            <HeaderOfInboxSide />
            <InboxList />
        </div>
    );
};

export default InboxSideBar;
