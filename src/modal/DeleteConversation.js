import React from "react";
import TagOfOptionRoom from "../components/TagOfOptionRoom";
import MyCustomModal from "./MyCustomModal";

const DeleteConversation = () => {
    const renderDeleteConversation = () => {
        return <div> Xóa cuộc hội thoại</div>;
    };
    return (
        <>
            <TagOfOptionRoom
                id="deleteConversation"
                colorIcon="text-success"
                classIcon="fas fa-comment-slash"
                text="Xóa cuộc hội thoại"
            />
            <MyCustomModal
                inner={renderDeleteConversation()}
                headerTitle="Xóa cuộc hội thoại"
                id="deleteConversation"
            />
        </>
    );
};

export default DeleteConversation;
