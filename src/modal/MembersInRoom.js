import React from "react";
import TagOfOptionRoom from "../components/TagOfOptionRoom";
import MyCustomModal from "./MyCustomModal";
import { deleteMember, getMembersInRoom } from "../redux/action/actInfoRoom";
import { useDispatch } from "react-redux";
import { addFriend } from "../redux/action/actFriends";

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
            <>
                <button
                    type="button"
                    className="btn btn-danger"
                    data-mdb-toggle="modal"
                    data-mdb-target={`#deleteMember${member.user.id}`}
                >
                    xóa thành viên
                </button>

                <div
                    className="modal fade bg-dark"
                    id={`deleteMember${member.user.id}`}
                    tabIndex="1"
                    aria-labelledby="exampleModalLabel"
                    aria-hidden="true"
                >
                    <div className="modal-dialog" style={{ marginTop: `25rem` }}>
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">
                                    Xóa thành viên
                                </h5>
                                <button
                                    type="button"
                                    className="btn-close"
                                    onClick={() =>
                                        window.$(`#deleteMember${member.user.id}`).modal("hide")
                                    }
                                    aria-label="Close"
                                ></button>
                            </div>
                            <div className="modal-body text-center">
                                Bạn có muốn xóa:{" "}
                                <p className="text-danger">{member.user.displayName}</p> ra khỏi
                                nhóm không?
                            </div>
                            <div className="modal-footer">
                                <button
                                    type="button"
                                    className="btn btn-outline-secondary"
                                    onClick={() =>
                                        window.$(`#deleteMember${member.user.id}`).modal("hide")
                                    }
                                >
                                    hủy
                                </button>
                                <button
                                    type="button"
                                    className="btn btn-primary"
                                    onClick={() => {
                                        deleteMemberHandle(member.user.id);
                                    }}
                                >
                                    xác nhận
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    };

    const deleteMemberHandle = (memberId) => {
        dispatch(deleteMember(roomId, memberId))
        window.$(`#deleteMember${memberId}`).modal("hide");
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
