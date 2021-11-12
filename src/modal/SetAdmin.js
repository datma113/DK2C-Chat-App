import React, { useState } from "react";
import { useDispatch } from "react-redux";
import TagOfOptionRoom from "../components/TagOfOptionRoom";
import { getMembersInRoom, setMemberBecomeAdmin } from "../redux/action/actInfoRoom";
import MyCustomModal from "./MyCustomModal";

const SetAdmin = ({ roomId, membersInRoom, currentInbox, authentication }) => {
    const dispatch = useDispatch();
    const [memberId, setmemberId] = useState("");

    const membersInRoomMap = membersInRoom.map((member, index) => {
        if (authentication.user.id === member.user.id) return <> </>;
        return (
            <div className="row m-2 mt-4" key={index}>
                <div className="col-1">
                    <img src={member.user.imageUrl} className="header-img" alt="" />
                </div>
                <div
                    className="col-9 text-medium d-flex align-items-center"
                    style={{ paddingLeft: `2rem` }}
                >
                    {member.user.displayName}
                </div>

                <div className="col-2">
                    {member.isAdmin ? (
                        <div className="btn btn-outline-danger"> hủy quyền </div>
                    ) : (
                        <div className="btn btn-secondary"> cấp quyền </div>
                    )}
                </div>
            </div>
        );
    });

    const renderSetAdmin = () => {
        return membersInRoomMap;
    };

    return (
        <>
            <TagOfOptionRoom
                id="setAdminModal"
                classIcon="fas fa-key text-warning"
                text="Cấp quyền"
                functionWhenClick={() => dispatch(getMembersInRoom(roomId))}
            />
            <MyCustomModal
                dialogClass={`member-in-room-author`}
                inner={renderSetAdmin()}
                headerTitle="Thiết lập thành quản trị viên"
                id="setAdminModal"
                //   functionWhenClick={() => dispatch(setMemberBecomeAdmin(roomId, memberId))}
            />
        </>
    );
};

export default SetAdmin;
