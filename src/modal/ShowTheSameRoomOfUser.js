import React from "react";
import TagOfOptionRoom from "../components/TagOfOptionRoom";
import MyCustomModal from "./MyCustomModal";

const ShowTheSameRoomOfUser = () => {
    const renderTheSameRoomComp = () => {
        return <div> nhóm chung </div>;
    };

    return (
        <>
            <TagOfOptionRoom
                id="theSameRoom"
                colorIcon="text-primary"
                classIcon="fas fa-users"
                text="xem nhóm chung"
            />
            <MyCustomModal
                inner={renderTheSameRoomComp()}
                headerTitle="nhóm chung"
                id="theSameRoom"
            />
        </>
    );
};

export default ShowTheSameRoomOfUser;
