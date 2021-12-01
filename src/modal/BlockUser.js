import React from "react";
import { useDispatch } from "react-redux";
import Swal from "sweetalert2";
import TagOfOptionRoom from "../components/TagOfOptionRoom";
import { blockUser } from "../redux/action/actInfoRoom";
import MyCustomModal from "./MyCustomModal";

const BlockUser = ({ currentInbox }) => {
    const dispatch = useDispatch();
    const renderBlockUserComp = () => {
        return <div> bạn có muốn chặn người này khum?</div>;
    };

    const blockUserHandle = (userId) => {
        dispatch(blockUser(userId)).then(() => {
            Swal.fire({
                icon: "warning",
                title: "Oops...",
                html: `<div class="text-normal text-center text-danger"> đã chặn người này </div>`,
            });
        });
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
                functionWhenClick={() => blockUserHandle(currentInbox.senderId)}
            />
        </>
    );
};

export default BlockUser;
