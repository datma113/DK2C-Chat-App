import React from "react";
import CreateRoom from "../../modal/CreateRoom";
import MembersInRoom from "../../modal/MembersInRoom";
import BlockUser from "../../modal/BlockUser";
import ViewPersonalPage from "../../modal/ViewPersonalPage";
import ReportUser from "../../modal/ReportUser";
import DeleteConversation from "../../modal/DeleteConversation";
import { useSelector } from "react-redux";

const OptionOfRoom = ({ roomId }) => {
    const currentInbox = useSelector((state) => state.currentInbox);
    const TYPE_ROOM_ONE = "ONE";
    const TYPE_ROOM_GROUP = "GROUP";
    return (
        <>
            {currentInbox.type === TYPE_ROOM_GROUP && (
                <div>
                    <MembersInRoom roomId={roomId} />
                    <CreateRoom />
                    <ViewPersonalPage />
                    <BlockUser />
                    <ReportUser />
                    <DeleteConversation />
                </div>
            )}

            {currentInbox.type === TYPE_ROOM_ONE && <div>
                
                </div>}
        </>
    );
};

export default OptionOfRoom;
