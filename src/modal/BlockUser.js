import React from "react";
import TagOfOptionRoom from "../components/TagOfOptionRoom";
import MyCustomModal from "./MyCustomModal";

const BlockUser = () => {
    const renderBlockUserComp = () => {
        return <div> bạn có muốn chặn người này khum?</div>;
    };
    return (
        <>
            <TagOfOptionRoom
                id="blockUser"
                colorIcon="text-danger"
                classIcon="fas fa-user-slash"
                text="Chặn người này"
            />
            <MyCustomModal
                inner={renderBlockUserComp()}
                headerTitle="Chặn người này"
                id="blockUser"
            />
        </>
    );
};

export default BlockUser;
