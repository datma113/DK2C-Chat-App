import React from "react";
import TagOfOptionRoom from "../components/TagOfOptionRoom";
import MyCustomModal from "./MyCustomModal";

const ReportUser = () => {
    const renderReportUserComp = () => {
        return <div> Báo cáo người này </div>;
    };

    return (
        <>
            <TagOfOptionRoom
                id="reportUser"
                colorIcon="text-warning"
                classIcon="fas fa-exclamation-circle"
                text="Báo cáo người này"
            />
            <MyCustomModal
                inner={renderReportUserComp()}
                headerTitle="Báo cáo"
                id="reportUser"
            />
        </>
    );
};

export default ReportUser;
