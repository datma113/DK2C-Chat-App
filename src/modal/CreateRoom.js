import React from "react";
import { useDispatch } from "react-redux";
import TagOfOptionRoom from "../components/TagOfOptionRoom";
import { ADD_FRIEND_TO_CREATE_ROOM, createAction } from "../redux/constants/constants";

const CreateRoom = ({ currentInbox }) => {
    const dispatch = useDispatch();

    const friend = currentInbox.inbox?.room?.to;

    const createRoomHandle = () => {
        dispatch(createAction(ADD_FRIEND_TO_CREATE_ROOM, friend));
    };
    return (
        <>
            <TagOfOptionRoom
                id="createRoomWithMemsModal"
                colorIcon="text-success"
                classIcon="fas fa-user-plus"
                text="Tạo nhóm với người này"
                functionWhenClick={() => createRoomHandle()}
            />
        </>
    );
};

export default CreateRoom;
