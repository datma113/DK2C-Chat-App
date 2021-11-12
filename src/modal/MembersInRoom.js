import React from "react";
import TagOfOptionRoom from "../components/TagOfOptionRoom";
import MyCustomModal from "./MyCustomModal";
import { getMembersInRoom } from "../redux/action/actInfoRoom";
import { useDispatch } from "react-redux";

const MembersInRoom = ({ roomId, membersInRoom, currentInbox, authentication }) => {
    const dispatch = useDispatch();

    const renderAddFriendButton = (member) => {
        if (authentication.user.id === member.user.id) return "";
        switch (member.user.friendStatus) {
            case "FRIEND":
                return (
                    <button type="button" className="member-in-room__btn btn  btn-light disabled">
                        đã là bạn
                    </button>
                );

            default:
                return (
                    <button type="button" className=" member-in-room__btn btn btn-secondary">
                        kết bạn
                    </button>
                );
        }
    };
    const renderKey = (member) => {
        const THE_HIGHEST_AUTHOR = currentInbox.inbox.room.createByUserId;
        const IS_ADMIN = member.isAdmin;
        const MEMBER_ID = member.user.id;
        if (MEMBER_ID === THE_HIGHEST_AUTHOR)
            return <i className=" fas fa-user-shield member-in-room__key text-danger"></i>;
        if (MEMBER_ID !== THE_HIGHEST_AUTHOR && IS_ADMIN)
            return <i className=" fas fa-key member-in-room__key text-warning"></i>;
        return "";
    };

    const membersInRoomMap = membersInRoom.map((member, index) => {
        return (
            <div key={index} className="row p-3">
                <div className="member-in-room col-2 mb-3">
                    <img className="member-in-room__img" src={member.user.imageUrl} alt="" />
                    {renderKey(member)}
                </div>
                <div className="col-7 text-small d-flex align-items-center">
                    {member.user.displayName}
                </div>
                <div className="col-3 center">{renderAddFriendButton(member)}</div>
            </div>
        );
    });

    const renderMemberInRoom = () => {
        return membersInRoomMap;
    };

    return (
        <>
            <TagOfOptionRoom
                id="membersInRoom"
                colorIcon="text-primary"
                classIcon="fas fa-users"
                text="Xem thành viên"
                functionWhenClick={() => dispatch(getMembersInRoom(roomId))}
            />
            <MyCustomModal
                inner={renderMemberInRoom()}
                headerTitle="Thành viên"
                id="membersInRoom"
            />
        </>
    );
};

export default MembersInRoom;
