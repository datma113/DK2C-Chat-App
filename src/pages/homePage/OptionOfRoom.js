import React from "react";
import CreateRoom from "../../modal/CreateRoom";
import ShowTheSameRoomOfUser from "../../modal/ShowTheSameRoomOfUser";
import BlockUser from "../../modal/BlockUser";
import ViewPersonalPage from "../../modal/ViewPersonalPage";
import ReportUser from "../../modal/ReportUser";
import DeleteConversation from "../../modal/DeleteConversation";

const OptionOfRoom = () => {
    return (
        <>
            <ShowTheSameRoomOfUser />
            <CreateRoom />
            <ViewPersonalPage />
            <BlockUser />
            <ReportUser />
            <DeleteConversation />
        </>
    );
};

export default OptionOfRoom;
