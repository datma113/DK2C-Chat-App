import React, { useEffect } from "react";
import MembersInRoom from "../../modal/MembersInRoom";
import BlockUser from "../../modal/BlockUser";
import ViewPersonalPage from "../../modal/ViewPersonalPage";
import ReportUser from "../../modal/ReportUser";
import DeleteConversation from "../../modal/DeleteConversation";
import { useDispatch, useSelector } from "react-redux";
import AddNewMembers from "../../modal/AddNewMembers";
import { getFriendsListFromServer } from "../../redux/action/actFriends";
import CreateRoom from "../../modal/CreateRoom";
import OutRoom from "../../modal/OutRoom";

const OptionOfRoom = ({ roomId }) => {
    const currentInbox = useSelector((state) => state.currentInbox);
    const friendsList = useSelector((state) => state.friendsList);
    const currentInboxId = useSelector(state => state.currentInboxId)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getFriendsListFromServer());
    }, [dispatch, roomId]);

    const TYPE_ROOM_ONE = "ONE";
    const TYPE_ROOM_GROUP = "GROUP";
    return (
        <>
            {currentInbox.type === TYPE_ROOM_GROUP && (
                <div>
                    <MembersInRoom roomId={roomId} />
                    <AddNewMembers friendsList={friendsList} />
                    <ViewPersonalPage />
                    <BlockUser />
                    <ReportUser />
                    <DeleteConversation />
                    <OutRoom  inboxId={currentInboxId} roomId={roomId}/>
                </div>
            )}

            {currentInbox.type === TYPE_ROOM_ONE && (
                <div>
                    <CreateRoom />
                    <DeleteConversation />
                </div>
            )}
        </>
    );
};

export default OptionOfRoom;
