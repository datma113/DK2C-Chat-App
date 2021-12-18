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
import SetAdmin from "../../modal/SetAdmin";
import UnblockUser from "../../components/UnblockUser";

const OptionOfRoom = ({ roomId }) => {
    const currentInbox = useSelector((state) => state.currentInbox);
    const friendsList = useSelector((state) => state.friendsList);
    const currentInboxId = useSelector((state) => state.currentInboxId);
    const membersInRoom = useSelector((state) => state.membersInRoom);
    const authentication = useSelector((state) => state.authentication);
    const currentRoomId = useSelector((state) => state.currentRoomId);
    const friendProfile = useSelector((state) => state.friendProfile);
    const dispatch = useDispatch();

    const isBlockStatus = currentInbox.inbox?.room.to?.meBLock;

    useEffect(() => {
        dispatch(getFriendsListFromServer());
    }, [dispatch, roomId]);

    const isShowSetAdminTag = () => {
        const MY_ID = authentication.user.id;
        return MY_ID === currentInbox.inbox.room.createByUserId ? true : false;
    };

    const TYPE_ROOM_ONE = "ONE";
    const TYPE_ROOM_GROUP = "GROUP";
    return (
        <>
            {currentInbox.type === TYPE_ROOM_GROUP && (
                <div>
                    <MembersInRoom
                        roomId={roomId}
                        membersInRoom={membersInRoom}
                        currentInbox={currentInbox}
                        authentication={authentication}
                    />
                    <AddNewMembers
                        friendsList={friendsList}
                        membersInRoom={membersInRoom}
                        authentication={authentication}
                        currentRoomId={currentRoomId}
                    />
                    {isShowSetAdminTag() && (
                        <SetAdmin
                            membersInRoom={membersInRoom}
                            roomId={roomId}
                            currentInbox={currentInbox}
                            authentication={authentication}
                        />
                    )}

                    <DeleteConversation currentInboxId={currentInboxId} />
                    <OutRoom inboxId={currentInboxId} roomId={roomId} />
                </div>
            )}

            {currentInbox.type === TYPE_ROOM_ONE && (
                <div>
                    <CreateRoom currentInbox={currentInbox}/>
                    <ViewPersonalPage currentInbox={currentInbox} friendProfile={friendProfile} />
                    <DeleteConversation currentInboxId={currentInboxId} />
                    {isBlockStatus ? (
                        <UnblockUser currentInbox={currentInbox} />
                    ) : (
                        <BlockUser currentInbox={currentInbox} />
                    )}
                    <ReportUser  currentInbox={currentInbox}/>
                </div>
            )}
        </>
    );
};

export default OptionOfRoom;
