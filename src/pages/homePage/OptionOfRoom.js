import React from "react";
import CreateRoom from "../../modal/CreateRoom";
import MembersInRoom from "../../modal/MembersInRoom";
import BlockUser from "../../modal/BlockUser";
import ViewPersonalPage from "../../modal/ViewPersonalPage";
import ReportUser from "../../modal/ReportUser";
import DeleteConversation from "../../modal/DeleteConversation";

const OptionOfRoom = ({roomId}) => {
    return (
        <>
            <MembersInRoom  roomId={roomId}/>
            <CreateRoom />
            <ViewPersonalPage />
            <BlockUser />
            <ReportUser />
            <DeleteConversation />
        </>
    );
};

export default OptionOfRoom;
