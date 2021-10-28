import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { deleteFriends, getInboxByFriendId, getUserProfile } from "../../redux/action/actFriends";
import { RESET_CURRENT_INBOX_ID, RESET_CURRENT_ROOM_ID } from "../../redux/constants/constants";
import Friend from "./Friend";

const ListFriends = () => {
    const friendsList = useSelector((state) => state.friendsList);
    const friendProfile = useSelector((state) => state.friendProfile);

    const [indexOfFriendsOption, setindexOfFriendsOption] = useState(-1);

    const dispatch = useDispatch();

    const gotoChatboxByFriendId = (friendId) => {
        dispatch(getInboxByFriendId(friendId));
    };

    const handleClickToOption = (e, friendId, index) => {
        e.stopPropagation();
        e.target.id === `fo${friendId}` && setindexOfFriendsOption(index);
    };

    const isShowfriendsOption = (index) => {
        return index === indexOfFriendsOption ? "option-friend-inbox__options--show" : "";
    };

    window.onclick = () => {
        setindexOfFriendsOption(-1);
    };

    const viewProfile = (e, friendId) => {
        e.stopPropagation();
        dispatch(getUserProfile(friendId));
    };

    const hideOptionWhenCloseModal = () => {
        setindexOfFriendsOption(-1);
    };

    const deleteFriend = (friendId) => {
        dispatch(deleteFriends(friendId)).then(() => {

            dispatch({
                type: RESET_CURRENT_INBOX_ID,
            });
            
            dispatch({
                type: RESET_CURRENT_ROOM_ID,
            });
        });
    };

    const listFriendMap = friendsList.map((friend, index) => {
        const ID = friend.friend.id;

        return (
            <Friend
                key={index}
                friend={friend}
                functionWhenClick={() => gotoChatboxByFriendId(ID)}
                gotoChat={() => {
                    dispatch(getInboxByFriendId(ID)).then(() => setindexOfFriendsOption(-1));
                }}
                clickToOption={(e) => {
                    handleClickToOption(e, ID, index);
                }}
                isShowFriendsOption={isShowfriendsOption(index)}
                viewProfile={(e) => {
                    viewProfile(e, ID);
                }}
                mouseLeave={() => hideOptionWhenCloseModal()}
                profile={friendProfile}
                deleteFriend={() => {
                    deleteFriend(ID);
                }}
            />
        );
    });
    return (
        <div>
            {listFriendMap}
            {friendsList.length < 8 ? <div style={{ height: "500px" }}></div> : null}
        </div>
    );
};

export default ListFriends;
