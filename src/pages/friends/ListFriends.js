import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { getInboxByFriendId } from "../../redux/action/actFriends";
import Friend from "./Friend";

const ListFriends = () => {
    const friendsList = useSelector((state) => state.friendsList);
    const [indexOfFriendsOption, setindexOfFriendsOption] = useState(-1);
    const dispatch = useDispatch();

    const gotoChatboxByFriendId = (friendId) => {
        dispatch(getInboxByFriendId(friendId));
    };

    const handleClickToOption = (e, index) => {
        e.stopPropagation();

        setindexOfFriendsOption(index);
    };

    const isShowfriendsOption = (index) => {
        return index === indexOfFriendsOption ? "option-friend-inbox__options--show" : "";
    };

    window.onclick = () => {
        setindexOfFriendsOption(-1);
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
                    handleClickToOption(e, index);
                }}
                isShowFriendsOption={isShowfriendsOption(index)}
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
