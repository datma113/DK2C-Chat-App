import React from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import FriendsToCreateRoom from "../../components/FriendsToCreateRoom";
import { getFriendsListFromServer } from "../../redux/action/actFriends";

const CreateRoomWithMems = () => {
     const friendsList = useSelector(state => state.friendsList)
     const dispatch = useDispatch()
     
     const friendsMap = friendsList.map((friend, index) => {
          return <FriendsToCreateRoom friend={friend.friend} key={index} />
     })

     const handleSearchFriends = (e) => {
        dispatch(getFriendsListFromServer(e.target.value))
        .then((resp) => {
            
        })
     }

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
                <div className="create-room-mems__friends__left row">
                    {friendsMap}
                </div>
                <div className="create-room-mems__friends__right">right</div>
            </div>
        </div>
    );
};

export default CreateRoomWithMems;
