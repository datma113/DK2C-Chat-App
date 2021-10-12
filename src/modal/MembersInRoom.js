import React from "react";
import { useSelector } from "react-redux";
import TagOfOptionRoom from "../components/TagOfOptionRoom";
import MyCustomModal from "./MyCustomModal";
import { getMembersInRoom } from "../redux/action/actInfoRoom";
import { useDispatch } from "react-redux";

const MembersInRoom = ({roomId}) => {
    const dispatch = useDispatch()

    const membersInRoom = useSelector((state) => state.membersInRoom);
   
    const membersInRoomMap = membersInRoom.map((member, index) => {
       
        return (
            <div key={index} className="row p-3">
                <div className="member-in-room col-2 mb-3">
                    <img className="member-in-room__img" src={member.user.imageUrl} alt="" />
                </div>
                <div className="col-8 text-small"> {member.user.displayName} </div>
                <div className="col-2 ">
                    <button type="button" className="btn btn-md btn-outline-secondary">
                        kết bạn
                    </button>
                </div>
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
