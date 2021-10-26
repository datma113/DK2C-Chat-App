import React from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { getInboxByFriendId } from "../../redux/action/actFriends";
import Friend from "./Friend";

const ListFriends = () => {
    const friendsList = useSelector((state) => state.friendsList);
    const dispatch = useDispatch();

    const gotoChatboxByFriendId = (friendId) => {
        dispatch(getInboxByFriendId(friendId));
    };

    const listFriendMap = friendsList.map((friend, index) => {
        return (
            <Friend
                key={index}
                friend={friend}
                functionWhenClick={() => gotoChatboxByFriendId(friend.friend.id)}
                gotoChat={() => gotoChatboxByFriendId(friend.friend.id)}
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
