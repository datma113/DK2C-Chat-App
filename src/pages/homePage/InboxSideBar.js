import React from "react";
import HeaderOfInboxSide from "./HeaderOfInboxSide";
import InboxList from "./InboxList";

const InboxSideBar = ({ responsiveClass, currentInboxId, authentication }) => {
    return (
        <div className={`inbox-side-bar ${responsiveClass} bg-light`}>
            <HeaderOfInboxSide />
            <InboxList authentication={authentication} currentInboxId={currentInboxId} />
        </div>
    );
};

export default InboxSideBar;
