import React from "react";
import TagOfOptionRoom from "../components/TagOfOptionRoom";
import MyCustomModal from "./MyCustomModal";

const CreateRoom = () => {
    const renderTheSameRoomComp = () => {
        return <div> tạo nhóm </div>;
    };
    return (
        <>
            <TagOfOptionRoom id="createRoom" classIcon="fas fa-user-plus" text="Tạo nhóm với người này" />
            <MyCustomModal
                inner={renderTheSameRoomComp()}
                headerTitle="tạo nhóm"
                id="createRoom"
            />
        </>
    );
};

export default CreateRoom;
