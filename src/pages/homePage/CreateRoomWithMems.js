import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import FriendsToCreateRoom from "../../components/FriendsToCreateRoom";
import { getFriendsListFromServer } from "../../redux/action/actFriends";

const CreateRoomWithMems = ({ friends, getFriendsAdded }) => {
    const dispatch = useDispatch();

    const [friendsAdded, setfriendsAdded] = useState([]);

    const pushFriendsToListAdded = (friend) => {
        let cloneFriendsAdded = [...friendsAdded];
        cloneFriendsAdded.push(friend);
        cloneFriendsAdded = [...new Set(cloneFriendsAdded)];
        setfriendsAdded(cloneFriendsAdded);
    };

    const deleteFriendsFromListAdded = (friendId) => {
        const cloneFriendsAdded = [...friendsAdded];

        const friendsId = cloneFriendsAdded.map((friend) => friend.id);
        const posOfFriendDeleted = friendsId.indexOf(friendId);
        cloneFriendsAdded.splice(posOfFriendDeleted, 1);

        setfriendsAdded(cloneFriendsAdded);
    };

    const friendsMap = friends.map((friend, index) => {
        const friendsId = [...friendsAdded].map((friend) => friend.id);

        const isActive = friendsId.includes(friend.friend.id) ? true : false;

        return (
            <FriendsToCreateRoom
                friend={friend.friend}
                key={index}
                functionWhenClick={() => {
                    pushFriendsToListAdded(friend.friend);
                }}
                isActive={isActive}
            />
        );
    });

    useEffect(() => {
        getFriendsAdded(friendsAdded);
    }, [getFriendsAdded, friendsAdded]);

    const friendsAddedMap = friendsAdded.map((friend, index) => {
        return (
            <div key={index} className="create-room-mems__friends-added ">
                <img
                    src={friend.imageUrl}
                    className="create-room-mems__friends-added__img"
                    alt=""
                />
                <div className="create-room-mems__friends-added__text text-small text-primary">
                    {friend.displayName}
                </div>
                <i
                    className="create-room-mems__friends-added__icon center text-danger far fa-times-circle"
                    onClick={() => {
                        deleteFriendsFromListAdded(friend.id);
                    }}
                ></i>
            </div>
        );
    });

    const handleSearchFriends = (e) => {
        dispatch(getFriendsListFromServer(e.target.value));
    };

    return (
        <div className="create-room-mems flex-column">
            <div className="center">
                <input
                    type="text"
                    className="form-control text-medium text-center w-75"
                    placeholder="Tìm kiếm bạn bè"
                    onChange={(e) => handleSearchFriends(e)}
                />
            </div>

            <hr></hr>
            <div className="create-room-mems__friends">
                <div className="create-room-mems__friends__left row">{friendsMap}</div>
                <div className="create-room-mems__friends__right ">{friendsAddedMap}</div>
            </div>
        </div>
    );
};

export default CreateRoomWithMems;
