import React from "react";
import TagOfOptionRoom from "../components/TagOfOptionRoom";
import MyCustomModal from "./MyCustomModal";

const CreateRoom = () => {
    const renderCreateRoomComp = () => {
        return <div> tạo nhóm </div>;
    };
    return (
        <>
            <TagOfOptionRoom id="createRoom" classIcon="fas fa-user-plus" text="Tạo nhóm với người này" />
            <MyCustomModal
                inner={renderCreateRoomComp()}
                headerTitle="tạo nhóm"
                id="createRoom"
            />
        </>
    );
};

export default CreateRoom;
