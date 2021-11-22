import React from "react";
import { useDispatch } from "react-redux";
import TagOfOptionRoom from "../components/TagOfOptionRoom";
import { deleteConvesation } from "../redux/action/actInfoRoom";
import MyCustomModal from "./MyCustomModal";

const DeleteConversation = ({ currentInboxId }) => {
    const dispatch = useDispatch();
    const renderDeleteConversation = () => {
        return (
            <div className="center flex-column text-danger p-5">
                <i className="fas fa-exclamation-triangle fa-4x "></i>
                <p>Bạn có muốn xóa cuộc hội thoại này khum?</p>
            </div>
        );
    };

    const deleteConversationHandle = () => {
        dispatch(deleteConvesation(currentInboxId));
    };

    return (
        <>
            <TagOfOptionRoom
                id="deleteConversation"
                colorIcon="text-danger"
                classIcon="far fa-trash-alt"
                text="Xóa cuộc hội thoại"
            />
            <MyCustomModal
                inner={renderDeleteConversation()}
                headerTitle="Xóa cuộc hội thoại"
                id="deleteConversation"
                functionWhenClick={() => deleteConversationHandle()}
                color="danger"
            />
        </>
    );
};

export default DeleteConversation;
