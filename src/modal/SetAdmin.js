import React from "react";
import { useDispatch } from "react-redux";
import Swal from "sweetalert2";
import TagOfOptionRoom from "../components/TagOfOptionRoom";
import {
    getMembersInRoom,
    recallMemberAdminRole,
    setMemberBecomeAdmin,
} from "../redux/action/actInfoRoom";
import MyCustomModal from "./MyCustomModal";

const SetAdmin = ({ roomId, membersInRoom, authentication }) => {
    const dispatch = useDispatch();

    const setMemberBecomeAdminHandle = (member) => {
        Swal.fire({
            title: "Cấp quyền",
            text: ` Thiết lập ${member.user.displayName} thành quản trị viên?`,
            icon: "info",
            showCancelButton: true,
            confirmButtonColor: "#a166d1",
            cancelButtonColor: "#262626",
            cancelButtonText: "trở lại",
            confirmButtonText: "Cấp quyền",
        }).then((result) => {
            if (result.isConfirmed) {
                dispatch(setMemberBecomeAdmin(roomId, member.user.id));
            }
        });
    };

    const recallMemberAdminRoleHandle = (member) => {
        Swal.fire({
            title: "Hủy quyền",
            text: ` Thu hồi quyền Quản trị viên của ${member.user.displayName}?`,
            icon: "info",
            showCancelButton: true,
            confirmButtonColor: "#a166d1",
            cancelButtonColor: "#262626",
            cancelButtonText: "trở lại",
            confirmButtonText: "Xác nhận",
        }).then((result) => {
            if (result.isConfirmed) {
                dispatch(recallMemberAdminRole(roomId, member.user.id));
            }
        });
    };

    const membersInRoomMap = membersInRoom.map((member, index) => {
        if (authentication.user.id === member.user.id) return <div key={index}> </div>;
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
                        <div
                            className="btn btn-outline-danger"
                            onClick={() => recallMemberAdminRoleHandle(member)}
                        >
                            {" "}
                            hủy quyền{" "}
                        </div>
                    ) : (
                        <div
                            className="btn btn-secondary"
                            onClick={() => setMemberBecomeAdminHandle(member)}
                        >
                            {" "}
                            cấp quyền{" "}
                        </div>
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
                //   functionWhenClick={() => )}
            />
        </>
    );
};

export default SetAdmin;
