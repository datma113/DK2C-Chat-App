import React from "react";
import { useDispatch } from "react-redux";
import MyCustomModal from "../modal/MyCustomModal";
import { unblockUser } from "../redux/action/actInfoRoom";
import TagOfOptionRoom from "./TagOfOptionRoom";

const UnblockUser = ({ currentInbox }) => {
    const dispatch = useDispatch();
    const renderUnblockUser = () => {
        return (
            <div className="center flex-column text-dark p-5">
                <i className="fas fa-unlock-alt fa-4x "></i>
                <p>Bạn có gỡ gặn người này không?</p>
            </div>
        );
    };

    const unblockUserHandle = () => {
        dispatch(unblockUser(currentInbox.senderId));
    };

    return (
        <>
            <TagOfOptionRoom
                id="unblockUser"
                colorIcon="text-dark"
                classIcon="fas fa-unlock-alt"
                text="Gỡ chặn người này"
            />
            <MyCustomModal
                inner={renderUnblockUser()}
                headerTitle="Gỡ chặn người này"
                id="unblockUser"
                functionWhenClick={() => unblockUserHandle()}
                color="dark"
            />
        </>
    );
};

export default UnblockUser;
