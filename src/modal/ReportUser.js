import React, { useState } from "react";
import Swal from "sweetalert2";
import TagOfOptionRoom from "../components/TagOfOptionRoom";
import { reportUser } from "../redux/action/actInfoRoom";
import MyCustomModal from "./MyCustomModal";

const ReportUser = ({ currentInbox = {} }) => {
    const [reportContent, setreportContent] = useState("");
    console.log(reportContent);
    const renderReportUserComp = () => {
        return (
            <div className="center flex-column text-warning p-5">
                <i className="fas fa-exclamation-circle fa-4x "></i>
                <p>Hãy báo cáo cho chúng tôi có gì không ổn:</p>
                <div class="form-group w-100">
                    <textarea
                        class="form-control text-small w-100"
                        rows="10"
                        spellCheck={false}
                        onChange={(e) => setreportContent(e.target.value)}
                    ></textarea>
                </div>
            </div>
        );
    };

    const isDisabledBtn = (content = "") => {
        return content.length > 0 ? false : true;
    };

    const reportUserHandle = (userIdToReport, content) => {
        const user = {
            toId: userIdToReport,
            content,
        };
        reportUser(user).then(() => {
            setreportContent("")
            Swal.fire({
                icon: "success",
                title: "Thông báo",
                html: `<div class="text-normal text-center text-success"> Cám ơn bạn đã báo cáo cho chúng tôi! <br>
                 chúng tôi sẽ xem xét báo cáo của bạn!</div>`,
            });
        });
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
                isDisabledConfirmBtn={isDisabledBtn(reportContent)}
                functionWhenClick={() => reportUserHandle(currentInbox.senderId, reportContent)}
            />
        </>
    );
};

export default ReportUser;
