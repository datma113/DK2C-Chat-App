import React from "react";
import TagOfOptionRoom from "../components/TagOfOptionRoom";
import MyCustomModal from "./MyCustomModal";
import { deleteMember, getMembersInRoom } from "../redux/action/actInfoRoom";
import { useDispatch } from "react-redux";
import { addFriend } from "../redux/action/actFriends";
import Swal from "sweetalert2";

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
            case "SENT":
                return (
                    <div className="d-flex flex-column w-100">
                        <button
                            type="button"
                            className="member-in-room__btn btn  btn-warning disabled"
                        >
                            đã gữi
                        </button>
                        <button
                            type="button"
                            className="member-in-room__btn btn  btn-outline-danger mt-2"
                        >
                            hủy
                        </button>
                    </div>
                );
            default:
                return (
                    <button
                        type="button"
                        className=" member-in-room__btn btn btn-secondary"
                        onClick={() => {
                            addFriend(member.user.id);
                        }}
                    >
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

    const renderDeleteBtn = (member) => {
        const THE_HIGHEST_AUTHOR = currentInbox.inbox.room.createByUserId;
        const IS_ADMIN = member.isAdmin;
        const MEMBER_ID = member.user.id;

        if (MEMBER_ID === THE_HIGHEST_AUTHOR) return "";
        if (IS_ADMIN) return "";

        return (
            <button
                type="button"
                className="btn btn-danger"
                onClick={() => {
                    Swal.fire({
                        title: "Xóa thành viên",
                        text: ` Bạn có muốn xóa ${member.user.displayName} ra khỏi nhóm?`,
                        icon: "error",
                        showCancelButton: true,
                        confirmButtonColor: "#F93154",
                        cancelButtonColor: "#262626",
                        cancelButtonText: "trở lại",
                        confirmButtonText: "Xác nhận",
                    }).then((result) => {
                        if (result.isConfirmed) {
                            dispatch(deleteMember(roomId, MEMBER_ID));
                        }
                    });
                }}
            >
                {" "}
                xóa thành viên
            </button>
        );
    };

    const membersInRoomMap = membersInRoom.map((member, index) => {
        return (
            <div key={index} className="row p-3">
                <div className="member-in-room col-2 mb-3">
                    <img className="member-in-room__img" src={member.user.imageUrl} alt="" />
                    {renderKey(member)}
                </div>
                <div className="col-6 text-small d-flex align-items-center">
                    {member.user.displayName}
                </div>
                <div className="col-2 center">{renderDeleteBtn(member)}</div>
                <div className="col-2 center">{renderAddFriendButton(member)}</div>
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
                dialogClass="members-in-room-dialog"
                inner={renderMemberInRoom()}
                headerTitle="Thành viên"
                id="membersInRoom"
            />
        </>
    );
};

export default MembersInRoom;
