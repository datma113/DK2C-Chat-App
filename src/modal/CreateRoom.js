import React from "react";
import TagOfOptionRoom from "../components/TagOfOptionRoom";
import MyCustomModal from "./MyCustomModal";

import TextInput from "../components/TextInput";
import { createNewRoom, storeRoomName } from "../redux/action/actInfoRoom";
import { useSelector } from "react-redux";
const CreateRoom = () => {
    const roomName = useSelector((state) => state.roomName);
    const authentication = useSelector((state) => state.authentication);
    const currentInbox = useSelector((state) => state.currentInbox);
    
    const createNewRoomHandle = () => {
        const MY_ID = authentication.user.id;
        const ROOM_TYPE_GROUP = 'GROUP'
        const room = {
            name: roomName.name,
            createByUserId: MY_ID,
            members: [
                {
                    userId: currentInbox.senderId,
                    addByUserId: MY_ID,
                },
            ],
            type: ROOM_TYPE_GROUP
        };

        createNewRoom(room);
    };

    const renderCreateRoom = () => {
        return (
            <div className="mt-5 center">
                <TextInput
                    id="createNewRoom"
                    label="Nhập tên nhóm mới"
                    type="text"
                    functionToDispatch={storeRoomName}
                    keyStoreToReducer="name"
                />
            </div>
        );
    };

    return (
        <>
            <TagOfOptionRoom
                id="createRoom"
                colorIcon="text-success"
                classIcon="fas fa-user-plus"
                text="Tạo nhóm với người này"
            />
            <MyCustomModal
                inner={renderCreateRoom()}
                headerTitle="Tạo nhóm"
                id="createRoom"
                functionWhenClick={() => createNewRoomHandle()}
            />
        </>
    );
};

export default CreateRoom;
