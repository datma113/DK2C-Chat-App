import React from "react";
import TagOfOptionRoom from "../components/TagOfOptionRoom";
import MyCustomModal from "./MyCustomModal";

const ViewPersonalPage = () => {
    const renderViewPersonalPageComp = () => {
        return <div> Trang cá nhân </div>;
    };

    return (
        <>
            <TagOfOptionRoom
                id="personalPage"
                colorIcon="text-secondary"
                classIcon="fas fa-user"
                text="xem trang cá nhân"
            />
            <MyCustomModal
                inner={renderViewPersonalPageComp()}
                headerTitle="trang cá nhân"
                id="personalPage"
            />
        </>
    );
};

export default ViewPersonalPage;
