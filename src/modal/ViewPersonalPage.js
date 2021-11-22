import React from "react";
import { useDispatch } from "react-redux";
import TagOfOptionRoom from "../components/TagOfOptionRoom";
import { getUserProfile } from "../redux/action/actFriends";
import MyCustomModal from "./MyCustomModal";
import FriendProfile from '../components/FriendProfile'

const ViewPersonalPage = ({ currentInbox, friendProfile = {} }) => {
    const userId = currentInbox.senderId;
    const dispatch = useDispatch();

    const renderViewPersonalPageComp = () => {
        return <FriendProfile friendProfile={friendProfile} />
    };

    const viewPersonalPageHandle = () => {
        dispatch(getUserProfile(userId));
    };

    return (
        <>
            <TagOfOptionRoom
                id="personalPage"
                colorIcon="text-secondary"
                classIcon="fas fa-user"
                text="xem trang cá nhân"
                functionWhenClick={() => viewPersonalPageHandle()}
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
